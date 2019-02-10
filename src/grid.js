import Dot from './dot';

class Grid {
  constructor(ctx, ctx2) {
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.rows = 6;
    this.cols = 6;
    this.dots = [];
    this.dotQueue = [];
    this.addDots();

    this.line = false;
    this.lineStartX = '';
    this.lineStartY = '';
    this.startDot = '';

    this.chainedDots = [];
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
      this.chainedDots.push(startDot);
      this.draw(this.ctx);
      console.log(`it me`) 
      console.log(this.chainedDots);
      console.log('me no nmore')
    };

    // snap line to center of selected Dot
    this.lineStartX = this.startDot.x + 12.5;
    this.lineStartY = this.startDot.y + 12.5;
  }


  toggleLineDrawing(onOrOff) {
    if (onOrOff === 'on') {
    this.line = true;
    } else {
      console.log(this);
      this.line = false;
      this.lineStartX = '';
      this.lineStartY = '';
      this.startDot = '';
      this.ctx2.strokeStyle = "";
      this.chainedDots = [];
      console.log(this);
    }
  }
  
  drawLine(e) {
    if (this.line) {
      this.ctx2.clearRect(0,0,480,640);
      this.ctx2.strokeStyle = this.startDot.color;
      this.ctx2.lineWidth = 5;
      this.ctx2.beginPath();
      this.ctx2.moveTo(e.offsetX, e.offsetY);
      this.ctx2.lineTo(this.lineStartX, this.lineStartY);
      this.ctx2.stroke();
    }
  }

  connectDots(e) {
    let flattened = this.dots.flat();
    let neighborDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <= 28))
    });

    if (
      (neighborDot.pos !== this.startDot.pos) && 
      (neighborDot.species === this.startDot.species) &&
      (!this.chainedDots.includes(neighborDot))
      ){
      neighborDot.activate();
      this.chainedDots.push(neighborDot);
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


// [0,0] = 105..130, 175..200  [1,0] = 155..180,175..200
// [1,0] = 105..130, 225..250

// give each one x and y range of -25, I spose