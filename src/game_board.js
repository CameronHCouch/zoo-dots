import Grid from './grid';
import Timer from './timer';
import Score from './score';

class GameBoard {
  constructor(ctx, ctx2) {
    this.timer = new Timer();
    this.score = new Score();
    this.grid = new Grid(ctx, ctx2, this.score);
    this.ctx = ctx;
    this.canvas = document.getElementById('zoo-canvas');

    this.handleMouseMove = false;
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);

    this.timeOutListenerInt = '';
  }

  draw() {
    this.canvas.addEventListener("mousedown", this.mouseDownHandler, false);
    this.canvas.addEventListener("mouseup", this.mouseUpHandler, false);
    this.canvas.addEventListener("mousemove", this.mouseMoveHandler, false);
    
    let int1 = setInterval(this.grid.draw.bind(this.grid, this.ctx), 50);
    let int2 = setInterval(this.timer.draw.bind(this.timer, this.ctx), 1000);
    let int3 = setInterval(this.score.draw.bind(this.score, this.ctx), 50);
    this.timeOutListenerInt = setInterval(this.timeOutListener.bind(this, [int1, int2, int3]));
  }

  timeOutListener(intervalArr){
    if (this.timer.time <= 0) {
      intervalArr.forEach((interval) => {
        clearInterval(interval);
      })
      clearInterval(this.timeOutListenerInt);
      this.grid.clearLine();
      this.canvas.removeEventListener("mousedown", this.mouseDownHandler, false);
      this.canvas.removeEventListener("mouseup", this.mouseUpHandler, false);
      this.canvas.removeEventListener("mousemove", this.mouseMoveHandler, false);
    }
  }

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