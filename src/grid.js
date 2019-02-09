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
    console.log(this.dots)
  }

  passUpToDot(e){
    console.log(e.offsetX, e.offsetY)
    let wee = this.dots.flat()
    let answer = wee.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <=28))
    })

    console.log(answer);
    // dot.deactivate(e){

    // }
  }

  passDownToDot(e){
    console.log(e.offsetX, e.offsetYx)

    // dot.activate(e){
      
    // }
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


// [0,0] = 105..130, 175..200  [1,0] = 155..180,175..200
// [1,0] = 105..130, 225..250

// give each one x and y range of -25, I spose