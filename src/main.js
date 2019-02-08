import Grid from './grid';
import Timer from './timer';
import Score from './score';


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;

  const ctx = canvas.getContext('2d');

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, 480, 640);
    let grid = new Grid();
    let timer = new Timer();
    let score = new Score();

    grid.draw();
    // if (counter <= 1) {
    //   counter++;
    //   requestAnimationFrame(draw);
    // }
  }
  
  // document.addEventListener("mousemove", mouseMoveHandler, false);
  // canvas.addEventListener('click', function () { }, false);

  requestAnimationFrame(draw);

})

console.log("hiya")

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