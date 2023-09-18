'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
let score = 20;
let highscore = 0;
// document.querySelector('.guess').value = '20';
document.querySelector('.check').addEventListener('click', function () {
  const guessing = Number(document.querySelector('.guess').value);
  if (guessing === secretNumber) {
    document.querySelector('.message').textContent = 'wow correct';
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.color = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessing !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessing > secretNumber ? 'oov too high' : 'oov too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
    }
  }

  //   else if (guessing > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'oov too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'oov lost the game';
  //     }
  //   } else if (guessing < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'ooov too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'oov lost the game';
  //     }
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.color = '#222';
});

// instead of using difernrt values in the mesage textcontent create a fumcntion to use it oru functionmke panna nu i mean intha maari
const displayMessage = function () {
  document.querySelector('.message').textContent = message;
};
