let time = 60;

function drawTimer() {
  ctx.font = "30px Open Sans";
  ctx.fillStyle = 'black';
  ctx.fillText("Time " + time, 75, 50);
  let cancel = setInterval(countDown, 1000);
}

function countDown() {
  if (time > 0) {
    time -= 1;
  }
}

module.exports = Timer;