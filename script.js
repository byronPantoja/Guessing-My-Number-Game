'use strict';

const number = Math.trunc(Math.random()*20)+1;
//displaying the answer number for development purposes
document.querySelector('.number').textContent = number;

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No Number');

  } else if (guess === number) {
    displayMessage(' 🥳 You got it!!!');

    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? ' 🔭 Too High!' : ' 🕳 Too low');
    score--;
    document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🪓 You Lost.');
    document.querySelector('.score').textContent = 0;  
    }
  }

});