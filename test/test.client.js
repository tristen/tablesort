#!/usr/bin/env node

'use strict';

var path = require('path');
var url = require('url');
var execFile = require('child_process').execFile;
var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var phantombin = require('phantomjs-prebuilt').path;

var staticHandler = serveStatic(path.join(__dirname, '/../'), {
  'index': ['index.html']
});
var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  staticHandler(req, res, done);
});
server.listen(0, function() {
  var port = server.address().port;
  var uri = url.format({
    protocol: 'http',
    hostname: 'localhost',
    port: port,
    pathname: '/test/'
  });

  var opts = { env: { url: uri } };
  var script = path.join(__dirname, 'test-phantom.js');
  var exit = 0;
  execFile(phantombin, [script], opts, function(err, stdout, stderr) {
    if (err && err.code) {
      exit = err.code;
      console.error(err);
      console.error(err.stack);
    }
    console.log(stdout);
    console.warn(stderr);
    server.close();
    process.exit(exit);
  });
});
