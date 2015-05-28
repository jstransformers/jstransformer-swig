# jstransformer-swig

[Swig](https://paularmstrong.github.io/swig/) support for [JSTranformers](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-swig/master.svg)](https://travis-ci.org/jstransformers/jstransformer-swig)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-swig/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-swig?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-swig.svg)](https://david-dm.org/jstransformers/jstransformer-swig)
[![NPM version](https://img.shields.io/npm/v/jstransformer-swig.svg)](https://www.npmjs.org/package/jstransformer-swig)

## Installation

    npm install jstransformer-swig

## API

```js
var foo = require('jstransformer')(require('jstransformer-foo'))

var locals = { title: "Hello World" };

foo.render('<h1>{{ title }}</h1>', {}, locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
