'use strict';

var swig = require('swig');
var Promise = require('promise');

exports.name = 'swig';
exports.outputFormat = 'html';

function getSwig(options) {
  var opts = options || {};
  var engine = new swig.Swig(opts);
  for (var name in opts.filters || {}) {
    var filter = null;
    switch (typeof opts.filters[name]) {
      case "string":
        filter = require(opts.filters[name]);
        break;
      case "function":
      default:
        filter = opts.filters[name];
        break;
    }
    engine.setFilter(name, filter);
  }

  return engine;
}

exports.compile = function (str, options) {
  return getSwig(options).compile(str);
};

exports.compileFile = function (file, options) {
  return getSwig(options).compileFile(file);
};

exports.compileFileAsync = function (file, options) {
  return new Promise(function (fulfill, reject) {
    getSwig(options).compileFile(file, {}, function (err, template) {
      if (err) {
        return reject(err);
      }
      return fulfill(template);
    });
  });
};
