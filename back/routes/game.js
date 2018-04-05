var express = require('express');
var config = require('../config');
var router = express.Router();

var models = require('../models');

router.get('/go',function(req,res,next){
    models.Game.find(
        {where:{id : req.query.game},include: [{model:models.GameUser}]}).then(game=>{
        if(game.status==1){
            for(var i=0;i<game.GameUsers.length;i++){
                if(game.GameUsers[i].UserId==req.authdata.id){
                    return res.json(['Success']);
                }
            }
            if(game.GameUsers.length<4){
                models.GameUser.create({
                    GameId:game.id,
                    UserId:req.authdata.id,
                    status:0
                }).then(gameuser=>{
                    return res.json(['Success']);
                });
            }
            else{
                return res.json(['Error']);    
            }
        }
        else{
            return res.json(['Error']);
        }
    })
});

router.get('/join',function(req,res,next){
    models.Game.findById(req.query.game).then(game=>{
        if(game.UserId==req.authdata.id && game.status==1){
            return res.json(['Success']);
        }
        else{
            return res.json(['Error']);
        }
    })
});

module.exports = router;