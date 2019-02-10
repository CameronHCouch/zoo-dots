
import Board from './game_board';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;

  const canvas2 = document.getElementById("zoo-canvas2");
  canvas2.width = 480;
  canvas2.height = 640;

  const ctx = canvas.getContext('2d');
  const ctx2 = canvas2.getContext('2d');
  let board = new Board(ctx, ctx2);

  function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    board.draw();

    // if (counter <= 1) {
    //   counter++;
      // requestAnimationFrame(draw);
    // }
  }
  canvas.addEventListener("mousedown", board.mouseDownHandler.bind(board), false);
  canvas.addEventListener("mouseup", board.mouseUpHandler.bind(board), false);
  canvas.addEventListener("mousemove", board.mouseMoveHandler.bind(board), false);

  draw(ctx);

})

// Workflow: define dimensions and properties of a thing
// Use canvas to draw the thing
// Add event listeners for user input
  // pressed buttons or clicked items can be initialized with booleans
// Write fn for how to handle user input
// 

// KeyUp and KeyDown are listening for key press and key release (not whether someone is pressing up and down)

// call draw() fn at bottom of class
// within draw() definition, call requestAnimationFrame(draw);

//TODO

// fix countdown timer