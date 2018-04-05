var io = require('socket.io')();
var models = require('../models');
const jwt = require("jsonwebtoken");
const config = require("../config");

// io.set('origins','http://localhost:4200.*');

io.on("connection",socket=>{
    let token = socket.handshake.query.userToken;
    let game = socket.handshake.query.game;
    jwt.verify(token, config.salt, (err, decoded) => {
        if (err) {
        } else {
          socket._userId = decoded.id;
          socket._gameId = game;
          socket.join(game);
          socket.emit("auth", { userId: decoded.id });
          emitStatus(socket);
          emitLobby();
        }
    });

    socket.on('lobby:msg',data=>{
        models.Lobby.create({
            message:data,
            UserId:socket._userId
        }).then(lobby=>{
           emitChat(socket,lobby.id);
        });
    })

    socket.on('table:msg',data=>{
        models.Chat.create({
            message:data,
            GameUserId:socket._gameUserId
        }).then(lobby=>{
           emitChat(socket,lobby.id);
        });
    })
    
    socket.on('table:start',data=>{

    });



    socket.on('table:cancel',data=>{
        models.Game.findById(socket._gameId).then(game=>{
            game.update({
                status:0
            }).then(dat=>{
                io.to(socket._gameId).emit('closed','');
                emitLobby();
            })
        })
    });

    socket.on('table:remove',data=>{
        models.GameUser.destroy({
            where:{GameId:socket._gameId,UserId:data}
        }).then(dat=>{
            io.to(socket._gameId).emit('removeUser',{user:data});
            emitStatus(socket);
            emitLobby();
        })
    });

    socket.on('create',data=>{
        models.Game.find({
            where:{status:{$ne:0}},
            UserId:socket._userId
        }).then(games=>{
            if(games){
                socket.emit('create:response',{"Message":"Sorry you have already created a lobby"});
            }
            else{
                models.Game.create({
                    name:"Lobby",
                    status:1,
                    direction:true,
                    UserId:socket._userId
                }).then(game=>{
                    models.GameUser.create({
                        GameId:game.id,
                        UserId:socket._userId,
                        status:0
                    }).then(gameuser=>{
                        socket.emit('create:response',{"Message":"Your lobby is ready"});
                        emitStatus(socket);
                    });
                })
            }
        })
    })
});

function emitChat(socket, msgId) {
    if(socket._gameId=="lobby"){
        models.Lobby.find({
            where:{id:msgId},
            include:[{model: models.User}]
        }).then(lob=>{
            io.to(socket._gameId).emit("lobby:response",lob);
        });
    }
    else{
        models.Chat.find({
            where:{id:msgId},
            include:[{model: models.GameUser,include:[{model:models.User}]}]
        }).then(lob=>{
            io.to(socket._gameId).emit("table:response",lob);
        });
    }
}

function emitLobby(){
    models.Game.findAll({
        where: {status: 1},
        order: [["createdAt","DESC"]],
        include: [{ model: models.User},{model:models.GameUser}]
    }).then(result=>{
        io.to('lobby').emit("status",result);
    });
}

function emitStatus(socket){
    if(socket._gameId=="lobby"){
        models.Game.findAll({
            where: {status: 1},
            order: [["createdAt","DESC"]],
            include: [{ model: models.User},{model:models.GameUser}]
        }).then(result=>{
            io.to(socket._gameId).emit("status",result);
        });
    }
    else{
        models.GameUser.find({
            where:{
                UserId:socket._userId,
                GameId:socket._gameId
            }
        }).then(dat=>{
            socket._gameUserId=dat.id
        })
        models.Game.find({
            where:{id:socket._gameId},
            include: [{ model: models.User},{model:models.GameUser,include:[{model:models.User}]}]
        }).then(game=>{
            io.to(socket._gameId).emit("status",game);
        })
    }
}

module.exports = io;