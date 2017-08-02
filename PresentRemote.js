var robot = require(__dirname + "/node-key-sender");
var server = require(__dirname + "/server");
var route = require(__dirname + "/router")
var fs = require("fs");

fs.readFile(__dirname + '/View/test.html',function (err, mainFile){
  server.start(route.route,robot,mainFile);
});
