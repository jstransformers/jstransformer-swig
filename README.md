# jstransformer-swig

[Swig](https://paularmstrong.github.io/swig/) support for [JSTranformers](https://github.com/jstransformers/jstransformer).

<<<<<<< HEAD
[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-swig/master.svg)](https://travis-ci.org/jstransformers/jstransformer-swig)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-swig/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-swig?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-swig.svg)](https://david-dm.org/jstransformers/jstransformer-swig)
[![NPM version](https://img.shields.io/npm/v/jstransformer-swig.svg)](https://www.npmjs.org/package/jstransformer-swig)
=======
What you need to do:

1. Add your name to `LICENSE.md` and `package.json`
2. Activate Travis CI and Coveralls.
3. Update module name in `package.json` and `README.md`
4. Let the fun begin!

# jstransformer-foo

[Foo](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-foo/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-foo?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)
>>>>>>> dc238c8ad74b73868b2dcbe4b6aef4c02a09bc1e

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
