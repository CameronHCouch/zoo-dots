import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor(canvas) {
    this.canvas = canvas;
  }
  // dots

  draw(ctx) {
    let grid = new Grid();
    let timer = new Timer();
    let score = new Score();

    timer.draw(ctx);
    score.draw(ctx);
    grid.draw(ctx);
    // if (counter <= 1) {
    //   counter++;
    // requestAnimationFrame(draw);
    // }
  }

  mouseDownHandler(e){
    console.log(e)
  }
  
  mouseUpHandler(e) {
    console.log(e)
  }

// document.addEventListener("mousemove", mouseMoveHandler, false);
// canvas.addEventListener('click', function () { }, false);
}

export default GameBoard;


//Soon-Mi sez: put dots into an array 
// and then grab dots from array?
//Jeff sez: look at Asteroids (for that ^ ?)