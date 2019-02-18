
class Timer {
  constructor(){
    this.start = Date.now();
    this.time = 10;
    this.startTime = 10;
  }

  draw(ctx) {
    ctx.clearRect(5,5,200,50)
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Time " + this.time, 75, 50);
    this.countDown();
  }

  countDown() {
    if (this.time > 0) {
      this.time = this.startTime - Math.floor((Date.now() - this.start) / 1000)
    }
  }

  reset() {
    this.startTime = 10;
    this.time = 10;
  }
}
export default Timer;