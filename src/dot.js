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
    this.color = '';
    this.active = false;
  }

  randomSpecies() {
    let speciesList = ['bear', 'frog', 'fox', 'gorilla', 'panda']
    return speciesList[Math.floor(Math.random() * speciesList.length)];
  }

  activate() {
    this.active = true;
  }

  speciesColor(species) {
    switch(species){
      case 'bear':
        return 'rgba(155, 104, 66, 1)';
      case 'frog':
        return 'rgba(142, 203, 30, 1)';
      case 'fox':
        return 'rgba(234, 135, 0, 1)';
      case 'gorilla':
        return 'rgba(59, 69, 77, 1)';
      case 'panda':
        return 'rgba(255, 255, 255, 1)'
      default:
        return ''
    }
  }

  draw(ctx) {
    let img = new Image(25, 25);
    img.onload = () => {
      if (this.active) {
        this.color = this.speciesColor(this.species)
        // rgba colors increase in opacity each time grid is re-rendered
        // need to clear board each time?
        ctx.beginPath();
        ctx.fillStyle = this.color.slice(0, this.color.length-2) + '0.6)';
        ctx.arc(this.x + 12.5, this.y + 12.5, 19, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.7)';
        ctx.arc(this.x + 12.5, this.y + 12.5, 17.75, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.8)';
        ctx.arc(this.x + 12.5, this.y + 12.5, 16.5, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x + 12.5, this.y + 12.5, 14, 0, 2 * Math.PI);
        ctx.fill();
      }
      ctx.beginPath();
      // ctx.arc(
        //   this.dotWidth + (this.margin * this.pos[0]) + this.xStart, 
        //   this.dotWidth + (this.margin * this.pos[1]) + this.xStart, 
        //   12.5, 0, 2 * Math.PI, true
        // );
      ctx.drawImage(
        img,
        this.x,
        this.y,
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