let blocksize = 25, rows = 20, cols =20,snakeX = blocksize *2,snakeY = blocksize *10,foodX,foodY, velocityX = 0, velocityY = 0,snakeBody = [];
let gameOver = false;
window.onload = function () {
    const board = document.getElementById('board');
    board.height = blocksize * rows;
    board.width = blocksize * cols;
    context = board.getContext("2d");

    document.addEventListener('keydown',changeDirection)
    placeFood()
    setInterval(update, 150);
}
function update(){
    if (gameOver){
        return;
    }
    context.fillStyle = '#2A4A2F ';
    context.fillRect(0,0,board.width, board.height)
    if (snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }
    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = '#FF4136 ';
    context.fillRect(foodX,foodY,blocksize,blocksize)
    context.fillStyle = '#65C2E8 ';
    snakeX += velocityX * blocksize;
    snakeY += velocityY *blocksize;
    context.fillRect(snakeX,snakeY,blocksize,blocksize)
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blocksize, blocksize);
    }
    if( snakeX <0 || snakeX> cols * blocksize || snakeY <0 || snakeY >rows*blocksize){
        gameOver = true;
        alert("game over")
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}
function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1; 
    }
    if(e.code == "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1; 
    }
    if(e.code == "ArrowLeft" &&velocityX != 1){
        velocityX = -1;
        velocityY = 0; 
    }
    if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0; 
    }
}
function placeFood(){
    foodX = Math.floor(Math.random()*cols)*blocksize;
    foodY = Math.floor(Math.random()*rows)*blocksize;
}
