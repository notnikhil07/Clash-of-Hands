let userScore = 0;
let comScore = 0;

const userScorePara = document.querySelector("#user_score");
const comScorePara = document.querySelector("#comp_score");
const compChoices = document.querySelectorAll(".comp_choices");
const choices = document.querySelectorAll(".choice");
const pickBtn = document.querySelector(".select_button");
let selectedCompChoiceIndex = -1;
let selectedChoiceIndex = -1;
const showWinner = (UserWin) => {
  if (UserWin) {
    console.log("S: ", selectedChoiceIndex);
    userScore++;
    userScorePara.innerText = userScore;
    pickBtn.innerText = "You Win!";
    pickBtn.style.backgroundColor = "Green";
  } else {
    comScore++;
    comScorePara.innerText = comScore;
    pickBtn.innerHTML = "You Loose!";
    pickBtn.style.backgroundColor = "Red";
  }
};

const options = [1, 2, 3];
let comIndex = -1;

const genCompChoice = () => {
  const randIdx = Math.floor(Math.random() * 3);
  // setTimeout(() => {
  compChoices[randIdx].style.transform = "translatex(100px)";
  setTimeout(() => {
    compChoices[randIdx].style.transform = "translatex(0px)";
  }, 500);
  // }, 200);

  comIndex = randIdx;
  return options[randIdx];
};

const playGame = (userChoice) => {
  setTimeout(() => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if (userChoice == compChoice) {
      pickBtn.innerText = "Game Draw";
      pickBtn.style.backgroundColor = "grey";
    } else {
      let UserWin = true;
      if (userChoice == "1") {
        UserWin = compChoice == "2" ? false : true;
      } else if (userChoice == "2") {
        UserWin = compChoice == "3" ? false : true;
      } else if (userChoice == "3") {
        UserWin = compChoice == "1" ? false : true;
      }
      showWinner(UserWin);
    }
  }, 300);
};

choices.forEach((choice, index) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    choice.style.transform = "translatex(-100px)";
    setTimeout(() => {
      choice.style.transform = "translatex(0px)";
    }, 500);

    // console.log("SELECTED CHOICE", index)
    selectedChoiceIndex = index;
    const userChoice = choice.getAttribute("value");
    playGame(userChoice);
  });
});
