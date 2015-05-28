'use strict';

var swig = require('swig');
var Promise = require('promise');

exports.name = 'swig';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  return swig.compile(str, options || {});
};

exports.compileFile = function (file, options) {
  return swig.compileFile(file, options || {});
};

exports.compileFileAsync = function (file, options) {
  return new Promise(function (fulfill, reject) {
    swig.compileFile(file, options || {}, function (err, template) {
      if (err) {
        return reject(err);
      }
      return fulfill(template);
    });
  });
};
