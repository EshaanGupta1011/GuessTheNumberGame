'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess == number) {
    displayMessage('Congratulations !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    let highscore = (document.querySelector('.highscore').textContent = score);
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else document.querySelector('.message').textContent = 'You lost the game';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  if (score > highscore) {
    highscore = score;
  }
});
