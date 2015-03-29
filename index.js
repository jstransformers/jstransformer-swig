'use strict';

var swig = require('swig');

exports.name = 'swig';
exports.outputFormat = 'html';
exports.render = function (str, options) {
  var template = swig.compile(str);
  return template(options);
};
