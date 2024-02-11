let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "TIE UP";
    } else if (computerMove === "paper") {
      result = "YOU LOST AGAINST PC";
    } else if (computerMove === "scissors") {
      result = "YOU WIN AGAINST PC";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "YOU WIN AGAINST PC";
    } else if (computerMove === "paper") {
      result = "TIE UP";
    } else if (computerMove === "scissors") {
      result = "YOU LOST AGAINST PC";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "YOU LOST AGAINST PC";
    } else if (computerMove === "paper") {
      result = "YOU WIN AGAINST PC";
    } else if (computerMove === "scissors") {
      result = "TIE UP";
    }
  }

  if (result === "YOU WIN AGAINST PC") {
    score.wins += 1;
  } else if (result === "YOU LOST AGAINST PC") {
    score.losses += 1;
  } else if (result === "TIE UP") {
    score.ties += 1;
  }

  showResult(result, playerMove, computerMove);

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();

}

const resultZone = document.querySelector(".result-zone");
const mainScreen = document.querySelector(".main-screen");
const winnerScreen = document.querySelector(".winner-screen");
const startButtons = document.querySelector(".startButtons");
const winText = document.querySelector("#win-text");
const lostText = document.querySelector("#lost-text");
const tieText = document.querySelector("#tie-text");
const subText = document.querySelector(".sub-text");
const userRock = document.querySelector("#user-rock");
const pcRock = document.querySelector("#pc-rock");
const userPaper = document.querySelector("#user-paper");
const pcPaper = document.querySelector("#pc-paper");
const userScissor = document.querySelector("#user-scissors");
const pcScissor = document.querySelector("#pc-scissors");
const userIcon = document.querySelector(".user-side-icon");
const pcIcon = document.querySelector(".pc-side-icon");

function showResult(result, playerMove, computerMove) {
  startButtons.style.display = "none";
  resultZone.style.display = "flex";

  if (result === "YOU WIN AGAINST PC") {
    lostText.style.display = "none";
    tieText.style.display = "none";
    replayBtn.style.display = "none";

    winText.style.display = "block";
    subText.style.display = "block";
    playBtn.style.display = "block";
    nextBtn.style.display = "inline";
    updateResultSidesImg(playerMove, computerMove);

  } else if (result === "TIE UP") {
    winText.style.display = "none";
    lostText.style.display = "none";
    subText.style.display = "none";
    playBtn.style.display = "none";
    nextBtn.style.display = "none";

    tieText.style.display = "block";
    replayBtn.style.display = "block";
    updateResultSidesImg(playerMove, computerMove);

  } else if (result === "YOU LOST AGAINST PC") {
    winText.style.display = "none";
    tieText.style.display = "none";
    replayBtn.style.display = "none";
    nextBtn.style.display = "none";

    lostText.style.display = "block";
    subText.style.display = "block";
    playBtn.style.display = "block";

    updateResultSidesImg(playerMove, computerMove);
    
  }
}

const updateResultSidesImg = (playerMove, computerMove) => {
  if (playerMove === 'rock') {
    userRock.style.display = "block";
    userPaper.style.display = "none";
    userScissor.style.display = "none";
  }else if(playerMove === 'paper'){
    userRock.style.display = "none";
    userPaper.style.display = "block";
    userScissor.style.display = "none";
  }else if(playerMove === 'scissors'){
    userRock.style.display = "none";
    userPaper.style.display = "none";
    userScissor.style.display = "block";
  }

  if(computerMove === 'rock'){
    pcRock.style.display = "block";
    pcPaper.style.display = "none";
    pcScissor.style.display = "none";
  }else if(computerMove === 'paper'){
    pcRock.style.display = "none";
    pcPaper.style.display = "block";
    pcScissor.style.display = "none";
  }else if(computerMove === 'scissors'){
    pcRock.style.display = "none";
    pcPaper.style.display = "none";
    pcScissor.style.display = "block";
  }
}   

function updateScoreElement() {
  document.querySelector(".computerScore").innerHTML = `${score.losses}`;
  document.querySelector(".yourScore").innerHTML = `${score.wins}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  modal.show();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

const playAgain = () => {
  startButtons.style.display = "block";
  resultZone.style.display = "none";
  mainScreen.style.display = "block";
  winnerScreen.style.display = "none";
};

const nextHandle = () => {
  mainScreen.style.display = "none";
  winnerScreen.style.display = "block";
  nextBtn.style.display = "none";
};

const playBtn = document.querySelector(".playBtn");
const replayBtn = document.querySelector(".replayBtn");
const winnerPlayBtn = document.querySelector(".winnerPlayBtn");
const nextBtn = document.querySelector(".next-btn");

replayBtn.addEventListener("click", playAgain);
playBtn.addEventListener("click", playAgain);
winnerPlayBtn.addEventListener("click", playAgain);
nextBtn.addEventListener("click", nextHandle);
