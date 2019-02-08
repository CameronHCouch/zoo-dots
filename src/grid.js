import Dot from './dot';

class Grid {
  constructor(ctx) {
    this.rows = 6;
    this.cols = 6;
    this.margin = 50;
    this.yStart = 150;
    this.xStart = 80;
    this.ctx = ctx;

  }
  // dots
  draw() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        let dot = new Dot(this.ctx);
        dot.draw();
      }
    }
  }
}

export default Grid;