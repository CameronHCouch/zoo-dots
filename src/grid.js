import Dot from './dot';

class Grid {
  constructor() {
    this.rows = 6;
    this.cols = 6;
    this.dots = [];
    this.dotQueue = [];
    this.addDots();
  }
  // dots

  addDots(){
    for (var x = 0; x < this.cols; x++) {
      let newRow = [];
      for (var y = 0; y < this.rows; y++) {
        newRow.push(new Dot([x,y]));
      }
      this.dots.push(newRow);
    }
  }

  draw(ctx) {
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        dot.draw(ctx);
      })
    })
  }
}

export default Grid;


//Soon-Mi sez: put dots into an array 
// and then grab dots from array?
//Jeff sez: look at Asteroids (for that ^ ?)