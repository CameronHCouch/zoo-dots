class Dot {
  constructor(pos) {
    this.dotWidth = 25;
    this.dotHeight = 25;
    this.species = this.randomSpecies();
    this.pos = pos;
    this.margin = 50;
    this.yStart = 150;
    this.xStart = 80;
    this.x = this.dotWidth + (this.margin * this.pos[0]) + this.xStart,
    this.y = this.dotHeight + (this.margin * this.pos[1]) + this.yStart
    this.image = '';
  }

  randomSpecies() {
    let speciesList = ['bear', 'frog', 'fox', 'gorilla', 'panda']
    return speciesList[Math.floor(Math.random() * speciesList.length)];
  }

  draw(ctx) {
    let img = new Image(25, 25);
    img.onload = () => {
      ctx.beginPath();
      // ctx.arc(
        //   this.dotWidth + (this.margin * this.pos[0]) + this.xStart, 
        //   this.dotWidth + (this.margin * this.pos[1]) + this.xStart, 
        //   12.5, 0, 2 * Math.PI, true
        // );
      ctx.drawImage(
        img,
        this.dotWidth + (this.margin * this.pos[0]) + this.xStart,
        this.dotHeight + (this.margin * this.pos[1]) + this.yStart,
        this.dotWidth,
        this.dotHeight,
        );
        ctx.closePath();
        ctx.fill();
      }
    img.src = `./assets/${this.species}.png`;
  }
}

export default Dot;