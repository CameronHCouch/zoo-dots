import Dot from './dot';

class Grid {
  constructor(ctx) {
    this.ctx = ctx;
    this.rows = 6;
    this.cols = 6;
    this.dots = [];
    this.dotQueue = [];
    this.addDots();

    this.line = false;
    this.lineStartX = '';
    this.lineStartY = '';
    this.startDot = '';
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

  passUpToDot(e){
    console.log(e.offsetX, e.offsetY);
    let flattened = this.dots.flat();
    let finishDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <=28));
    })

    // this.ctx.clearRect(0, 0, 480, 640);
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

    if (startDot) {
      this.startDot = startDot;
      startDot.activate();
      this.draw(this.ctx);
    };

    // snap line to center of selected Dot
    this.lineStartX = this.startDot.x + 12.5;
    this.lineStartY = this.startDot.y + 12.5;
  }


  toggleLineDrawing(onOrOff) {
    if (onOrOff === 'on') {
    this.line = true;
    } else {
      this.line = false;
      this.lineStartX = '';
      this.lineStartY = '';
      this.startDot = '';
      this.ctx.strokeStyle = "";
    }
  }
  
  drawLine(e) {
    if (this.line) {
      this.ctx.strokeStyle = this.startDot.color;
      this.ctx.lineWidth = 5;
      this.ctx.beginPath();
      this.ctx.moveTo(e.offsetX, e.offsetY);
      this.ctx.lineTo(this.lineStartX, this.lineStartY);
      this.ctx.stroke();
    }
  }

  draw() {
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