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
    this.gameOngoing = false;

    this.loadBackgroundMusic();
    this.musicListener();
  }

  loadBackgroundMusic() {
    this.bgMusic = new Audio('./assets/sound/zoo_tycoon_theme.mp3');
    this.bgMusic.loop = true;
  };

  start() {
    this.gameOver = false;
    this.draw();
    this.loadBackgroundMusic();
  }

  musicListener() {
    document.addEventListener("click", (e) => {
      if (this.muteClicked(e)) {
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

  toggleSound() {
    this.soundMuted = !this.soundMuted;
    let imageSource;
    if (this.soundMuted == true) {
      imageSource = './assets/speaker-high-volume.png'
    } else {
      imageSource = './assets/muted-speaker.png';
    }
    this.drawSoundButton(this.ctx, imageSource);
  }

  muteClicked(e) {
    return Boolean((e.offsetX - this.soundButtonX <= 25) &&
      (e.offsetX - this.soundButtonX >= 0) &&
      (e.offsetY - this.soundButtonY >= 0) &&
      (e.offsetY - this.soundButtonY <= 25))
  }

  drawSoundButton(ctx, imageSource) {
    let img = new Image(25, 25);
    img.onload = () => {
      ctx.clearRect(this.soundButtonX, this.soundButtonY, 25, 25);
      ctx.beginPath();
      ctx.drawImage(img, this.soundButtonX, this.soundButtonY, 25, 25);
      ctx.closePath();
      ctx.fill();
    }
    img.src = imageSource;
  }

  //figure out game end logic x.x
  // endGame(){
  //   this.gameOver = true;
  //   clearInterval(this.interval);
  //   this.drawGameOver();
  //   console.log("game over for you")
  //   console.log(this.gameOver)
  // }

  gameOverListener() {
    if (this.board.timer.time == 0) this.endGame();
  }

  drawGameOver() {
    this.ctx.clearRect(0, 0, 480, 640);
  }

  draw() {
    this.drawSoundButton(this.ctx, './assets/speaker-high-volume.png');

    this.intro_outro.draw();

    if (this.gameOngoing == true) {
      this.board.draw();
    }
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