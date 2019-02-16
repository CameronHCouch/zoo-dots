class IntroOutro {
  constructor(ctx) {
    this.ctx = ctx;
    this.highscore = '';

  }

  drawIntro() {
    this.ctx.clearRect(1, 1, 478, 638);
    this.ctx.fillStyle = "rgba(255,255,255,0.3)";
    this.ctx.fillRect(1,1,478,638);

    this.ctx.font = "30px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Zoooooooo Dots!", 150, 50);
  }

  drawGameOver() {
    this.ctx.clearRect(0, 0, 480, 640);
  }

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

export default IntroOutro;