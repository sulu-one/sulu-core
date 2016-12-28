#!/usr/bin/env node

"use strict";

var shelljs = require("shelljs");

var Config = require("user-appdata");
var config = new Config({appname : "sulu", defaultSettings : {
}}); 

console.log(config);


if (config.settings.home){

    if (shelljs.exec('npm --prefix ' + config.settings.home + ' ' + process.argv.slice(2)).code != 0){
        console.log("error");
    }
}
   