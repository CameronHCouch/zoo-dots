
import IntroOutro from './intro_outro';

class Game {
  constructor(board, ctx) {
    this.board = board;
    this.ctx = ctx;

    this.handleMouseMove = false;
    this.bgMusic = "";
    this.soundMuted = true;
    this.soundButtonX = 425;
    this.soundButtonY = 590;

    this.game = true;
    this.gameOver = true;
    this.gameOngoing = false;

    this.introOutro = new IntroOutro(ctx);

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
    let backgroundColor = this.gameOngoing ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)";
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
      this.gameOngoing = false;
      this.ctx.clearRect(1, 1, 478, 638);
      this.introOutro.drawOutro(this.board.score.score);
    }
  }

  gameStartListener(){
    if (this.introOutro.beginGame) {
      clearInterval(this.listenerInt);
      console.log('ello there');
      this.gameOngoing = true;
      this.ctx.clearRect(1, 1, 478, 638);
      this.board.draw();
      this.drawSoundButton(this.ctx, './assets/speaker-high-volume.png');
    }
    
  }

  draw() {
    this.drawSoundButton(this.ctx, './assets/speaker-high-volume.png');

    if (this.gameOver) {
      this.introOutro.drawIntro();
    }

    this.listenerInt = setInterval(this.gameStartListener.bind(this), 500);
    this.gameOverListenerInt = setInterval(this.gameOverListener.bind(this), 500);

  }

}

export default Game;