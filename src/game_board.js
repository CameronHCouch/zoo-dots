import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor() {
    this.grid = new Grid();
    this.timer = new Timer();
    this.score = new Score();
  }
  // dots

  draw(ctx) {
    this.timer.draw(ctx);
    this.score.draw(ctx);
    this.grid.draw(ctx);
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