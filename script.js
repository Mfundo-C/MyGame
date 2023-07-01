const moves = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const gameResult = document.querySelector('.result');

rockBtn.addEventListener('click', function(){
 playGame('rock') 
}); 
paperBtn.addEventListener('click', function(){ 
playGame('paper') 
}); 
scissorsBtn.addEventListener('click', function() { playGame('scissors') 
});

rockBtn.addEventListener('click', function(){
 playGame('rock') 
}); 
paperBtn.addEventListener('click', function(){ 
playGame('paper') 
}); 
scissorsBtn.addEventListener('click', function() { playGame('scissors') 
});
function playGame(playerMove) {
  
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
 

  
  if (playerMove === computerMove) {
    gameResult.textContent = computerMove + '!' +" "+'It\'s a tie!';
  } else if (playerMove === 'rock' && computerMove === 'scissors' ||
             playerMove === 'paper' && computerMove === 'rock' ||
             playerMove === 'scissors' && computerMove === 'paper') {
    gameResult.textContent = computerMove + '!' +" "+ 'You win!';
  } else {
    gameResult.textContent = computerMove+ '!' +" "+ 'Computer wins!';
  }
};