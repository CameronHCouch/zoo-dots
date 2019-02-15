class Game {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx;
    this.handleMouseMove = false;
    this.bgMusic = "";
    this.soundMuted = true;
    this.soundButtonX = 425;
    this.soundButtonY = 590;
    this.gameOver = false;

    this.loadBackgroundMusic();
    this.musicListener();
  }

  loadBackgroundMusic() {
    this.bgMusic = new Audio('./assets/sound/zoo_tycoon_theme.mp3');
  };

  startGame(){
    this.loadBackgroundMusic();
  }

  musicListener(){
    document.addEventListener("click", (e) => {
      if (this.muteClicked(e)){
        console.log('you clicked right?')
        if (!this.soundMuted) {
          console.log('pausing')
          this.toggleSound();
          this.bgMusic.pause();
        } else if (this.soundMuted) {
          this.toggleSound();
          console.log('starting')
          this.bgMusic.play();
        }
      }
    });
  }

  toggleSound(){
    this.soundMuted = !this.soundMuted;
    console.log(this.soundMuted);
  }

  muteClicked(e){
    return Boolean((e.offsetX - this.soundButtonX <= 25) && 
                   (e.offsetX - this.soundButtonX >= 0) && 
                   (e.offsetY - this.soundButtonY >= 0) && 
                   (e.offsetY - this.soundButtonY <= 25))
  }

  drawSoundButton(ctx) {
    let img = new Image(25, 25);
    img.onload = () => {
      ctx.beginPath();
      ctx.drawImage(img,this.soundButtonX,this.soundButtonY,25,25);
      ctx.closePath();
      ctx.fill();
    }
    if (this.soundMuted) {
      ctx.clearRect(this.soundButtonX, this.soundButtonY, 25, 25);
      img.src = `./assets/muted-speaker.png`;
    } else {
      ctx.clearRect(this.soundButtonX, this.soundButtonY, 25, 25);
      img.src = `./assets/speaker-high-volume.png`;
    };
  };

  gameOver(){
    
  }
  

  draw() {
    setInterval(this.drawSoundButton.bind(this, this.ctx, this.board.ctx2), 1000);
    this.board.draw();
  }

  // mouseDownHandler(e) {
  //   this.grid.handleMouseDown(e);
  //   this.grid.toggleLineDrawing('on');
  //   this.handleMouseMove = true;
  // }

  // mouseUpHandler(e) {
  //   this.grid.handleMouseUp(e);
  //   this.grid.toggleLineDrawing('off');
  //   this.handleMouseMove = false;
  // }

  // mouseMoveHandler(e) {
  //   if (this.handleMouseMove) {
  //     this.grid.connectDots(e);
  //   }
  // }
}

export default Game;