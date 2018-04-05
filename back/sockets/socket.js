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
        console.log(socket._gameId);
    }
}

module.exports = io;