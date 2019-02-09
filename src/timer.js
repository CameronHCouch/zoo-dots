
class Timer {
  constructor(){
    this.time = 60;
  }

  draw(ctx) {
    ctx.font = "30px Open Sans";
    ctx.fillStyle = 'black';
    ctx.fillText("Time " + this.time, 75, 50);
    let cancel = setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    if (this.time > 0) {
      this.time -= 1;
    }
  }
}
export default Timer;

//TO DO: update timer properly;
// call this.draw again?