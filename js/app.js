console.log("Tic Tac!");

const gameContainer = document.querySelector(".game-container");
const btn_X = document.querySelector(".btn-x");
const btn_O = document.querySelector(".btn-o");
// Start gameboard
startingGameBoard();

// Game board
function startingGameBoard() {
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    let circle = document.createElement("div");

    circle.classList.add("circle");
    let p = document.createElement("p");
    div.setAttribute("class", "tic-box");
    div.setAttribute("data-number", `${i}`);
    div.classList.add("display-x");
    // div.textContent = i + 1;

    // Add "X to grid"
    // div.textContent = "X";

    // Add circle to grid
    // div.appendChild(circle);
    gameContainer.appendChild(div);
  }
}

const gameBox = document.querySelectorAll(".tic-box");

gameContainer.addEventListener("click", e => {
  e.target.textContent = btn_X.textContent;
});

// btn_O.addEventListener("click", boxNumber);

function boxNumber(letter) {
  gameBox.forEach(num => {
    num.addEventListener("click", e => {
      const boxNum = e.currentTarget;
      boxNum.textContent = letter;
    });
  });
}

// boxNumber("O");

// document.body.style.backgroundColor = rndCol;
