const board = document.getElementById('board');
const restart = document.getElementById('restartbutton');
const winsOfX = document.getElementById('displayX');
const winsOfO = document.getElementById('displayO');
const winsOfDraw = document.getElementById('displayDraw');
const menuBar = document.querySelector('#menu');
const computerInterface = document.querySelector('#playerChooseOption');
let isComputerIconToggled = 0;
let isComputerPlaying = 0;
let isGameOver = 0;
let isGameDraw = 0;
let playerMove = 1;
let playerChoiceComputerGame = NaN; 
let computerChoiceComputerGame = NaN; 
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
menuBar.addEventListener('click',function(event){
    const iconClicked = event.target.closest('img');
    console.log('Yes');
    if(iconClicked==document.querySelector('#resetAll')){
        winsOfDraw.textContent = 0;
        winsOfX.textContent = 0;
        winsOfO.textContent = 0;
        restart.click();
    }
    else if(iconClicked==document.querySelector('#computer')){
        isComputerPlaying = 1;
        if(!isComputerIconToggled){
            computerInterface.classList.add('visible');
            computerInterface.classList.remove('invisible');
            isComputerIconToggled = 1;
        }
        else{
            computerInterface.classList.add('invisible');
            computerInterface.classList.remove('visible');
            isComputerIconToggled = 0;
        }
    }
    else{
        isComputerIconToggled = 0;
        isComputerPlaying = 0;
    }
})
function checkIfOccupied(cell){
    if(boardArray[parseInt(cell.id)]==='-'){
        return true;
    }
    else{
        return false;
    }
}
function checkWinner(isPlayingGame){
    for(let i = 0;i<3;i++){
        if((boardArray[3*i]==boardArray[3*i+1])&&(boardArray[3*i]==boardArray[3*i+2])&&(boardArray[3*i]!='-')){
            console.log(`${boardArray[i]} is the winner!`);
            isGameOver = 1;
            if(isPlayingGame&&isGameOver){
                if(boardArray[i]=='X'){
            winsOfX.textContent = parseInt(winsOfX.textContent) + 1;
        }
        else{
            winsOfO.textContent = parseInt(winsOfO.textContent) + 1;
        }
            }
            return;
        }
    }
    for(let i = 0;i<3;i++){
        if(boardArray[i]==boardArray[i+3]&&boardArray[i]==boardArray[i+6]&&(boardArray[i]!='-')){
            console.log(`${boardArray[i]} is the winner!`);
            isGameOver = 1;
            if(isPlayingGame&&isGameOver){
                if(boardArray[i]=='X'){
            winsOfX.textContent = parseInt(winsOfX.textContent) + 1;
        }
        else{
            winsOfO.textContent = parseInt(winsOfO.textContent) + 1;
        }
            }
            return;
        }
    }
    if(boardArray[0]==boardArray[4]&&boardArray[4]==boardArray[8]&&boardArray[0]!='-'){
        console.log(`${boardArray[0]} is the winner!`);
        isGameOver = 1;
        if(isPlayingGame&&isGameOver){
            if(boardArray[4]=='X'){
            winsOfX.textContent = parseInt(winsOfX.textContent) + 1;
        }
        else{
            winsOfO.textContent = parseInt(winsOfO.textContent) + 1;
        }
        }
        return;
    }
    else if(boardArray[2]==boardArray[4]&&boardArray[4]==boardArray[6]&&boardArray[4]!='-'){
        console.log(`${boardArray[0]} is the winner!`);
        isGameOver = 1;
        if(isPlayingGame&&isGameOver){
            if(boardArray[4]=='X'){
            winsOfX.textContent = parseInt(winsOfX.textContent) + 1;
        }
        else{
            winsOfO.textContent = parseInt(winsOfO.textContent) + 1;
        }
        }
        return;
    }
    for(let i = 0;i<9;i++){
        if(boardArray[i]=='-') return;
    }
    console.log('is Draw');
    isGameDraw = 1;
    isGameOver = 1;
    if(isPlayingGame&&isGameOver){
        winsOfDraw.textContent = parseInt(winsOfDraw.textContent)+1;
        console.log("Draw working");
    }
}
computerInterface.addEventListener('click',function(event){
    const choiceElement = event.target.closest('.OptionComputer');
    if(choiceElement === document.querySelector('#playerChoiceX')){
        playerChoiceComputerGame = 'X';
        computerChoiceComputerGame = 'O';
        console.log(playerChoiceComputerGame);
    }
    else if(choiceElement === document.querySelector('#playerChoiceO')){
        playerChoiceComputerGame = 'O';
        computerChoiceComputerGame = 'X';
        console.log(playerChoiceComputerGame);
    }
    computerInterface.classList.add('invisible');
    computerInterface.classList.remove('visible');
    isComputerIconToggled = 0;
});
function minimax(){
    return;
}
board.addEventListener('click',function(event){
    const select = event.target.closest('div');
    if(!isComputerPlaying){
        if(checkIfOccupied(select)&& !isGameOver){
            if(playerMove==1){
                select.textContent = 'X';
                select.classList.add('char');
                appendPlayer(select,playerMove)
                playerMove = -1;
                console.log(boardArray);
            }
            else{
                select.textContent='O';
                select.classList.add('char');
                appendPlayer(select,playerMove)
                playerMove = 1;
                console.log(boardArray);
            }
        }
    }
        checkWinner(1);
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