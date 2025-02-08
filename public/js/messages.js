let msg="It's just javascript, bro"
document.getElementById("mesage").innerHTML=msg;

let messages = [
  "It's just JavaScript, bro",
  "Bet you wish you could make this, huh?",
  "What? Never seen a custom new tab before?",
  "Oh, this? It's just web dev",
  "Imagine not knowing how to code, couldn't be me!",
  "Aww sweetie, you don't know what JS is?",
  "Looks like some intensity data slipped in there, didn't it?"
];

let currentIndex = 0;
const messageElement = document.getElementById("mesage");

function msgs(){
  messageElement.innerHTML = messages[currentIndex];
  currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(msgs, 3000);