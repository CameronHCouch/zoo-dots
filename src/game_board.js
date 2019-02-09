import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor(ctx) {
    this.grid = new Grid(ctx);
    this.timer = new Timer();
    this.score = new Score();
    this.ctx = ctx;
  }
  // dots

  draw() {
    this.timer.draw(this.ctx);
    this.score.draw(this.ctx);
    this.grid.draw();
    // if (counter <= 1) {
    //   counter++;
    // requestAnimationFrame(draw);
    // }
  }

  mouseDownHandler(e){
    this.grid.passDownToDot(e);
  }
  
  mouseUpHandler(e) {
    this.grid.passUpToDot(e);
  }

// document.addEventListener("mousemove", mouseMoveHandler, false);
}

export default GameBoard;