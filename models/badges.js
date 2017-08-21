/**
 * Created by macbook on 8/20/17.
 */
'use strict';

var redis = require('..lib/redis')


/*
Save badges to database
@param {Array} badges
@param {function} callback
 */



exports.save = function(badges, callback){
    var badge = badges.pop();
    redis.lpush('badges', JSON.stringify(badge), function(err){
        if (err) return callback(err, null);

    })
};