var fs = require("fs");

var robot = require(__dirname + "/node_modules/node-key-sender");
var volume = require(__dirname + "/volume");
var server = require(__dirname + "/server");
var route = require(__dirname + "/router");
var localIPs = require(__dirname + "/localip");
var LoadArguments = require(__dirname + "/loadarguments");

LoadArguments.load(process.argv);

var port = LoadArguments.getPort();

var ips = localIPs.get();
console.log("Open below address(es) in browser:");
for (var i = 0, len = ips.length; i < len; i++) {
  console.log('http://' + ips[i] + ':' + port);
}

console.log("");

fs.readFile(__dirname + '/View/UI.html',function (err, mainFile){
  server.start(route.route,robot,volume,mainFile,port);
});
