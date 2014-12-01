/* global midi, R*/

'use strict';

var WIDTH = 8;

function getLaunchpad(midiIO) {
  // TODO find it for real
  // this assumes only device is a launchpad
  // inputs & outputs will contain more devices
  return {
    input: midiIO.inputs.values().next().value,
    output: midiIO.outputs.values().next().value
  };
}


function getClearBoard() {
  var b = [];
  
  for(var y = 0; y < WIDTH; y++) {
    b[y] = [];
    for(var x = 0; x < WIDTH; x++) {
      b[y][x] = false;
    }
  }

  return b;
}

function countNeighbours(x, y, board) {
  var count = 0;

  // count above
  if(y > 0) {
    var aboveRow = board[y - 1];

    if(x > 0) {
      count += R.filter(R.identity, R.slice(x - 1, x + 2)(aboveRow)).length;
    } else {
      count += R.filter(R.identity, R.slice(x, x + 2)(aboveRow)).length;
    }
  }

  // count current row
  var currentRow = board[y];
  if(x > 0) {
    if(currentRow[x - 1]) { count++; }
    if(currentRow[x + 1]) { count++; }
  } else {
    if(currentRow[x + 1]) { count++; }
  }

  // count below
  if(y < WIDTH - 1) {
    var bottomRow = board[y + 1];
    
    if(x > 0) {
      count += R.filter(R.identity, R.slice(x - 1, x + 2)(bottomRow)).length;
    } else {
      count += R.filter(R.identity, R.slice(x, x + 2)(bottomRow)).length;
    }
  }
  
  return count;
}

function tick(past) {
  var next = getClearBoard();
  
  for(var y = 0; y < WIDTH; y++) {
    for(var x = 0; x < WIDTH; x++) {
      var count = countNeighbours(x, y, past);

      if(past[y][x]) {
        if(count < 2) {
          next[y][x] = false;
        } else if(count === 2 || count === 3) {
          next[y][x] = true;
        } else {
          next[y][x] = false;
        }
      } else {
        // DEAD cell
        if(count === 3) {
          next[y][x] = true;
        }
      }

    }
  }

  return next;
}

function drawBoard(board, draw) {
  for(var y = 0; y < WIDTH; y++) {
    for(var x = 0; x < WIDTH; x++) {
      draw(x, y, board[y][x]);
    }
  }
}

window.onload = function() {

  midi.getDevices().then(function(midiIO) {
    var lp = getLaunchpad(midiIO);

    console.log('Using IO devices:', lp);

    function pad(x, y, on) {
      var state = on ? 11 : 12;
      var btn = (16 * y) + x;
      lp.output.send([144, btn, state]);
    }

    var board = getClearBoard();

    setInterval(function() {
      
    }, 400);

  });
  
};
