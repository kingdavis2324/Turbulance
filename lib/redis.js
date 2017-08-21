/**
 * Created by macbook on 8/20/17.
 */
'use strict';

var redis = require("redis");
var client = redis.createClient();

client.on('error', function(err){
    throw err;
});

module.exports = client;