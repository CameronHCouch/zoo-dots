
class Score {
  constructor() {
    this.score = 0;
  }

  draw(ctx) {
    ctx.clearRect(295, 5, 150, 60)
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillRect(295, 5, 150, 60);
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Score " + this.score, 300, 50);
  }
}

export default Score;