class Game {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx;
    this.handleMouseMove = false;
  }

  // draw() {
  //   setInterval(this.grid.draw.bind(this.grid, this.ctx), 1000);
  //   setInterval(this.timer.draw.bind(this.timer, this.ctx), 1000);
  //   setInterval(this.score.draw.bind(this.score, this.ctx), 1000);
  // }

  // mouseDownHandler(e) {
  //   this.grid.handleMouseDown(e);
  //   this.grid.toggleLineDrawing('on');
  //   this.handleMouseMove = true;
  // }

  // mouseUpHandler(e) {
  //   this.grid.handleMouseUp(e);
  //   this.grid.toggleLineDrawing('off');
  //   this.handleMouseMove = false;
  // }

  // mouseMoveHandler(e) {
  //   if (this.handleMouseMove) {
  //     this.grid.connectDots(e);
  //   }
  // }
}

export default Game;