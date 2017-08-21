/**
 * Created by macbook on 8/20/17.
 */
'use strict';

var _ = require('underscore');
var model = require('../models/badges')
/*
Send badges to model
 */


exports.save = function(req, res, next) {
    var badges = _.clone(req.body);
    model.save(badges, function(err){
        if (err)
            return res.json(503, {
            error: true
        });
        next();
    });
};

exports.send = function() {};


/*
 Send badges to pub/sub socket in model
 */