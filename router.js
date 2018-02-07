var screenCapture = require('nodejs-screen-capture');
var lastScreenshot = '';

function route(path,robot,volume,mainFile){
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
    case '/vu':
      volume.incVol();
      break;
    case '/vd':
      volume.decVol();
      break;
    case '/vmu':
      volume.mute();
      break;
    case '/vum':
      volume.unmute();
      break;
    case '/screen':
      screenCapture.captureAndGetBase64(
          400,
          -1,
          screenCapture.IMAGE_FORMAT_GIF,
          function (base64) {
              lastScreenshot = base64
          }
      );
      return lastScreenshot;
      break;
    case '/':
    default:
      return mainFile;
  }
  return '';
}

exports.route = route;
