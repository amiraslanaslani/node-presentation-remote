var args;
var port = 8888;
var screenPort = 8787;

function load(arguments){
  args = arguments;
  for(var i = 0;i < args.length;i ++){
    switch (args[i]) {
      case '-p':
        port = args[i + 1]?args[i + 1]:port;
        break;
      case '-s':
        screenPort = args[i + 1]?args[i + 1]:screenPort;
        break;
    }
  }
}

exports.getPort = function(){
  return port;
}

exports.getScreenPort = function(){
  return screenPort;
}

exports.load = load;
