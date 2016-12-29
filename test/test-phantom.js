'use strict';

/* global phantom */

var page = require('webpage').create();
var system = require('system');
var url = system.env.url;

page.onConsoleMessage = function(msg) {
  system.stdout.writeLine(msg);
  if (msg.indexOf('# ok') === 0) {
    phantom.exit(0);
  } else if (msg.indexOf('# fail') === 0) {
    phantom.exit(1);
  }
};
page.onError = function(msg) {
  system.stderr.writeLine(msg);
  phantom.exit(1);
};
page.open(url, function(status) {
  if (status !== 'success') {
    system.stderr.writeLine('failed to open ' + url);
    phantom.exit(1);
  }
});

setTimeout(function() {
  phantom.exit(1);
}, 60000);
