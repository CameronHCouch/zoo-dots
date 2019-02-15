import Dot from './dot';

class Grid {
  constructor(ctx, ctx2, score) {
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.rows = 6;
    this.cols = 6;

    this.dots = [];
    this.addDots();
    this.chainedDots = [];

    this.score = score

    this.line = false;
    this.lineStartX = '';
    this.lineStartY = '';
    this.startDot = '';
  }

  addDots(){
    for (var x = 0; x < this.cols; x++) {
      let newRow = [];
      for (var y = 0; y < this.rows; y++) {
        newRow.push(new Dot([x,y]));
      }
      this.dots.push(newRow);
    }
  }

  handleMouseUp(e){
    let flattened = this.dots.flat();
    let finishDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <=28));
    })
    this.handleClear(finishDot);
  }

  handleClear(finishDot){
    if (this.chainedDots.length > 1) {
      this.clearDotsFromBoard(finishDot);
      this.dropDownRemainingDots();
      this.fillGapsWithNewDots();
    }
    if (this.startDot) this.startDot.destroy = true;
    this.startDot = '';
    this.clearLine();
  }

  //a.k.a. bubble sort
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

  removeAllDotsOfSpecies(species){
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        if (dot.species === species) {
          dot.markForRemoval();
          this.score.score +=1
        }
      });
    });
  }

  clearDotsFromBoard(finishDot) {
    if ((this.startDot === finishDot) &&
        (this.chainedDots.length >= 4) &&
        (this.validMove(finishDot))){
          this.removeAllDotsOfSpecies(finishDot.species)
    } else {


      this.chainedDots.forEach((dot) => {
        dot.markForRemoval();
        this.score.score += 1
      })
    }

    this.dots.forEach((row) => {
      row.forEach((dot) => {
        if (dot.destroy) {
          let [x,y] = dot.pos;
          this.dots[x][y] = new Dot(dot.pos, "sentinel")
        }
      })
    })
  }

  fillGapsWithNewDots() {
    this.dots.forEach((row, idx1) => {
      row.forEach((dot, idx2) => {
        if (dot.species === 'sentinel') {
          this.dots[idx1][idx2] = new Dot([idx1,idx2]);
        }
      })
    })
  }

  handleMouseDown(e){
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
  }


  toggleLineDrawing(onOrOff) {
    if (onOrOff === 'on') {
    this.line = true;
    } else {
      this.line = false;
      this.lineStartX = '';
      this.lineStartY = '';
      this.startDot = '';
      this.ctx2.strokeStyle = "";
      this.chainedDots = [];
    }
  }
  
  drawLine(e) {
    if (this.line) {
      this.clearLine();
      this.ctx2.lineWidth = 3;

      let lastEl = this.chainedDots[this.chainedDots.length - 1] || this.startDot;
      this.lineStartX = lastEl.x + 12.5;
      this.lineStartY = lastEl.y + 12.5;

      this.ctx2.beginPath();
      this.ctx2.moveTo(this.lineStartX, this.lineStartY);
      this.ctx2.lineTo(e.offsetX, e.offsetY);
      this.ctx2.stroke();
      this.ctx2.strokeStyle = lastEl.color;
    }
  }

  clearLine(){
    this.ctx2.clearRect(0, 0, 480, 640);
  }

  drawConnection(){
    let prevEl = this.chainedDots[this.chainedDots.length - 2] || this.startDot;
    let lineStartX = prevEl.x + 12.5;
    let lineStartY = prevEl.y + 12.5;
    
    let lastEl = this.chainedDots[this.chainedDots.length - 1];
    let lineEndX = lastEl.x + 12.5;
    let lineEndY = lastEl.y + 12.5;

    this.ctx.strokeStyle = prevEl.color;
    this.ctx.lineWidth = 3;

    this.ctx.beginPath();
    this.ctx.moveTo(lineStartX, lineStartY);
    this.ctx.lineTo(lineEndX, lineEndY);
    this.ctx.stroke();
  }

  connectDots(e) {
    this.drawLine(e); 

    let flattened = this.dots.flat();
    let neighborDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 25) && (e.offsetY - dot.y <= 25))
    });

    if ((neighborDot.species === this.startDot.species) &&
       (!this.chainedDots.includes(neighborDot)) &&
       (this.validMove(neighborDot))
       ){
      neighborDot.activate();
      this.chainedDots.push(neighborDot);
      this.drawConnection();
    }
  }

  validMove(neighbor){
    let lastSelected = this.chainedDots[this.chainedDots.length-1];
    let [row,col] = lastSelected.pos;
    const validMoves = [
      [row, col-1].join(','),
      [row, col+1].join(','),
      [row+1, col].join(','),
      [row-1, col].join(',')
    ];
    // array checking in JS is tricky, so convert to string
    if (validMoves.includes(neighbor.pos.join(','))){ 
      return true ;
    }
    return false;
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