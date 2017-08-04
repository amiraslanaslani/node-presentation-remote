var exec = require('child_process').exec;

function mute(){
  exec(__dirname + "\\nircmdc.exe mutesysvolume 1");
}

function unmute(){
  exec(__dirname + "\\nircmdc.exe mutesysvolume 0");
}

function incVol(){
  exec(__dirname + "\\nircmdc.exe changesysvolume 6553");
}

function decVol(){
  exec(__dirname + "\\nircmdc.exe changesysvolume -6553");
}

exports.mute   = mute;
exports.unmute = unmute;
exports.incVol = incVol;
exports.decVol = decVol;
