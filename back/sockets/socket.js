var io = require('socket.io')();
var models = require('../models');
const jwt = require("jsonwebtoken");
const config = require("../config");

// io.set('origins','http://localhost:4200.*');

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;    
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

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

    socket.on('table:play',data=>{
        models.Card.findById(data.CardId).then(card=>{
            models.GameCard.create({
                status:0,
                CardId:data.CardId,
                GameId:socket._gameId
            }).then(gamecard=>{
                models.GameUser.findOne({
                    where:{GameId:socket._gameId,isCurrent:true}
                }).then(gameuser=>{
                    models.UserCard.update({status:1},{where:{id:data.id}}).then(usercard=>{
                        if(card.type>=5){
                            models.UserPlay.create({
                                color:data.color,
                                GameId:socket._gameId,
                                CardId:card.id,
                                GameUserId:gameuser.id
                            }).then(play=>{
                                models.UserCard.findAll({where:{GameUserId:gameuser.id}}).then(usercards=>{
                                    if(usercards.length>0){
                                        if(card.type==2){
                                            nextplay(socket,'skip');
                                        }
                                        else if(card.type==3){
                                            nextplay(socket,'reverse');
                                        }
                                        else{
                                            nextplay(socket,'normal');
                                        }
                                    }
                                    else{
                                        models.Game.update({status:10},{where:{id:socket._gameId}}).then(g=>{
                                            emitstate(socket._gameId);
                                        })
                                    }
                                })
                            })
                        }
                        else{
                            models.UserPlay.create({
                                color:card.color,
                                GameId:socket._gameId,
                                CardId:card.id,
                                GameUserId:gameuser.id
                            }).then(play=>{
                                models.UserCard.findAll({where:{GameUserId:gameuser.id}}).then(usercards=>{
                                    if(usercards.length>0){
                                        if(card.type==2){
                                            nextplay(socket,'skip');
                                        }
                                        else if(card.type==3){
                                            nextplay(socket,'reverse');
                                        }
                                        else{
                                            nextplay(socket,'normal');
                                        }
                                    }
                                    else{
                                        models.Game.update({status:10},{where:{id:socket._gameId}}).then(g=>{
                                            emitstate(socket._gameId);
                                        })
                                    }
                                })
                            })
                        }
                    });
                })
            });
        })
    });

    socket.on('table:draw',data=>{
        models.GameUser.findOne({
            where:{GameId:socket._gameId,isCurrent:true}
        }).then(gameuser=>{
            models.GameDeck.findAll({
                where:{GameId:socket._gameId,status:0},
                order:[['id']],
                limit:data['num']
            }).then(gamedeck=>{
                plist=[];
                for(var i=0;i<gamedeck.length;i++){
                    p1=models.UserCard.create({
                        status:0,
                        CardId:gamedeck[i].CardId,
                        GameUserId:gameuser.id
                    });
                    plist.push(p1);
                    gamedeck[i].update({status:1});
                }
                Promise.all(plist).then(dat=>{
                    nextplay(socket,'normal');
                })
            })
        })
    //    models.GameCard.find({
    //        where:{GameId:socket._gameId,status:0},
    //        order:[['id','DESC']],
    //        limit:1
    //    }).then(gamecards=>{
    //        console.log(gamecards);
    //    })
    });
    
    socket.on('table:start',data=>{
        models.GameUser.findAll({
            where:{GameId:socket._gameId}
        }).then(gameusers=>{
            arr=shuffle(gameusers);
            models.Card.findAll({}).then(cards=>{
                var i=1;
                promiselist=[];
                arr.forEach(element => {
                    if(i==1){
                        p=element.update({
                            position:i,
                            isCurrent:true
                        });
                    }
                    else{
                        p=element.update({
                            position:i
                        });
                    }
                    promiselist.push(p);
                    i++;
                });

                cardlist=shuffle(cards.concat(cards));
                cardlist.forEach(element => {
                    p=models.GameDeck.create({
                        status:0,
                        CardId:element.id,
                        GameId:socket._gameId
                    })
                    promiselist.push(p);
                });
                Promise.all(promiselist).then(data=>{
                   plist=[];
                   counter=0;
                   for(var i=0;i<arr.length;i++){
                       for(var j=0;j<7;j++){
                           p1=models.UserCard.create({
                               status:0,
                               CardId:cardlist[counter].id,
                               GameUserId:arr[i].id
                           })
                           plist.push(p1);
                           models.GameDeck.findOne({where:{CardId:cardlist[counter].id,GameId:socket._gameId,status:0},order:['id']}).then(gamedeck=>{
                               gamedeck.update({status:1});
                           })
                           counter++;
                       }
                   }
                   Promise.all(plist).then(dat=>{
                        models.GameCard.create({
                            status:0,
                            CardId:cardlist[counter].id,
                            GameId:socket._gameId
                        }).then(gamecard=>{
                            models.GameDeck.update({status:1},{where:{CardId:cardlist[counter].id,GameId:socket._gameId,status:0}}).then(d=>{
                                models.Game.update({status:2},{where:{id:socket._gameId}}).then(game=>{
                                    emitStatus(socket);
                                    emitstate(socket._gameId);
                                });
                            });
                        });
                   });
                });
            });
        });
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
            where:{$or:[{status:{$ne:0}},{status:{$ne:10}}],
            UserId:socket._userId}
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

function nextplay(socket,play){
    models.GameUser.findAll({
        where:{GameId:socket._gameId}
    }).then(gameusers=>{
        currentPos=0
        for(var i=0;i<gameusers.length;i++){
            if(gameusers[i].isCurrent){
                currentPos=gameusers[i].position;
            }
        }
        models.Game.findById(socket._gameId).then(game=>{
            if(game.direction){
                if(play=='normal'){
                    newPos=currentPos+1;
                }
                else if(play=='skip'){
                    newPos=currentPos+2;
                }
                else if(play=='reverse'){
                    newPos=currentPos-1;
                }
            }
            else{
                if(play=='normal'){
                    newPos=currentPos-1;
                }
                else if(play=='skip'){
                    newPos=currentPos-2;
                }
                else if(play=='reverse'){
                    newPos=currentPos+1;
                }
            }
            if(newPos>gameusers.length){
                newPos=newPos-gameusers.length;
            }
            else if(newPos<1){
                newPos=newPos+gameusers.length;
            }
            models.GameUser.update({isCurrent:false},{where:{GameId:socket._gameId,position:currentPos}}).then(ogameuser=>{
                models.GameUser.update({isCurrent:true},{where:{GameId:socket._gameId,position:newPos}}).then(ngameuser=>{
                    if(play=='reverse'){
                        if(game.direction){
                            game.update({direction:false}).then(ngame=>{
                                emitstate(socket._gameId);
                            })
                        }
                        else{
                            game.update({direction:true}).then(ngame=>{
                                emitstate(socket._gameId);
                            })
                        }
                    }
                    else{
                        emitstate(socket._gameId);
                    }
                })
            })
        });
    })
}

function emitstate(gameId) {
    models.Game.findOne({
        where:{id:gameId},
        include:[{model:models.UserPlay,order:[['id','DESC']],limit:1,include:[{model:models.GameUser}]},{model:models.GameUser,order:[['position']],include:[{model:models.User},{model:models.UserCard,where:{status:0},include:[{model:models.Card}]}]},{model:models.GameCard,include:[{model:models.Card}],limit:1,order: [["id","DESC"]]}]
    }).then(game=>{
        io.to(gameId).emit("table:status",game);
    });
}

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
            if(game.status!=1){
                emitstate(game.id);
            }
        });
    }
}

module.exports = io;