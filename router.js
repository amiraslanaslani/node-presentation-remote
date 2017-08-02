function route(path,robot,mainFile){
  console.log("About to route a request for " + path);
  switch (path) {
    case '/right':
      robot.sendKey('right');
      break;
    case '/left':
      robot.sendKey('left');
      break;
    case '/up':
      robot.sendKey('up');
      break;
    case '/down':
      robot.sendKey('down');
      break;
    case '/':
    default:
      return mainFile;
  }
  return '';
}

exports.route = route;
