import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor(ctx, ctx2) {
    this.grid = new Grid(ctx, ctx2);
    this.timer = new Timer();
    this.score = new Score();
    this.ctx = ctx;
    this.handleMouseMove = false;
  }

  draw() {
    this.timer.draw(this.ctx);
    this.score.draw(this.ctx);
    this.grid.draw(this.ctx);
    // if (counter <= 1) {
    //   counter++;
    // requestAnimationFrame(draw);
    // }
  }

  mouseDownHandler(e) {
    this.grid.passDownToDot(e);
    this.grid.toggleLineDrawing('on');
    this.handleMouseMove = true;
  }
  
  mouseUpHandler(e) {
    this.grid.passUpToDot(e);
    this.grid.toggleLineDrawing('off');
    this.handleMouseMove = false;
  }

  mouseMoveHandler(e) {
    if (this.handleMouseMove) {
      this.grid.drawLine(e);
      this.grid.connectDots(e);
    }
  }
}

export default GameBoard;