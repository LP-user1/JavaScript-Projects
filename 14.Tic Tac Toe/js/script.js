const boxes = document.querySelectorAll(".box");
const stsTxt = document.getElementById("status");
const restartBtn = document.getElementById("restart");

const winPos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let x = "X";
let o = "O";
let player = "X";
let gameRunning = false;
let currPlayer = x;
let options = ["", "", "", "", "", "", "", "", ""];

setTimeout(() => {
  init();
}, 2000);

function init() {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClick);
  });
  restartBtn.addEventListener("click", restartGame);
  stsTxt.textContent = `Player ' ${player} ' Your Turn`;
  gameRunning = true;
}

function playerChange() {
  player = (player == "X")? "O" : "X";
  currPlayer = (currPlayer ==x)? o : x;
  stsTxt.textContent = `Player ' ${player} ' Your Turn`;
}

function boxClick() {
  let indexVal = this.dataset.index;
  if (options[indexVal] != "" || !gameRunning) {
    return;
  }
  updatebox(this, indexVal);
  playerWin();
}

function playerWin() {
  let isWon = false;
  for (let i = 0; i < winPos.length; i++) {
    const cond = winPos[i];
    const box1 = options[cond[0]];
    const box2 = options[cond[1]];
    const box3 = options[cond[2]];
    if(box1 =="" || box2 =="" || box3 ==""){
      continue;
    }
    if(box1 == box2 && box2 == box3){
      isWon = true;
      boxes[cond[0]].classList.add('win');
      boxes[cond[1]].classList.add('win');
      boxes[cond[2]].classList.add('win');
    }
  }
  if(isWon){
    gameRunning = false;
    stsTxt.textContent=`Player ' ${player} ' has won the match..`;
  }else if(!options.includes("")){
    gameRunning = false;
    stsTxt.textContent="Game Draw!! .. Restart your Game ";
    boxes.forEach((box) => {
      box.classList.add('draw');
    });
    document.querySelector('.container').classList.add('gap');
  }
  else{
    playerChange();
  }
}

function updatebox(box, indexVal) {
  options[indexVal] = player;
  box.innerHTML = currPlayer;
}

function restartGame() {
  x = "X";
  o = "O";
  player = "X";
  gameRunning = true;
  currPlayer = x;
  options = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove('win');
    box.classList.remove('draw');
  });
  document.querySelector('.container').classList.remove('gap');
  stsTxt.textContent = `Player ' ${player} ' Your Turn`;
}
