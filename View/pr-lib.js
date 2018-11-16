/**
 * Presentation Remote UI Library
 * https://github.com/amiraslanaslani/presentation-remote
 * @author Amir Aslan Aslani
 */

var screenImage = false;
var ws = new WebSocket("ws://" + serverSocketIPPort);
var uriPrefix = "data:image/gif;base64, ";
var reader = new FileReader();

function setImageAsScreen(id){
    screenImage = document.getElementById(id);
}

ws.onmessage = function(data) {
    
  if(screenImage != false){
  	screenImage.src = uriPrefix + data.data;
  }
}


function sendKey(keyCode)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", keyCode, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function setImageAsScreen(id){
//     var screenImage = document.getElementById(id);
//     setInterval(function () {
//         screenImage.src = uriPrefix + sendKey("/screen");
//     }, 100);
// }
