import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor(ctx, ctx2) {
    this.timer = new Timer();
    this.score = new Score();
    this.grid = new Grid(ctx, ctx2, this.score);
    this.ctx = ctx;
    this.handleMouseMove = false;
  }

  draw() {
    setInterval(this.grid.draw.bind(this.grid, this.ctx), 1000);
    setInterval(this.timer.draw.bind(this.timer, this.ctx), 1000);
    setInterval(this.score.draw.bind(this.score, this.ctx), 1000);
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