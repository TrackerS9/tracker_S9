var client = require('../app/redis');
var config = require('../config');
var express = require('express');
var socket = require('../app/data/signalingController');
var io = require('socket.io-client');


var tracker = express();
tracker.set('port', config.PORT_TRACKER);

/* Setting the tracker server */

console.log(tracker.get('port'));


var trackServer = tracker.listen(tracker.get('port'), function(){
    console.log('The Express tracker server is currently listening on port :' + trackServer.address().port

    );
});


socket(trackServer, client);

/*
var yolo = io('http://127.0.0.1:6378/peers');
yolo.emit('signalingHandshakeAnswer', 'v1.0');
yolo.emit('signalingRequestFile', 'iuM7Jp24Jtw');
yolo.emit('requestId', '/peers#lb5l1J4-TNnpuVtKAAAA');
yolo.emit('disconnect');
*/


