var ws = require("ws");
var sc = require('nodejs-screen-capture');

function sendScreen(connection) {
  var screenPic = sc.captureAndGetBase64(
    280,
    -1,
    sc.IMAGE_FORMAT_GIF,
    function (base64) {
      screenPic = base64
    }
  );
  connection.send(" " + screenPic);
}

function connection(port, picResolution) {
  var wss = new ws.Server({port: port});

  wss.on('connection', function connection(ws){ 
    var interval = setInterval(function(){
      if(ws.readyState != 1){
        clearInterval(interval);
      }
      else{
        sendScreen(ws);
      }
    }, 100);
  });

  wss.on('close', function close(ws){
    console.log(ws.readyState);
  });
}

exports.connection = connection;
