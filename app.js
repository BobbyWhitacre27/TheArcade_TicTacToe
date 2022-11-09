// Bobby's psuedocode to write the Tic Tac Toe game:

// 1. Players enter names and they are saved

// 2. A random player is assigned to go first, X's or O's is assigned at this time

// 3. Players can play their move by clicking empty spaces on the board

// 4. Player alternate moves

// 5. If 3 in a row === A WINNER

// 6. If all spaces full and no 3 in a row === A TIE

// 7. Reset button clears the board to start new

// ------- Time to start coding! --------



// 1. Players enter names and they are saved

      // Need variables, an empty array, funcitons, and eventlistener for players to submit their names



var p1button = document.getElementById("p1button")
var p1div = document.getElementById("p1div")

var p2button = document.getElementById("p2button")
var p2div = document.getElementById("p2div")

let names = []

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

// It works!

// ----

// 2. A random player is assigned to go first, X's or O's is assigned at this time

  // Random player assigned when "Click Here to Start Button" is clicked

var startButton = document.getElementById("startButton")

function randomPlayerfunc(){
  console.log(names)
  let randomName = names[Math.floor(Math.random()*names.length)]
  console.log(randomName)
  randompdiv.textContent = `${randomName} goes first! ${randomName} will be X`
 }


startButton.addEventListener("click", randomPlayerfunc)

// It works!

// ----

// 3. Players can play their move by clicking empty spaces on the board

const cells = document.querySelectorAll(".cell");

const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

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

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

//render()

startButton.addEventListener("click", initializeGame)

function initializeGame() {

  cells.forEach(cell => cell.addEventListener("click", cellClicked));
  restartBtn.addEventListener("click", restartGame);
  //statusText.textContent = `${currentPlayer}'s turn`;
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
function changePlayer(){
  currentPlayer = (currentPlayer == "X") ? "O" : "X";
  randompdiv.textContent = `${currentPlayer}'s turn`;
}
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
  statusText.textContent = `${currentPlayer} wins!`
  running = false;
}else if(!options.includes("")){
  statusText.textContent = 'Draw!'
  running = false;
}
else{
  changePlayer();
}
}
function restartGame(){
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
}


