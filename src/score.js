
class Score {
  constructor() {
    this.score = 0;
  }

  draw(ctx) {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Score " + this.score, 300, 50);
  }
}

export default Score;