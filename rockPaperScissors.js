let choices = document.querySelectorAll(".choice")
let winscoreU = document.querySelector("#win-scoreU")
let winscoreC = document.querySelector("#win-scoreC")
let message = document.querySelector(".mess")

let userScore = 0;
let CompScore = 0;

gameDraw = () => {
   message.innerText = 'Game was draw. Play again!';
   message.style.backgroundColor = "#081b31";
}

showWinner = (userWin, userChoice, compChoice) => {
   if (userWin) {
      userScore++;
      winscoreU.innerText = userScore;
      message.innerText = `You won the game !! ${userChoice} beats ${compChoice} .`
      message.style.backgroundColor = "#081b31";
      message.style.color = "white";
      message.style.borderRadius = "10px";
   } else {
      CompScore++;
      winscoreC.innerText = CompScore;
      message.innerText = `You lost !! ${compChoice} beats ${userChoice} .`
      message.style.backgroundColor = "#081b31";
      message.style.color = "white";
      message.style.borderRadius = "10px";

   }
}

const getCompChoice = () => {
   const options = ['rock', 'paper', 'scissors'];
   const randIndx = Math.floor(Math.random() * 3);

   return options[randIndx];
}

const playGame = (userChoice) => {
   let compChoice = getCompChoice();
   let userWin = true;
   if (userChoice === compChoice) {
      gameDraw();
   } else {
      if (userChoice === 'rock') {
         userWin = compChoice === 'paper' ? false : true;
      }
      else if (userChoice === 'scissors') {
         userWin = compChoice === 'rock' ? false : true;
      }
      else {
         userWin = compChoice === 'scissors' ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
   }
}

choices.forEach((choice) => {
   let ids = choice.getAttribute("id");
   console.log(ids)
   choice.addEventListener("click", () => {
      const userChoice = ids;
      console.log(userChoice, "is clicked.")
      choice.classList.add("clicked")
      setTimeout(() => {
         choice.classList.remove('clicked');
      }, 100); // 0.1 seconds  
      playGame(userChoice);
   })
})
