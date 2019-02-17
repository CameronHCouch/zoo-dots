# Zoo Dots
## Background
In Zoo Dots, players match two or more animals of the same species. Using only horizontal and vertical lines, players draw a continuous line between neighboring animals, earning points equal to the number selected. Selected animals disappear, existing animals shift down to replace those that were removed, and new animals fall from above to fill any gaps. If a player makes a 2x2 square, every animal of that species is removed from the board.

There are multiple game modes:
Timed games last for one minute.
Infinite games run until the board is out of moves.
(Bonus: Limited move rounds run for a fixed number of turns.)

## Functionality and MVP
In this game, players will:
- [ ] Choose a game mode (infinite and timed)
- [x] Toggle sound
- [x] Click and drag to select 2+ neighbors
- [x] Undo a selection by reversing the path their mouse traced
- [x] Remove all animals of a given species when a square is made
- [x] See their final score when the game is over
- [x] See their top score
- [x] Play Again or Return to Home Screen

Additional MVPs:
- [x] Concise tutorial text for new players
- [ ] A production README

## Technologies, Libraries, APIs

Zoo Dots will be made using vanilla JS, HTML5, and CSS3. Animal images courtesy of [EmojiOne](https://www.emojione.com/).

## File Architecture

- index.js
- game.js
- board.js
- grid.js
- animal.js
- util.js

## Wireframes

![js-wireframe](https://user-images.githubusercontent.com/43548466/52319689-1cb6fc00-2999-11e9-9788-f1d3ca6c97c7.jpg)
![dots replaced with animal faces](https://user-images.githubusercontent.com/43548466/52355804-0a70a880-2a01-11e9-9696-da476d8813d3.png)

## Implementation Timeline

### Day One
- Create intro screen with links, settings, and game mode buttons
- Create grid & populate grid with animals
- Generate selection logic for neighboring animals

### Day Two
- Implement selection logic for neighbors
  - Already-selected animals cannot be chosen again or crossed over
  - Animals must be horizontal or vertical neighbors
- Handle removal of animals from board and their replacement
- Implement de-selection of animals by reversing mouse path

### Day Three
- Game Over screen
- Ending logic for both Time and Infinite modes
- Scorekeeping and reporting of final scores


## Bonus Features
- [ ] Add limited moves mode
- [ ] Implement various powerups/obstacles
- [ ] Add puzzle mode(?)
- [ ] Add other themes