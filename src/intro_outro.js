class IntroOutro {
  constructor(ctx) {
    this.ctx = ctx;
    this.highscore = '';
    this.beginGame = false;
    this.canvas = document.getElementById("zoo-canvas");

    this.selectGameMode = this.selectGameMode.bind(this);
    this.hoverDescription = this.hoverDescription.bind(this);
  }

  drawIntro() {
    console.log('drawIntro')
    this.canvas.addEventListener("click", this.selectGameMode, false);
    this.canvas.addEventListener("mousemove", this.hoverDescription, false);

    this.ctx.clearRect(1, 1, 478, 638);
    this.ctx.fillStyle = "rgba(255,255,255,1)";
    this.ctx.fillRect(1,1,478,638);

    this.ctx.font = "50px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Zoo Dots!", 140, 150);

    this.drawTimedMode(this.ctx);
  }

  drawTimedMode(ctx){
    console.log('drawTimedMode')
    ctx.beginPath();
    ctx.fillStyle = '#ea8700';
    ctx.arc(240, 350, 50, 0, 2 * Math.PI);
    ctx.fill();

    let img = new Image(65, 65);
      img.onload = () => {
        ctx.beginPath();
        ctx.drawImage(
          img,
          207.5,
          317.5,
          65,
          65,
        );
        ctx.closePath();
        ctx.fill();
      }
      img.src = `./assets/five-oclock.png`;
  }

  //Y 301, 400
  //X 193, 292

  selectGameMode(e){
    e.preventDefault();
    if ((e.offsetX >= 193) && (e.offsetX <= 292) && (e.offsetY >= 301) && (e.offsetY <= 400)) {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#8ecb1e';
      this.ctx.arc(240, 350, 50, 0, 2 * Math.PI);
      this.ctx.fill();
      
      this.beginGame = true;
      this.ctx.clearRect(1, 1, 478, 638);
      console.log('selected')
      this.canvas.removeEventListener("click", this.selectGameMode);
      this.canvas.removeEventListener("mousemove", this.hoverDescription);
    }

    let img = new Image(65, 65);
    img.onload = () => {
      this.ctx.beginPath();
      this.ctx.drawImage(
        img,
        207.5,
        317.5,
        65,
        65,
      );
      this.ctx.closePath();
      this.ctx.fill();
    }
    img.src = `./assets/five-oclock.png`;

    //get rid of intro-outro listeners
  }

  hoverDescription(e){
    this.ctx.clearRect(290, 345, 175, 40);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(290, 345, 175, 40);

    if ((e.offsetX >= 193) && (e.offsetX <= 292) && (e.offsetY >= 301) && (e.offsetY <= 400)){
      this.ctx.clearRect(290, 345, 175, 40);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(290, 345, 175, 40);
      this.ctx.font = "25px Open Sans";
      this.ctx.fillStyle = 'black';
      this.ctx.fillText("Timed Mode!", 290, 370);
    }

  }

  drawOutro(score){
    console.log('drawOutro')

    this.ctx.clearRect(1, 1, 478, 638);
    this.ctx.fillStyle = "rgba(255,255,255,1)";
    this.ctx.fillRect(1, 1, 478, 638);

    this.ctx.font = "50px Open Sans";
    this.ctx.fillStyle = 'black';
    this.ctx.fillText("Game Over!", 140, 150);
    this.ctx.fillText(`Score: ${score}`, 140, 250);

    this.drawPlayAgain();
  }

  drawPlayAgain(){
    
  }
}

export default IntroOutro;