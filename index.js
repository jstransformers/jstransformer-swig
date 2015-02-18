'use strict';

var swig = require('swig');

exports.name = 'swig';
exports.outputFormat = 'xml';
exports.compile = swig.compile;
