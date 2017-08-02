var http = require("http");
var url = require("url");

function start(route,robot,mainFile){
  function onReq(request,response){
    var path = url.parse(request.url).pathname;
    var out = route(path,robot,mainFile);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(out);
    response.end();
  }

  var server = http.createServer(onReq);
  server.listen(8888)
}

exports.start = start;
