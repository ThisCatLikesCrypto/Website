function rollDice() {
  var dice1 = document.getElementById('dice1');
  var dice2 = document.getElementById('dice2');

  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  if(roll1>roll2){
    var winner = "Player 1 Wins!";
  }
  else if(roll2>roll1){
    var winner = "Player 2 Wins!";
  }
  else {
    var winner = "Draw!";
  }
  document.getElementById("result").innerHTML = winner;
  dice1.innerHTML = roll1;
  dice2.innerHTML = roll2;
}