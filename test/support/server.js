var cluster = require("cluster");
var http = require("http");
var util = require("util");

var port = process.env.PORT || 3000;

http
  .createServer(function(req, res) {
    console.log("Incoming...");

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("okay");
  })
  .listen(port, function() {
    console.log(util.format("[Worker #%d] Listening on %d...", cluster.worker.id, port));
  })
;
