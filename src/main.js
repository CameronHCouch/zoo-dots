// const GameBoard = require('./game_board');
// const Game = require('./game.js');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zoo-canvas");
  canvas.width = 480;
  canvas.height = 640;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'orange';
  ctx.strokeStyle = "black";
  ctx.fillRect(0, 0, 480, 640);
  ctx.clearRect(0, 0, 480, 640);
  ctx.strokeRect(0, 0, 480, 640);
})

console.log("hiya")