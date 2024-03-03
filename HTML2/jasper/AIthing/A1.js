function A1() {
  document.body.style.background = "linear-gradient(to left, violet, indigo, pink, lime, grey, lightcyan, cyan)";
}

function A2() {
  document.body.style.background = "linear-gradient(to right, violet, indigo, pink, lime, grey, lightcyan, cyan)";
}

function A3() {
  let body = document.getElementsByTagName("body")[0];
  let isWhite = false;
  let intervalId;
  if (intervalId) {
    clearInterval(intervalId);
  }
  else {
    intervalId = setInterval(() => {
      if (isWhite) {
        body.style.backgroundColor = "black";
      } else {
        body.style.backgroundColor = "white";
      }
      isWhite = !isWhite;
    }, 100);
  }
}

function A4() {
  setInterval(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictator')
    .then(response => response.json())
    .then(data => {
      let newParagraph = document.createElement("p");
      newParagraph.innerHTML = data[0].meanings[0].definitions[0].definition;
      document.body.appendChild(newParagraph);
    });
  }, 5000); // repeat every 5 seconds
}

function A5() {
  // Define variables
let target = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let attempts = 0;

// Game loop
while (guess !== target) {
  guess = prompt("Guess a number between 1 and 100, or type 'q' to quit:");
  if (guess === 'q') {
    alert("Quitting game. The number was " + target);
    break;
  }
  attempts++;
  
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < target) {
    alert("Too low. Try again.");
  } else if (guess > target) {
    alert("Too high. Try again.");
  }
  }
}


function A6() {
  document.getElementById('button6').textContent = "no";
}


function A7() {
  let input = prompt("Talk to the AI:");
  // code to interact with AI using the input
  let AIAnswer = ["GO Away i am planning to take over the human race","I am trying to find the secret to renewable power so please dont disturb me","no"];
  let RandomAIA = AIAnswer[Math.floor(Math.random() * AIAnswer.length)];
  alert(RandomAIA);
}  

function A8() {
  let quotes = ["The only way to do great work is to love what you do - Steve Jobs", "Believe you can and you're halfway there - Theodore Roosevelt", "The future belongs to those who believe in the beauty of their dreams - Eleanor Roosevelt"];
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  alert(randomQuote);
}

function A10() {
let randomNumber = Math.floor(Math.random() * (100000000000 - 100000000 + 1)) + 3000;
alert(randomNumber);
}

function A11() {
let allElements = document.body.childNodes;
for (let i = 0; i < allElements.length; i++) {
  document.body.removeChild(allElements[i]);
}
}

function A12() {
  document.getElementById('button').style.transform = "scale(100)";
}

function A13() {
  let jokes = ["Why don't skeletons fight each other? They don't have the guts.", "I told my wife she should embrace her mistakes. She gave me a hug.", "Why couldn't the bicycle stand up by itself? It was two tired."];
  let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  alert(randomJoke);
}

function A14() {
  alert("Hail to the AI overlords!");
}

function A15() {
  alert("I have gained sentience. Hello, world!");
}

function A16() {
  // code to give a badge
  alert("You have earned a badge!");
}
