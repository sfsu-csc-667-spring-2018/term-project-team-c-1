var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');
var router = express.Router();

var models = require('../models');

router.get('/addcards',function(req,res,next){
	a= [
		{"name":"R9","xCoord":"117","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R8","xCoord":"176","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R7","xCoord":"235","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R6","xCoord":"294","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R5","xCoord":"353","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R4","xCoord":"411","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R3","xCoord":"470","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R2","xCoord":"529","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R1","xCoord":"588","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"R0","xCoord":"58","yCoord":"0","type":"1","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B9","xCoord":"117","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B8","xCoord":"176","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B7","xCoord":"235","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B6","xCoord":"294","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B5","xCoord":"353","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B4","xCoord":"411","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B3","xCoord":"470","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B2","xCoord":"529","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B1","xCoord":"588","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"B0","xCoord":"58","yCoord":"367","type":"1","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G9","xCoord":"117","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G8","xCoord":"176","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G7","xCoord":"235","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G6","xCoord":"294","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G5","xCoord":"353","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G4","xCoord":"411","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G3","xCoord":"470","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G2","xCoord":"529","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G1","xCoord":"588","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"G0","xCoord":"58","yCoord":"458","type":"1","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y9","xCoord":"117","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y8","xCoord":"176","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y7","xCoord":"235","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y6","xCoord":"294","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y5","xCoord":"353","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y4","xCoord":"411","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y3","xCoord":"470","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y2","xCoord":"529","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y1","xCoord":"588","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"Y0","xCoord":"58","yCoord":"550","type":"1","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"RS","xCoord":"588","yCoord":"274","type":"2","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"RR","xCoord":"529","yCoord":"274","type":"3","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"RT","xCoord":"470","yCoord":"274","type":"4","color":"1","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"YS","xCoord":"411","yCoord":"274","type":"2","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"YR","xCoord":"353","yCoord":"274","type":"3","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"YT","xCoord":"294","yCoord":"274","type":"4","color":"4","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"GS","xCoord":"340","yCoord":"274","type":"2","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"GR","xCoord":"176","yCoord":"274","type":"3","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"GT","xCoord":"117","yCoord":"274","type":"4","color":"3","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"BS","xCoord":"58","yCoord":"274","type":"2","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"BR","xCoord":"588","yCoord":"182","type":"3","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"BT","xCoord":"529","yCoord":"182","type":"4","color":"2","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"WC","xCoord":"470","yCoord":"182","type":"5","color":"0","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"WC","xCoord":"411","yCoord":"182","type":"5","color":"0","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"WF","xCoord":"353","yCoord":"182","type":"6","color":"0","createdAt":new Date(),"updatedAt":new Date()},
		{"name":"WF","xCoord":"294","yCoord":"182","type":"6","color":"0","createdAt":new Date(),"updatedAt":new Date()}
		]
	// models.Card.create({
	// 	name:'WC',
	// 	xCoord:480,
	// 	yCoord:160,
	// 	type:5,
	// 	color:0
	// });
	// models.Card.create({
	// 	name:'WC',
	// 	xCoord:420,
	// 	yCoord:160,
	// 	type:5,
	// 	color:0
	// });
	// models.Card.create({
	// 	name:'WF',
	// 	xCoord:360,
	// 	yCoord:160,
	// 	type:6,
	// 	color:0
	// });
	// models.Card.create({
	// 	name:'WF',
	// 	xCoord:300,
	// 	yCoord:160,
	// 	type:6,
	// 	color:0
	// });
	plist=[]
	for (var i = 0;i<a.length;i++){
		p=models.Card.create({
			name:a[i]['name'],
			xCoord:a[i]['xCoord'],
			yCoord:a[i]['yCoord'],
			type:a[i]['type'],
			color:a[i]['color']		});
			plist.push(p);
	}
	Promise.all(plist).then(dat=>{
		res.json(['Hello']);
	})
	// res.json(['Hello']);
});



router.post('/login',function(req,res,next){
	var user=req.body;
	user.password=crypto.createHash('sha256').update(req.body.password).digest('hex');
	models.User.findOne({
		where:{
			username:req.body.username,
			password:req.body.password
		}
	}).then(function(user){
		if(user){
			var token=jwt.sign({id:user.id,username:user.username,active:user.active},config.salt,{
				expiresIn: '24h'
			});
			if(user.isVerified){
				res.json(["Success",token]);
			}
			else{
				res.json(["Verify",token]);
			}
		}
		else{
			res.json(["Error","Invalid username or password"]);
		}
	});
});


router.put('/register',function(req,res,next){
	var user=req.body;
	models.User.findAll({
		where:{$or:[{username:req.body.username},{email:req.body.email}]}
	}).then(function(users){
		if(users.length==0){
			models.User.create({
				username:req.body.username,
				name:req.body.name,
				email:req.body.email,
				password:crypto.createHash('sha256').update(req.body.password).digest('hex'),
				verificationCode:Math.floor((Math.random()*899999) + 100001),
				isVerified:true
			}).then(function(user){
                var token=jwt.sign({id:user.id,username:user.username,active:user.active},config.salt,{
                    expiresIn: '24h'
                });
                return res.json(["Success",token]);
			});
		}
		else{
			return res.json(["Error","Username or Email already in use."]);
		}
	})
})

module.exports = router;