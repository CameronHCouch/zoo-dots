
class Score {
  constructor() {
    this.score = 0;
  }

  drawScore() {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Score " + score, 300, 50);
  }
}

export default Score;