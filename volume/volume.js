var os;
if( /^win/.test(process.platform) ){ // Windows
  os = require(__dirname + '/windows');
}
else if(process.platform == 'darwin'){ // Mac
  os = require(__dirname + '/mac');
}
else{ // Gnu/Linux
  os = require(__dirname + '/linux');
}

exports.mute = os.mute;
exports.unmute = os.unmute;
exports.incVol = os.incVol;
exports.decVol = os.decVol;
