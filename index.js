'use strict';

var swig = require('swig');

exports.name = 'swig';
exports.outputFormat = 'xml';
exports.render = function (str, options) {
  var template = swig.compile(str);
  return template(options);
};
