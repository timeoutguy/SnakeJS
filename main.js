// Definindo a posição inicial da cobra. o Y é 150 para todas as partes inicias. Já o 
// X deve ser -10px para a esquerda pois a cabeça começa no X = 150 

let snake = [
  { x: 150, y: 150 }, 
  { x: 140, y: 150 }, 
  { x: 130, y: 150 }, 
  { x: 120, y: 150 }, 
  { x: 110, y: 150 }
]

let dx = 10;
let dy = 0;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d')

let foodX = randomTen(0, canvas.width - 10);
let foodY = randomTen(0, canvas.height - 10);

main();

document.addEventListener("keydown", changeDirection)

function drawSnakePart(snakePart) {
  ctx.fillStyle = 'lightgreen';
  ctx.strokestyle = 'darkgreen';
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10)
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function advanceSnake(){
  const head = { x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  snake.pop();
}

function clearCanvas() {
  ctx.fillStyle = 'white';
  ctx.strokestyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function main(){
  setTimeout(() => {
    clearCanvas();
    drawFood();
    advanceSnake();
    drawSnake()
    main();
  }, 100);
}

function changeDirection(event) {
  const LEFT_KEY = 37;  
  const RIGHT_KEY = 39;  
  const UP_KEY = 38;  
  const DOWN_KEY = 40; 
  
  const keyPressed = event.keyCode;

  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if(keyPressed === LEFT_KEY && !goingRight){
    dx = -10;
    dy = 0;
  }
  if(keyPressed === UP_KEY && !goingDown){
    dx = 0;
    dy = -10;
  }
  if(keyPressed === RIGHT_KEY && !goingLeft){
    dx = 10;
    dy = 0;
  }
  if(keyPressed === DOWN_KEY && !goingUp){
    dx = 0;
    dy = 10;
  }
}

function randomTen(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function createFood(){
  foodX = randomTen(0, canvas.width - 10);
  foodY = randomTen(0, canvas.height - 10);

  snake.forEach(function isFoodOnSnake(part) {
    const foodIsOnSnake = part.x == foodX && part.y == foodY;
  
    if(foodIsOnSnake){
      createFood();
    }
  })
}



function drawFood(){
  ctx.fillStyle = 'red';
  ctx.strokestyle = 'darked';
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}
