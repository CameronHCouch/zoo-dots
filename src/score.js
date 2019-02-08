let score = 0;

function drawScore() {
  ctx.font = "30px Open Sans";
  ctx.fillStyle = 'black';
  ctx.fillText("Score " + score, 300, 50);
}

module.exports = Score;