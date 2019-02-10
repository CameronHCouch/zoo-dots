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
    this.handleClear();

    // find all active dots and deactivate them
    // or: remove them from board?
    // dot.deactivate(e){

    // }
  }

  // where does game logic happen? aka. adding points to score?
  // points are sum of chainedDots
  handleClear(){
    this.clearDotsFromBoard();
    this.dropDownRemainingDots();
    // this.fillGapsWithNewDots();
    this.draw(this.ctx);
    this.draw(this.ctx2);
  }

  dropDownRemainingDots() {
    let sortable = true;
    while (sortable) {
      sortable = false;
      this.dots.forEach((row) => {
        row.forEach((dot, idx) => {
          if (idx < row.length - 1) {
            let upperDot = dot;
            let lowerDot = row[idx + 1];
            if ((lowerDot.species === 'sentinel') && 
                (upperDot.species !== 'sentinel')) {
              lowerDot.species = upperDot.species;
              upperDot.species = 'sentinel';
              sortable = true;
            }
          }
        })
      })
    }
  }

  clearDotsFromBoard() {
    console.log(this.chainedDots);
    this.chainedDots.forEach((dot) => {
      dot.markForRemoval();
    })
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        if (dot.destroy) {
          let [x,y] = dot.pos;
          this.dots[x][y] = new Dot(dot.pos, "sentinel")
        }
      })
    })
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

  //TODO: ensure dot is neighboring last neighbor when chaining neighbors

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

    this.draw(this.ctx);
  }

  // TODO: write these to shorten connectDots if statement logic
  // speciesCheck(dot1, dot2) {

  // }

  // neighborCheck(dot1, dot2) {

  // }

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