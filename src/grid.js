import Dot from './dot';

class Grid {
  constructor(ctx, ctx2, score) {
    this.ctx = ctx;
    this.ctx2 = ctx2;
    this.rows = 6;
    this.cols = 6;
    this.dots = [];
    this.addDots();

    this.score = score

    this.line = false;
    this.lineStartX = '';
    this.lineStartY = '';
    this.startDot = '';
    this.cleared = true;

    this.chainedDots = [];
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
    this.score.score += this.chainedDots.length;
    this.handleClear(finishDot);
  }

  handleClear(finishDot){
    if (this.chainedDots.length > 1) {
      this.clearDotsFromBoard(finishDot);
      this.dropDownRemainingDots();
      this.fillGapsWithNewDots();
    }
    this.clearLine();
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

  clearDotsFromBoard(finishDot) {
    console.log(this.startDot === finishDot);
    // if ((this.startDot === finishDot) &&
    //     ()


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
      this.cleared = false;
      this.ctx2.clearRect(0,0,480,640);
      this.ctx2.strokeStyle = this.startDot.color;
      this.ctx2.lineWidth = 5;

      this.ctx2.beginPath();
      this.ctx2.moveTo(e.offsetX, e.offsetY);
      this.ctx2.lineTo(this.lineStartX, this.lineStartY);
      this.ctx2.stroke();
    }
  }

  clearLine(){
    this.ctx2.clearRect(0, 0, 480, 640);
  }

  connectDots(e) {
    let flattened = this.dots.flat();
    let neighborDot = flattened.find((dot) => {
      return ((e.offsetX - dot.x <= 28) && (e.offsetY - dot.y <= 28))
    });
    console.log(this.chainedDots);

    if ((neighborDot.species === this.startDot.species) &&
       (!this.chainedDots.includes(neighborDot)) &&
       (this.validMove(neighborDot))
       ){
      neighborDot.activate();
      this.chainedDots.push(neighborDot);
    }

    this.draw(this.ctx);
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

    if (validMoves.includes(neighbor.pos.join(','))){ 
      return true ;
    }
    return false;
  }

  draw(ctx) {
    this.dots.forEach((row) => {
      row.forEach((dot) => {
        dot.draw(ctx, this.ctx2);
      })
    })
  }
}

export default Grid;


// [0,0] = 105..130, 175..200  [1,0] = 155..180,175..200
// [1,0] = 105..130, 225..250

// give each one x and y range of -25, I spose