var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');
var router = express.Router();

var models = require('../models');


router.get('/details',function(req,res,next){
    res.json(['Hello']);
})

module.exports = router;