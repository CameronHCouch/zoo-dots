
class Timer {
  constructor(){
    this.time = 60;
  }

  drawTimer() {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Time " + time, 75, 50);
    let cancel = setInterval(countDown, 1000);
  }

  countDown() {
    if (time > 0) {
      time -= 1;
    }
  }
}
export default Timer;