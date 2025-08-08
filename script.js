const board = document.getElementById('board');
const restart = document.getElementById('restartbutton');
let isGameOver = 0;
let isGameDraw = 0;
let playerMove = 1;
let boardArray = ['-','-','-','-','-','-','-','-','-']

for(let i = 0;i<9;i++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `${i}`;
    board.appendChild(cell);
}
function appendPlayer(cell, playerMove){
    if(playerMove==1){
        boardArray[parseInt(cell.id)] = 'X';
    }
    else{
        boardArray[parseInt(cell.id)] = 'O';
    }
}
function checkIfOccupied(cell){
    if(boardArray[parseInt(cell.id)]==='-'){
        return true;
    }
    else{
        return false;
    }
}
function checkWinner(){
    for(let i = 0;i<3;i++){
        if((boardArray[3*i]==boardArray[3*i+1])&&(boardArray[3*i]==boardArray[3*i+2])&&(boardArray[3*i]!='-')){
            console.log(`${boardArray[i]} is the winner!`);
            isGameOver = 1;
            return;
        }
    }
    for(let i = 0;i<3;i++){
        if(boardArray[i]==boardArray[i+3]&&boardArray[i]==boardArray[i+6]&&(boardArray[i]!='-')){
            console.log(`${boardArray[i]} is the winner!`);
            isGameOver = 1;
            return;
        }
    }
    if(boardArray[0]==boardArray[4]&&boardArray[4]==boardArray[8]&&boardArray[0]!='-'){
        console.log(`${boardArray[0]} is the winner!`);
        isGameOver = 1;
        return;
    }
    else if(boardArray[2]==boardArray[4]&&boardArray[4]==boardArray[6]&&boardArray[4]!='-'){
        console.log(`${boardArray[0]} is the winner!`);
        isGameOver = 1;
        return;
    }
    for(let i = 0;i<9;i++){
        if(boardArray[i]=='-') return;
    }
    console.log('is Draw');
    isGameDraw = 1;
    isGameOver = 1;
}
function playerGameMode(){
    return;
}
function minimax(){
    return;
}
board.addEventListener('click',function(event){
    const select = event.target.closest('div');
    if(checkIfOccupied(select)&& !isGameOver){
        if(playerMove==1){
            select.textContent = 'X';
            select.classList.add('X');
            appendPlayer(select,playerMove)
            playerMove = -1;
            console.log(boardArray);
        }
        else{
            select.textContent='O';
            select.classList.add('O');
            appendPlayer(select,playerMove)
            playerMove = 1;
            console.log(boardArray);
        }
    }
    checkWinner();
    if(isGameOver){
        const gameRestartButton = document.getElementById('restart');
        gameRestartButton.classList.remove('invisble');
        gameRestartButton.classList.add('visible');
        // restart.classList.remove('invisble');
        // restart.classList.add('visible');
    }
})
restart.addEventListener('click', function(){
    for(let i = 0;i<9;i++){
        let selectCellForReset = document.getElementById(`${i}`)
        selectCellForReset.textContent = '';
        boardArray[i] = '-';
    }
    const gameRestartButton = document.getElementById('restart');
    gameRestartButton.classList.remove('visible');
    gameRestartButton.classList.add('invisible');
    // restart.classList.remove('visible');
    // restart.classList.add('invisible');
    isGameDraw = 0;
    isGameOver = 0;
    playerMove=1;
})