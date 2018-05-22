var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');
var router = express.Router();

var models = require('../models');


router.get('/details',function(req,res,next){
    user=req.authdata;
	models.User.findById(user.id,{attributes:['username','name']}).then(function(data){
		return res.json(data);
	})
})

module.exports = router;