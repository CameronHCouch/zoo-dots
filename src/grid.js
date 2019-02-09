import Dot from './dot';

class Grid {
  constructor(ctx) {
    this.ctx = ctx;
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
    console.log(this.dots);
  }

  passUpToDot(e){
    console.log(e.offsetX, e.offsetY);
    let flattened = this.dots.flat();
    let finishDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <=28));
    })

    console.log(finishDot);


    // find all active dots and deactivate them
    // or: remove them from board?
    // dot.deactivate(e){

    // }
  }

  passDownToDot(e){
    console.log(e.offsetX, e.offsetY);
    let flattened = this.dots.flat();
    let startDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <= 28))
    });

    console.log(startDot);
    if (startDot) {
      startDot.activate();
      this.draw(this.ctx);
    };
  }

  draw() {
    console.log('ey')
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        dot.draw(this.ctx);
      })
    })
  }
}

export default Grid;


// [0,0] = 105..130, 175..200  [1,0] = 155..180,175..200
// [1,0] = 105..130, 225..250

// give each one x and y range of -25, I spose