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
      let int1 = setInterval(this.grid.draw.bind(this.grid, this.ctx), 50);
      let int2 = setInterval(this.timer.draw.bind(this.timer, this.ctx), 1000);
      let int3 = setInterval(this.score.draw.bind(this.score, this.ctx), 750);
      if (this.timer.time <= 0) clearInterval(int1, int2, int3);
  }

  // x 100, 385
  // y 170, 455

  validRange(e){
    return Boolean((e.offsetX >= 100) &&
      (e.offsetX <= 385) &&
      (e.offsetY >= 170) &&
      (e.offsetY <= 455))
  }

  mouseDownHandler(e) {
    this.grid.handleMouseDown(e);
    this.grid.toggleLineDrawing('on');
    if (this.validRange(e)) this.handleMouseMove = true;
  }
  
  mouseUpHandler(e) {
    this.grid.handleMouseUp(e);
    this.grid.toggleLineDrawing('off');
    this.handleMouseMove = false;
  }

  mouseMoveHandler(e) {
    if (this.handleMouseMove) {
      this.grid.connectDots(e);
    }
  }
}

export default GameBoard;