// Definindo a posição inicial da cobra. o Y é 150 para todas as partes inicias. Já o 
// X deve ser -10px para a esquerda pois a cabeça começa no X = 150 

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d')

let snake = [
  { x: 150, y: 150 }, 
  { x: 140, y: 150 }, 
  { x: 130, y: 150 }, 
  { x: 120, y: 150 }, 
  { x: 110, y: 150 }
]

function drawSnakePart(snakePart) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'darkgreen';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)
}

function drawSnake() {
  console.log("to aaqui")
  snake.forEach(drawSnakePart);
}

drawSnake();