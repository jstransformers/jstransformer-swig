'use strict'

const swig = require('swig-templates')

exports.name = 'swig'
exports.outputFormat = 'html'

function getSwig(options) {
  const opts = options || {}
  const engine = new swig.Swig(opts)
  for (const name in opts.filters || {}) {
    if ({}.hasOwnProperty.call(opts.filters, name)) {
      let filter
      switch (typeof opts.filters[name]) {
        case 'string':
          // eslint-disable-next-line import/no-dynamic-require
          filter = require(opts.filters[name])
          break
        case 'function':
        default:
          filter = opts.filters[name]
          break
      }
      engine.setFilter(name, filter)
    }
  }

  return engine
}

exports.compile = function (str, options) {
  return getSwig(options).compile(str)
}

exports.compileFile = function (file, options) {
  return getSwig(options).compileFile(file)
}

exports.compileFileAsync = function (file, options) {
  return new Promise((resolve, reject) => {
    getSwig(options).compileFile(file, {}, (err, template) => {
      if (err) {
        return reject(err)
      }
      return resolve(template)
    })
  })
}
