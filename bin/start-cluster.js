#!/usr/bin/env node

var cluster = require("../src/cluster");

cluster.start(process.argv[2]);
