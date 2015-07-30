#!/usr/bin/env node

'use strict';

var exec = require('child_process').exec;

exec("git clone https://github.com/meanjs/mean.git test1", function(err, stdout, stderr){
  if(err) { throw err; }
  console.log('That was easy! Let me do one more thing for you:');
  exec("cd test1 && npm install", function(err, stdout, stderr){
    console.log(stdout);
    console.log("Run: `cd test1 && grunt` and you'll be live!");
  });
});