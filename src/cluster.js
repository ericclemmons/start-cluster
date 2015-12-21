var cluster = require("cluster");
var path = require("path");
var os = require("os");
var util = require("util");

module.exports.disconnect = function(callback) {
  if (cluster.isMaster) {
    return cluster.disconnect(callback);
  }

  callback();
}

module.exports.start = function start(script, callback) {
  script = path.resolve(process.cwd(), script || "server.js");
  callback = callback || function() {};

  // Test access to script
  require.resolve(script);

  if (!cluster.isMaster) {
    return require(script);
  }

  // Count the machine's CPUs
  var totalCPUs = os.cpus().length;

  // Create & start a worker for each CPU
  var workers = Array.apply(null, new Array(totalCPUs)).map(function() {
    return cluster.fork();
  });

  // Listen for workers coming online & fire callback
  cluster.on("online", function(worker) {
    if (worker.id === workers.length) {
      callback(null, workers);
    }
  });

  // Listen for dying workers & restart them
  cluster.on("exit", cluster.fork);

  return workers;
};
