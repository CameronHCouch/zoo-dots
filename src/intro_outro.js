class IntroOutro {
  constructor(ctx) {
    this.ctx = ctx;
    this.highScore = 0;
    this.beginGame = false;
    this.canvas = document.getElementById("zoo-canvas");

    this.selectStart = this.selectStart.bind(this);
    this.hoverStart = this.hoverStart.bind(this);
    this.handleOutroClick = this.handleOutroClick.bind(this);
    this.handleOutroHover = this.handleOutroHover.bind(this);

    this.startButtonX = 240;
    this.startButtonY = 300;
  }

  drawIntro() {
    this.canvas.addEventListener("click", this.selectStart, false);
    this.canvas.addEventListener("mousemove", this.hoverStart, false);

    this.ctx.clearRect(1, 1, 478, 508);
    this.ctx.fillStyle = "rgba(255,255,255,0.5)";
    this.ctx.fillRect(1,1,478,508);
    
    this.ctx.font = "50px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Zoo Dots!", 127, 150);

    this.drawStartButton();
  }

  drawStartButton() {
    this.ctx.clearRect(203, 284, 80, 32);
    this.ctx.fillStyle = '#ea8700';
    this.ctx.fillRect(203, 284, 80, 32);

    this.ctx.beginPath();
    this.ctx.fillStyle = '#ea8700';
    this.ctx.arc(this.startButtonX, this.startButtonY, 50, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.font = "30px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Start", this.startButtonX - 35, this.startButtonY + 10);
  }

  selectStart(e){
    e.preventDefault();
    if (this.startButtonPosition(e)) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#8ecb1e';
      this.ctx.arc(this.startButtonX, this.startButtonY, 50.5, 0, 2 * Math.PI);
      this.ctx.fill();
      
      this.canvas.removeEventListener("click", this.selectStart);
      this.canvas.removeEventListener("mousemove", this.hoverStart);
      this.beginGame = true;
    }
  }

  startButtonPosition(e){
    return Boolean((e.offsetX >= this.startButtonX - 50) &&
      (e.offsetX <= this.startButtonX + 50) &&
      (e.offsetY >= this.startButtonY - 50) &&
      (e.offsetY <= this.startButtonY + 50));
  }

  hoverStart(e){
    if (this.startButtonPosition(e)){
      this.ctx.clearRect(203, 284, 80, 32);
      this.ctx.fillStyle = '#ea8700';
      this.ctx.fillRect(203, 284, 80, 32);

      this.ctx.beginPath();
      this.ctx.fillStyle = '#ea8700';
      this.ctx.arc(this.startButtonX, this.startButtonY, 50, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "30px Open Sans";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Start", this.startButtonX - 35, this.startButtonY + 10);
    } else {
      this.drawStartButton();
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
    this.ctx.clearRect(155, 342, 80, 80);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fillRect(155, 342, 80, 80);
    this.ctx.beginPath();
    this.ctx.fillStyle = '#ea8700';
    this.ctx.arc(195, 380, 40, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.font = "15px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Play", 180, 375);
    this.ctx.fillText("Again", 175, 395);
  }

  drawMenuButton(){
    this.ctx.clearRect(247, 325, 80, 80);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fillRect(247, 325, 80, 80);
    this.ctx.beginPath();
    this.ctx.fillStyle = '#7ecb1e';
    this.ctx.arc(285, 380, 40, 0, 2 * Math.PI);
    this.ctx.fill();

    this.ctx.font = "15px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Main", 267, 375);
    this.ctx.fillText("Menu", 264, 395);
  }

  handleOutroClick(e) {
    e.preventDefault();
    if ((e.offsetX >= 155) && (e.offsetX <= 240) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.beginGame = true;
      this.canvas.removeEventListener("click", this.handleOutroClick);
      this.canvas.removeEventListener("mousemove", this.handleOutroHover);
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
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      this.ctx.fillRect(155, 342, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fa8700';
      this.ctx.arc(195, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Play", 180, 375);
      this.ctx.fillText("Again", 175, 395);
    } else {
      this.drawPlayAgain();
    }
    // main menu button
    if ((e.offsetX >= 247) && (e.offsetX <= 325) && (e.offsetY >= 342) && (e.offsetY <= 421)) {
      this.ctx.clearRect(247, 325, 80, 80);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
      this.ctx.fillRect(247, 325, 80, 80);
      this.ctx.beginPath();
      this.ctx.fillStyle = '#8ecb1e';
      this.ctx.arc(285, 380, 40, 0, 2 * Math.PI);
      this.ctx.fill();

      this.ctx.font = "15px Open Sans";
      this.ctx.fillStyle = 'white';
      this.ctx.fillText("Main", 267, 375);
      this.ctx.fillText("Menu", 264, 395);
    } else {
      this.drawMenuButton();
    }
  }
  
}

export default IntroOutro;