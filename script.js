'use strict';

const number = Math.trunc(Math.random()*20)+1;
//displaying the answer number for development purposes
document.querySelector('.number').textContent = number;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';

  } else if (guess === number) {
    document.querySelector('.message').textContent = ' 🥳 You got it!!!';

  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > number ? ' 🔭 Too High!' : ' 🕳 Too low';
    score--;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = '🪓 You Lost.'
    document.querySelector('.score').textContent = 0;  
    }
  }
});