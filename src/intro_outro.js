class IntroOutro {
  constructor(ctx) {
    this.ctx = ctx;
    this.highScore = 0;
    this.beginGame = false;
    this.canvas = document.getElementById("zoo-canvas");

    this.selectGameMode = this.selectGameMode.bind(this);
    this.hoverDescription = this.hoverDescription.bind(this);
    this.handleOutroClick = this.handleOutroClick.bind(this);
    this.handleOutroHover = this.handleOutroHover.bind(this);

    this.timedModeX = 240;
    this.timedModeY = 300;
  }

  drawIntro() {
    this.canvas.addEventListener("click", this.selectGameMode, false);
    this.canvas.addEventListener("mousemove", this.hoverDescription, false);

    this.ctx.clearRect(1, 1, 478, 508);
    this.ctx.fillStyle = "rgba(255,255,255,0.5)";
    this.ctx.fillRect(1,1,478,508);

    this.ctx.font = "50px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Zoo Dots!", 140, 150);

    this.drawTimedMode(this.ctx);
  }

  drawTimedMode(ctx){
    ctx.beginPath();
    ctx.fillStyle = '#ea8700';
    ctx.arc(this.timedModeX, this.timedModeY, 50, 0, 2 * Math.PI);
    ctx.fill();

    let img = new Image(65, 65);
      img.onload = () => {
        ctx.beginPath();
        ctx.drawImage(
          img,
          this.timedModeX - 32.5,
          this.timedModeY - 32.5,
          65,
          65,
        );
        ctx.closePath();
        ctx.fill();
      }
      img.src = `./assets/five-oclock.png`;
  }

  selectGameMode(e){
    e.preventDefault();
    if (this.timedModePosition(e)) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#8ecb1e';
      this.ctx.arc(this.timedModeX, this.timedModeY, 50, 0, 2 * Math.PI);
      this.ctx.fill();
      
      this.beginGame = true;
      this.ctx.clearRect(1, 1, 478, 508);
      this.canvas.removeEventListener("click", this.selectGameMode);
      this.canvas.removeEventListener("mousemove", this.hoverDescription);
    }

    let img = new Image(65, 65);
    img.onload = () => {
      this.ctx.beginPath();
      this.ctx.drawImage(
        img,
        this.timedModeX - 32.5,
        this.timedModeY - 32.5,
        65,
        65,
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
    img.src = `./assets/five-oclock.png`;
  }

  timedModePosition(e){
    return Boolean((e.offsetX >= this.timedModeX - 50) &&
      (e.offsetX <= this.timedModeX + 50) &&
      (e.offsetY >= this.timedModeY - 50) &&
      (e.offsetY <= this.timedModeY + 50));
  }

  hoverDescription(e){
    this.ctx.clearRect(300, 285, 175, 40);
    this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
    this.ctx.fillRect(300, 285, 175, 40);

    if (this.timedModePosition(e)){
      this.ctx.clearRect(300, 285, 175, 40);
      this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
      this.ctx.fillRect(300, 285, 175, 40);
      this.ctx.font = "25px Open Sans";
      this.ctx.fillStyle = 'black';
      this.ctx.fillText("Timed Mode!", 300, 310);
    }

  }

  drawOutro(score){
    this.ctx.clearRect(1, 1, 478, 508);
    this.ctx.fillStyle = "rgba(255,255,255,0.5)";
    this.ctx.fillRect(1, 1, 478, 508);
    
    this.updateHighScore(score);

    this.ctx.font = "45px Open Sans";
    this.ctx.fillStyle = '#3b454d';
    this.ctx.fillText("Game Over!", 111, 150);
    this.ctx.font = "30px Open Sans";
    this.ctx.fillText(`High Score: ${this.highScore}`, 140, 230);
    this.ctx.fillText(`Score: ${score}`, 175, 290);

    this.canvas.addEventListener("click", this.handleOutroClick, false);
    this.canvas.addEventListener("mousemove", this.handleOutroHover, false);

    this.drawPlayAgain();
    this.drawMenuButton();
  }

  updateHighScore(score){
    if (score > this.highScore) {
      this.highScore = score;

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'red';
      this.ctx.fillText("NEW HIGH", 55, 219);
      this.ctx.fillText("SCORE!", 70, 234);
    }
  }

  drawPlayAgain(){
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ea8700';
    this.ctx.arc(195, 380, 40, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.font = "15px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Play", 180, 370);
    this.ctx.fillText("Again", 175, 390);
  }

  drawMenuButton(){
    this.ctx.beginPath();
    this.ctx.fillStyle = '#8ecb1e';
    this.ctx.arc(285, 380, 40, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.font = "15px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Main", 268, 370);
    this.ctx.fillText("Menu", 265, 390);
  }

  handleOutroClick(e) {
    e.preventDefault();
    if ((e.offsetX >= 155) && (e.offsetX <= 240) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.beginGame = true;
      this.canvas.removeEventListener("click", this.handleOutroClick);
      this.canvas.removeEventListener("mousemove", this.handleOutroHover);
      this.ctx.clearRect(1, 1, 478, 508);
      this.game.gameOver = false;
      this.game.gameOngoing = true;
      this.game.start();
    }

    if ((e.offsetX >= 247) && (e.offsetX <= 325) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.beginGame = false;
      this.canvas.removeEventListener("click", this.handleOutroClick);
      this.canvas.removeEventListener("mousemove", this.handleOutroHover);
      this.ctx.clearRect(1, 1, 478, 508);
      this.game.gameOver = true;
      this.game.start();
    }
  }

  handleOutroHover(e) {
    //play again button
    if ((e.offsetX >= 155) && (e.offsetX <= 240) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.ctx.clearRect(155, 342, 80, 80);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      this.ctx.fillRect(155, 342, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fa8700';
      this.ctx.arc(195, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Play", 180, 370);
      this.ctx.fillText("Again", 175, 390);
    } else {
      this.ctx.clearRect(155, 342, 80, 80);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      this.ctx.fillRect(155, 342, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#ea8700';
      this.ctx.arc(195, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'black';
      this.ctx.fillText("Play", 180, 370);
      this.ctx.fillText("Again", 175, 390);
    }
    // main menu button
    if ((e.offsetX >= 247) && (e.offsetX <= 325) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.ctx.clearRect(247, 325, 80, 80);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      this.ctx.fillRect(247, 325, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#7ecb1e';
      this.ctx.arc(285, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Main", 268, 370);
      this.ctx.fillText("Menu", 265, 390);
    } else {
      this.ctx.clearRect(247, 325, 80, 80);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      this.ctx.fillRect(247, 325, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#8ecb1e';
      this.ctx.arc(285, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'black';
      this.ctx.fillText("Main", 268, 370);
      this.ctx.fillText("Menu", 265, 390);
    }
  }
  
}

export default IntroOutro;