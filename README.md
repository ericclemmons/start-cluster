# start-cluster

> Start a Node cluster by simply running  `start-cluster`.

[![travis build](https://img.shields.io/travis/ericclemmons/start-cluster.svg?style=flat-square)](https://travis-ci.org/ericclemmons/start-cluster)
[![codecov coverage](https://img.shields.io/codecov/c/github/ericclemmons/start-cluster.svg?style=flat-square)](https://codecov.io/github/ericclemmons/start-cluster)
[![version](https://img.shields.io/npm/v/start-cluster.svg?style=flat-square)](http://npm.im/start-cluster)
[![downloads](https://img.shields.io/npm/dm/start-cluster.svg?style=flat-square)](http://npm-stat.com/charts.html?package=start-cluster)
[![MIT License](https://img.shields.io/npm/l/start-cluster.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

- - -

By default, `npm start` runs your application as a single instance via `node server.js`.

On production, **it's best to run multiple instances** (i.e. an instance per CPU core) so that, when the application crashes or throws exceptions, other instances can field subsequent requests while the erroneous one restarts.

Otherwise, **requests will fail until `server.listen()` is executed**. For sufficiently large applications with several dependencies, **this can potentially be seconds**.

### Usage

#### 1. Install

```shell
$ npm install start-cluster --save
```

#### 2. Add to `package.json`

```json
{
  "scripts": {
    "start": "start-cluster"
  }
}
```

#### 3. Customize

If your server script is located elsewhere:

```json
{
  "scripts": {
    "start": "start-cluster src/server.min.js"
  }
}
```

### License

> MIT License 2015 © Eric Clemmons
