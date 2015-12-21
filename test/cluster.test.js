var cluster = require("..");
var expect = require("expect");
var os = require("os");
var path = require("path");
var util = require("util");

describe("cluster", function() {
  describe(".start", function() {
    it("should default to server.js", function() {
      var error = util.format("Cannot find module '%s/server.js'", process.cwd());

      expect(cluster.start).toThrow(error);
    });

    it("should accept a relative path", function() {
      expect(function() {
        var error = util.format("Cannot find module '%s/foo.js'", process.cwd());

        expect(function() {
          return cluster.start("foo.js");
        }).toThrow(error);
      })
    });

    it("should accept an absolute path", function() {
      expect(function() {
        var error = util.format("Cannot find module 'path/to/foo.js'", process.cwd());

        expect(function() {
          return cluster.start("/path/to/foo.js");
        }).toThrow(error);
      })
    });
  });
});
