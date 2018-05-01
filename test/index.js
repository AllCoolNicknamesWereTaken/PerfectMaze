const assert = require('assert');
const perfectMaze = require('../index.js');

assert.ok(perfectMaze, 'method exists');
assert.equal(typeof perfectMaze, 'function', 'perfectMaze is a function');

var mazeSize = 5;
assert.equal(perfectMaze(mazeSize).length, mazeSize*mazeSize, 'perfectMaze returns array of size n*n');
