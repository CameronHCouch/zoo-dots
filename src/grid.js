const Dot = require('./dot');

class Grid {
  constructor(ctx) {
    this.rows = 6;
    this.cols = 6;
    this.margin = 50;
    this.yStart = 150;
    this.xStart = 80;

  }
  // dots
  draw() {
    for (var x = 0; x < cols; x++) {
      for (var y = 0; y < rows; y++) {
        new Dot(ctx);
      }
    }
  }
}
module.exports = Grid;