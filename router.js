function route(path,robot,mainFile){
  //console.log("About to route a request for " + path);
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
    case '/pu':
      robot.sendKey('page_up');
      break;
    case '/pd':
      robot.sendKey('page_down');
      break;
    case '/enter':
      robot.sendKey('enter');
      break;
    case '/home':
      robot.sendKey('home');
      break;
    case '/end':
      robot.sendKey('end');
      break;
    case '/':
    default:
      return mainFile;
  }
  return '';
}

exports.route = route;
