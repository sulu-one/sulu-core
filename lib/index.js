#!/usr/bin/env node

"use strict";

var fs = require("fs");
var path = require("path");
var shelljs = require("shelljs");

var argv = process.argv.slice(2);

var Config = require("user-appdata");
var config = new Config({appname : "sulu", defaultSettings : {
}}); 


 
var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true
});

var folder = config.settings.home;
var environment = "production";
if (fs.existsSync(folder)){
	environment = "development";
} else {
	folder = path.join(folder, "../../app.asar.unpacked/packages/");
}

console.log("sulu core \"" + environment + "\" plugin folder", folder);
if (argv.length > 0){
	if (config.settings.home){
	    if (shelljs.exec('npm --prefix ' + folder + ' ' + argv.join(" ")).code != 0){
	        console.log("error");
	    }
	}
} else {
	cli.log(config);
};
 
