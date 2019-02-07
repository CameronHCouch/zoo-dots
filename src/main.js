// const GameBoard = require('./game_board');
// const Game = require('./game.js');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;

  const ctx = canvas.getContext('2d');

  function randomImage(){
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }

  // dots

  const rows = 6;
  const cols = 6;
  const dotWidth = 25;
  const dotHeight = 25;
  const margin = 50;
  const yStart = 150;
  const xStart = 80;
  let time = 60;
  let score = 0;


  function drawDots(){
    for (var x = 0; x < cols; x++) {
      for (var y = 0; y < rows; y++) {
        let image = new Image(25, 25);
        image.src = `./assets/${randomImage()}.png`;
        ctx.beginPath();
        ctx.drawImage(
          image,
          dotWidth + (50 * x) + xStart,
          dotWidth + margin * y + yStart,
          dotWidth,
          dotHeight
          );
        ctx.closePath();
        ctx.fill();
      }
    }
  }
  let counter = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, 480, 640);
    drawDots();
    drawTimer();
    drawScore();
    if (counter <= 1) {
      counter++;
      requestAnimationFrame(draw);
    }
  }

  // document.addEventListener("mousemove", mouseMoveHandler, false);

  function drawTimer() {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Time " + time, 75, 50);
    let cancel = setInterval(countDown, 1000);
  }

  function countDown() {
    if (time > 0 ) {
      time -= 1;
    }
  }
  
  function drawScore() {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Score " + score, 300, 50);
  }

  draw();

})

IMAGES = ['bear', 'fox', 'frog', 'gorilla', 'panda']

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