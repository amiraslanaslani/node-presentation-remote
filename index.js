var fs = require("fs");
var robot = require("node-key-sender");
var volume = require("os-volume-controll");

var server = require(__dirname + "/server");
var route = require(__dirname + "/router");
var localIPs = require(__dirname + "/localip");
var LoadArguments = require(__dirname + "/loadarguments");
var ScreenWebSocket = require(__dirname + "/websocket");

LoadArguments.load(process.argv);
var port = LoadArguments.getPort();
var screenSocketPort = LoadArguments.getScreenPort();
var ips = localIPs.get();

console.log("Open below address(es) in browser:");
for (var i = 0, len = ips.length; i < len; i++) {
  console.log('http://' + ips[i] + ':' + port);
  route.setScreenSocketPortIP(ips[i] + ":" + screenSocketPort);
}

console.log("");

fs.readFile(__dirname + '/View/pr-lib.js',function (err, prlibjs){
    fs.readFile(__dirname + '/View/UI.html',function (err, mainFile){
    	ScreenWebSocket.connection(screenSocketPort);
      	server.start(route.route,robot,volume,mainFile,port,prlibjs);
    });
});
