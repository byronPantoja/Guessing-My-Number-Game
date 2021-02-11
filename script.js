'use strict';

const number = Math.trunc(Math.random()*20)+1;
//displaying the answer number for development purposes
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = ' 🥳 You got it!!!';
  } else if ( guess > number || guess > 20 ) {
    document.querySelector('.message').textContent = ' 🔭 Too High!';
  } else if ( guess < number ) {
    document.querySelector('.message').textContent = ' 🕳 Too low';
  }
});