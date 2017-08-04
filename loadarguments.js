var args;
var port = 8888;

function load(arguments){
  args = arguments;
  for(var i = 0;i < args.length;i ++){
    switch (args[i]) {
      case '-p':
        port = args[i + 1]?args[i + 1]:port;
        break;
    }
  }
}

function getPort(){
  return port;
}

exports.load = load;
exports.getPort = getPort;
