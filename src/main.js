
import Board from './game_board';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;

  const canvas2 = document.getElementById("zoo-canvas2");
  canvas2.width = 480;
  canvas2.height = 640;

  const ctx = canvas.getContext('2d');
  const ctx2 = canvas2.getContext('2d');
  let board = new Board(ctx, ctx2);
  let game = new Game(board, ctx);

  function draw(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    game.draw();
  }
  
  requestAnimationFrame(() => draw(ctx));

})