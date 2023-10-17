"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var pingport = process.env.PING_LISTEN_PORT;
var app = express();
app.use(function (req, res, next) {
    if (req.originalUrl != "/ping") {
        res.send('ERROR 404');
    }
    else {
        var os = require('os');
        var hostname = os.hostname();
        console.log("Hostname is:- " + hostname);
        var headers = req.headers;
        res.json(headers);
    }
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
