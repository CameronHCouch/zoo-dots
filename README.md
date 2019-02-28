# Zoo Dots
Visit [Zoo Dots](https://www.cameroncouch.me/zoo-dots)!

## Background
In Zoo Dots, players click and drag to match two or more animals of the same species, earning points equal to the number selected. If a player makes a 2x2 square, every animal of that species is removed from the board. How many points can you get in 60 seconds?

![Gif Demonstration](https://user-images.githubusercontent.com/43548466/53589499-8fad3000-3b5d-11e9-9e5b-d731eb36db2a.gif)

## Technologies, Libraries, APIs
Zoo Dots was made using vanilla JavaScript, HTML5/CSS3, and Object-Oriented design principles. Animal images courtesy of [EmojiOne](https://www.emojione.com/).

## Features

### Mouse Event Handlers

```javascript
// src/game_board.js
  mouseDownHandler(e) {
    this.grid.handleMouseDown(e);
    this.grid.toggleLineDrawing('on');
    if (this.validRange(e)) this.handleMouseMove = true;
  }
  
  mouseUpHandler(e) {
    this.grid.handleMouseUp(e);
    this.grid.toggleLineDrawing('off');
    this.handleMouseMove = false;
  }

  mouseMoveHandler(e) {
    if (this.handleMouseMove) {
      this.grid.connectDots(e);
    }
  }
```

### Selection and De-Selection of 'Dots'

On click, the GameBoard class passes MouseDown and MouseMove handlers to the Grid. If the MouseDown handler starts on a valid animal face (referred to as 'dots'), the Grid class's connectDots function uses MouseMove events to dynamically determine whether a connecting line should be drawn between dots.

```javascript
// src/grid.js
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

    if ((neighborDot === this.chainedDots[this.chainedDots.length-2])){
      this.deselectDot(this.chainedDots[this.chainedDots.length - 1]);
      this.deselectDot(neighborDot);
      if (this.chainedDots.length === 1) {
        this.deselectDot(this.chainedDots[0]);
      }
    }
  }
```

### Valid Moves

To check for valid moves, I compare the last selected dot with currently moused-over dot (neighbor). If the neighbor's position is included in the validMoves array, then the move is legitimate.

```javascript
// src/grid.js
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
```

## Future Directions
- [ ] Add limited moves mode
- [ ] Add infinite mode
- [ ] Implement various powerups/obstacles
- [ ] Add puzzle mode
- [ ] Add unlockable themes