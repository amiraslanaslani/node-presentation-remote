var http = require("http");
var url = require("url");

function start(route,robot,volume,mainFile,port,prlibjs){
  function onReq(request,response){
    var path = url.parse(request.url).pathname;
    var out = route(path,robot,volume,mainFile,prlibjs);
    response.writeHead(200, {"Content-Type": out[1]});
    response.write(out[0]);
    response.end();
  }

  var server = http.createServer(onReq);
  server.listen(port)
}

exports.start = start;
