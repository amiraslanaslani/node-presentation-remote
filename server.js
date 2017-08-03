var http = require("http");
var url = require("url");

function start(route,robot,volume,mainFile,port){
  function onReq(request,response){
    var path = url.parse(request.url).pathname;
    var out = route(path,robot,volume,mainFile);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(out);
    response.end();
  }

  var server = http.createServer(onReq);
  server.listen(port)
}

exports.start = start;
