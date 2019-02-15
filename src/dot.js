class Dot {
  constructor(pos, sentinel) {
    this.dotWidth = 25;
    this.dotHeight = 25;
    this.speciesList = ['bear', 'frog', 'fox', 'gorilla', 'panda'];
    this.species = sentinel || this.randomSpecies();
    this.pos = pos;
    this.margin = 50;
    this.yStart = 150;
    this.xStart = 80;
    this.x = this.dotWidth + (this.margin * this.pos[0]) + this.xStart,
    this.y = this.dotHeight + (this.margin * this.pos[1]) + this.yStart
    this.image = '';
    this.color = '';
    this.active = false;
    this.destroy = false;
  }

  randomSpecies() {
    return this.speciesList[Math.floor(Math.random() * this.speciesList.length)];
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  markForRemoval() {
    this.active = false;
    this.destroy = true;
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
    if (this.speciesList.includes(this.species)){
      img.onload = () => {
        if (this.active) {
          this.drawHalo(ctx);
        } else {
          this.clearHalo(ctx);
        }
        ctx.beginPath();
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
    
    if (this.species === 'sentinel') {

    }
    }
    
  drawHalo(ctx){
    this.color = this.speciesColor(this.species)
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x + 12.5, this.y + 12.5, 14, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.8)';
    ctx.arc(this.x + 12.5, this.y + 12.5, 16.5, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.7)';
    ctx.arc(this.x + 12.5, this.y + 12.5, 17.75, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = this.color.slice(0, this.color.length - 2) + '0.6)';
    ctx.arc(this.x + 12.5, this.y + 12.5, 19, 0, 2 * Math.PI);
    ctx.fill();
  }

  clearHalo(ctx){
    ctx.clearRect(this.x - 12.5, this.y-12.5, 55, 55);
  }
}
    export default Dot;