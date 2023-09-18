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
const scoreShower = function (score) {
  document.querySelector('.score').textContent = score;
};
const guessShower = function (guess) {
  document.querySelector('.guess').textContent = guess;
};
document.querySelector('.check').addEventListener('click', function () {
  let inputguess = Number(document.querySelector('.guess').value);
  if (!inputguess) {
    messageShower('Enter Number');
  } else if (inputguess == guess) {
    messageShower('Correct Number');
    numberShower(guess);
    if (score > highscore) {
      highscore = score;
      highScore(highscore);
    } else {
      highscore = highscore;
      highScore(highscore);
    }
  } else if (inputguess !== guess) {
    if (score > 1) {
      messageShower(inputguess > guess ? 'too high' : 'too low');
      score--;
    } else {
      messageShower('You Lost');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guess = Math.trunc(Math.random() * 20 + 1);
  numberShower('?');
  scoreShower(score);
  guessShower('');
});
