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
    this.bgMusic.loop = true;
  };

  start(){
    this.gameOver = false;
    this.interval = setInterval(this.draw.bind(this), 100);
    this.loadBackgroundMusic();
  }

  musicListener(){
    document.addEventListener("click", (e) => {
      if (this.muteClicked(e)){
        if (!this.soundMuted) {
          this.toggleSound();
          this.bgMusic.pause();
        } else if (this.soundMuted) {
          this.toggleSound();
          this.bgMusic.play();
        }
      }
    });
  }

  toggleSound(){
    this.soundMuted = !this.soundMuted;
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
//figure out game end logic x.x
  // endGame(){
  //   this.gameOver = true;
  //   clearInterval(this.interval);
  //   this.drawGameOver();
  //   console.log("game over for you")
  //   console.log(this.gameOver)
  // }

  gameOverListener(){
    if (this.board.timer.time == 0) this.endGame();
  }
  
  drawGameOver(){
    this.ctx.clearRect(0, 0, 480, 640);
  }
  
  draw() {
    this.drawSoundButton(this.ctx);
    this.board.draw();
    this.gameOverListener(this);
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