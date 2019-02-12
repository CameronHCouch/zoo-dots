
class Timer {
  constructor(){
    this.start = Date.now();
    this.current = 60;
  }

  draw(ctx) {
    ctx.clearRect(5,5,200,50)
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Time " + this.current, 75, 50);
    this.countDown();
  }

  countDown() {
    if (this.current > 0) {
      this.current = 60 - Math.floor((Date.now() - this.start) / 1000)
    }
  }
}
export default Timer;