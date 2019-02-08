class Dot {
  constructor(ctx) {
    this.ctx = ctx;
    this.image = new Image(25, 25);
    this.image.src = `./assets/${this.randomImage()}.png`;
    this.dotWidth = 25;
    this.dotHeight = 25;
  }

  randomImage() {
    return IMAGES[Math.floor(Math.random() * IMAGES.length)];
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.drawImage(
      image,
      dotWidth + (50 * x) + xStart,
      dotWidth + margin * y + yStart,
      dotWidth,
      dotHeight
    );
    this.ctx.closePath();
    this.ctx.fill();
  }
}

IMAGES = {
  1: 'bear',
  2: 'frog',
  3: 'fox',
  4: 'gorilla',
  5: 'panda',
}

module.exports = Dot;