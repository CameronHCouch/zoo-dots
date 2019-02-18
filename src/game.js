
import IntroOutro from './intro_outro';
import Board from './game_board';

class Game {
  constructor(ctx, ctx2) {
    this.board = '';
    this.ctx = ctx;
    this.ctx2 = ctx2;

    this.handleMouseMove = false;
    this.bgMusic = "";
    this.soundMuted = false;
    this.soundButtonX = 445;
    this.soundButtonY = 475;

    this.gameOver = true;
    this.gameOngoing = false;

    this.introOutro = new IntroOutro(ctx);

    this.loadBackgroundMusic();
    this.musicListener();
  }

  start() {
    this.board = new Board(this.ctx, this.ctx2);
    this.introOutro.game = this;

    this.draw();
    if (!this.bgMusic) this.loadBackgroundMusic();
  }

  loadBackgroundMusic() {
    this.bgMusic = new Audio('./assets/sound/zoo_tycoon_theme.mp3');
    this.bgMusic.loop = true;
  };

  musicListener() {
    document.addEventListener("click", (e) => {
      if (this.muteClicked(e)) {
        if (!this.soundMuted) {
          this.toggleSound();
          this.bgMusic.pause();
          this.drawSoundButton(this.ctx, this.soundImage());
        } else if (this.soundMuted) {
          this.toggleSound();
          this.bgMusic.play();
          this.drawSoundButton(this.ctx, this.soundImage());
        }
      }
    });
  }

  toggleSound() {
    this.soundMuted = !this.soundMuted;
    this.drawSoundButton(this.ctx, this.soundImage());
  }

  soundImage(){
    if (this.soundMuted == true) {
      return './assets/speaker-high-volume.png'
    } else {
      return './assets/muted-speaker.png';
    }
  }

  muteClicked(e) {
    return Boolean((e.offsetX - this.soundButtonX <= 25) &&
      (e.offsetX - this.soundButtonX >= 0) &&
      (e.offsetY - this.soundButtonY >= 0) &&
      (e.offsetY - this.soundButtonY <= 25))
  }

  drawSoundButton(ctx, imageSource) {
    let img = new Image(25, 25);
    let backgroundColor = this.gameOngoing ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.5)";
    img.onload = () => {
      ctx.clearRect(this.soundButtonX, this.soundButtonY, 25, 25);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(this.soundButtonX, this.soundButtonY, 25, 25);
      ctx.beginPath();
      ctx.drawImage(img, this.soundButtonX, this.soundButtonY, 25, 25);
      ctx.closePath();
      ctx.fill();
    }
    img.src = imageSource;
  }

  gameOverListener() {
    if (this.board.timer.time == 0) {
      clearInterval(this.gameOverListenerInt);
      this.board.timer.reset();
      this.gameOngoing = false;
      this.ctx.clearRect(1, 1, 478, 508);
      this.introOutro.drawOutro(this.board.score.score);
      this.drawSoundButton(this.ctx, this.soundImage());
    }
  }

  gameStartListener(){
    if (this.introOutro.beginGame) {
      this.ctx.clearRect(1, 1, 478, 508);
      clearInterval(this.startListenerInt);
      this.gameOngoing = true;
      this.drawSoundButton(this.ctx, this.soundImage());
      this.board.draw();
    }
    
  }

  draw() {
    this.drawSoundButton(this.ctx, this.soundImage());

    if (this.gameOver) {
      this.gameOngoing = false;
      this.introOutro.drawIntro();
    }
    this.startListenerInt = setInterval(this.gameStartListener.bind(this), 400);
    this.gameOverListenerInt = setInterval(this.gameOverListener.bind(this), 500);
  }

}

export default Game;