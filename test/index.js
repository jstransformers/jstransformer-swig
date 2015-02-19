'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:  ', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

var input = fs.readFileSync(__dirname + '/input.html.swig', 'utf8');
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8');

var locals = {
  title: 'Basic Example',
  people: [
    {
      name: 'Paul',
      age: 28
    },
    {
      name: 'Jane',
      age: 26
    },
    {
      name: 'Jimmy',
      age: 45
    }
  ]
};
var output = transform.compile(input)(locals);
fs.writeFileSync(__dirname + '/output.html', output);
assertEqual(output, expected);

if (failed) {
  console.log('tests FAILED');
  process.exit(1);
} else {
  console.log('tests PASSED');
}
