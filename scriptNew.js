// console.log(document.querySelector('#guessId').textContent);
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').textContent = 20;
// document.querySelector('.highscore').textContent = Number(10);
// console.log(document.querySelector('.highscore').value);
let guess = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const messageShower = function (messsage) {
  document.querySelector('.message').textContent = messsage;
};
const numberShower = function (number) {
  document.querySelector('.number').textContent = number;
};
const highScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};
// console.log(guess);
document.querySelector('.check').addEventListener('click', function () {
  let inputguess = Number(document.querySelector('.guess').value);
  if (!inputguess) {
    // document.querySelector('.message').textContent = 'Enter Number';
    messageShower('Enter Number');
  } else if (inputguess == guess) {
    // document.querySelector('.message').textContent = 'correct value';
    messageShower('Correct Number');
    // document.querySelector('.number').textContent = guess;
    numberShower(guess);
    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      highScore(highscore);
    } else {
      highscore = highscore;
      // document.querySelector('.highscore').textContent = highscore;
      highScore(highscore);
    }
  } else if (inputguess !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   inputguess > guess ? 'too high' : 'too low';
      messageShower(inputguess > guess ? 'too high' : 'too low');
      score--;
    } else {
      messageShower('You Lost');
    }
  }
  // else if (!inputguess == guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       inputguess > guess ? 'High Value' : 'low value';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //   }
  // }
  // else if (inputguess < guess) {
  //   document.querySelector('.message').textContent = 'too value';
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 'you lost the game';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guess = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.number').textContent = '?';
  numberShower('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
