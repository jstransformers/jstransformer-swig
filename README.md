# jstransformer-swig

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-swig.svg)](https://greenkeeper.io/)

[Swig](https://paularmstrong.github.io/swig/) support for [JSTranformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-swig/master.svg)](https://travis-ci.org/jstransformers/jstransformer-swig)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-swig/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-swig)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-swig/master.svg)](http://david-dm.org/jstransformers/jstransformer-swig)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-swig.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-swig.svg)](https://www.npmjs.org/package/jstransformer-swig)

## Installation

    npm install jstransformer-swig

## API

```js
var swig = require('jstransformer')(require('jstransformer-swig'))

var locals = { title: "Hello World" }
swig.render('<h1>{{ title }}</h1>', locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
