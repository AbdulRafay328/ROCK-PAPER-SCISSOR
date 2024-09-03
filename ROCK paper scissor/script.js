let userscore = 0;
let compscore = 0;
let usersscore = document.querySelector("#userscore");
let compsscore = document.querySelector("#compscore");
const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#btn");
let resbutton = document.querySelector(".resbtn");

let compchoice = () => {
  let choices = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
};

let drawgame = () => {
  msg.innerText = "GAME WAS DRAW";
  msg.style.backgroundColor = "#004E64";
};

let userwin = (userwin, compChoice, userchoice) => {
  if (userwin) {
    userscore++;
    usersscore.innerText = userscore;
    msg.innerText = `YOU WIN! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compsscore.innerText = compscore;
    msg.innerText = `YOU LOSE! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playgame = (userchoice) => {
  let compChoice = compchoice();

  if (userchoice === compChoice) {
    drawgame();
  } else {
    let isUserWin = true;
    if (userchoice === "rock") {
      isUserWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      isUserWin = compChoice === "scissor" ? false : true;
    } else {
      isUserWin = compChoice === "rock" ? false : true;
    }
    userwin(isUserWin, compChoice, userchoice);
  }
};

function restfunc() {
  console.log("reset");
  usersscore.innerText = 0;
  compsscore.innerText = 0;
}

resbutton.addEventListener("click", () => {
  restfunc();
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const userchoice = box.getAttribute("id");
    playgame(userchoice);
  });
});
