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
                    socket.emit('create:response',{"Message":"Your lobby is ready"});
                    emitStatus(socket);
                })
            }
        })
    })
});

function emitStatus(socket){
    if(socket._gameId=="lobby"){
        models.Game.findAll({
            where: {status: { $ne: 0 }},
            order: [["createdAt","DESC"]],
            include: [{ model: models.User}]
        }).then(result=>{
            io.to(socket._gameId).emit("status",result);
        });
    }
}

module.exports = io;