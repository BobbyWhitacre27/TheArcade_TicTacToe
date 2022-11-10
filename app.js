// Bobby's psuedocode to write the Tic Tac Toe game:

// 1. Players enter names and they are saved

// 2. A random player is assigned to go first, X's or O's is assigned at this time

// 3. Players can play their move by clicking empty spaces on the board

// 4. Player alternate moves

// 5. If 3 in a row === A WINNER

// 6. If all spaces full and no 3 in a row === A TIE

// 7. Reset button clears the board to start new

// ---------------

// 1. Players enter names and they are saved

      // Need variables, an empty array, funcitons, and eventlistener for players to submit their names


var p1button = document.getElementById("p1button")
var p1div = document.getElementById("p1div")

var p2button = document.getElementById("p2button")
var p2div = document.getElementById("p2div")

let names = []
let namesEntered = false

function p1namefunc(){
  var p1name = document.getElementById("p1input").value
  p1div.textContent = `Player 1: ${p1name}`
  return names.push(p1name)
}

function p2namefunc(){
  var p2name = document.getElementById("p2input").value
  p2div.textContent = `Player 2: ${p2name}`
  return names.push(p2name)
}

p1button.addEventListener("click", p1namefunc)
p2button.addEventListener("click", p2namefunc)

// 2. A random player is assigned to go first, X's or O's is assigned at this time

  // Random player assigned when "Click Here to Start Button" is clicked

var startButton = document.getElementById("startButton")

function randomPlayerfunc(){
  
  console.log(names)
  let firstplayer = names[Math.floor(Math.random()*names.length)]
  console.log(firstplayer)
  randompdiv.textContent = `${firstplayer} goes first! ${firstplayer} will be X`
 }

startButton.addEventListener("click", randomPlayerfunc)

// 3. Players can play their move by clicking empty spaces on the board

// Need to create some variables to select

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

// Need to define winning matches

const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

// Need an array to store the users moves in. 

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Have the game begin once users have entered their names

startButton.addEventListener("click", initializeGame)

function initializeGame() {
  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  running = true;
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if(options[cellIndex] != "" || !running){
    return;
  }
  updateCell(this, cellIndex);
  checkWinner();
}
function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

// 4. Player alternate moves
function changePlayer(){
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  randompdiv.textContent = `${currentPlayer}'s turn`;
}

// 5. & 6. If 3 in a row "winner", if 3 in a tie then "draw" 
function checkWinner(){
let roundWon = false;
for (let i=0; i<winConditions.length; i++){
  const condition = winConditions[i];
  const cellA = options[condition[0]];
  const cellB = options[condition[1]];
  const cellC = options[condition[2]];

  if(cellA == "" || cellB =="" || cellC ==""){
    continue;
  }
  if(cellA == cellB && cellB == cellC){
    roundWon = true;
    break;
  }
}
if(roundWon){
  randompdiv.textContent = `${currentPlayer} wins!`
  running = false;
}else if(!options.includes("")){
  randompdiv.textContent = 'Draw!'
  running = false;
}
else{
  changePlayer();
}
}

// 7. reset button clears the board

function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  let firstplayer = names[Math.floor(Math.random()*names.length)]
  randompdiv.textContent = `${firstplayer} goes first! ${firstplayer} will be X`
  cells.forEach(cell => cell.textContent = "");
  running = true;
}


