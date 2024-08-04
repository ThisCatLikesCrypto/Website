let msg="It's just javascript, bro"
document.getElementById("mesage").innerHTML=msg;

var data = "";
async function getCO2API() {
    const response = await fetch('https://api.carbonintensity.org.uk/intensity');
    const stuff = await response.json();
    console.log(stuff);
    return stuff;
}


let messages = [
  "It's just JavaScript, bro",
  "Bet you wish you could make this, huh?",
  "What? Never seen a custom new tab before?",
  "Oh, this? It's just web dev",
  "Imagine not knowing how to code, couldn't be me!",
  "Aww sweetie, you don't know what JS is?",
  "haha compiler go brrrr",
  "data",
  "Looks like some intensity data slipped in there, didn't it?"
];

let currentIndex = 0;
const messageElement = document.getElementById("mesage");

function msgs(){
  if (messages[currentIndex] === "data") {
    getCO2API().then(function(result){
      data = result['data'][0]['intensity']['actual'];
      if (data === null) {
        let dformat = result['data'][0]['intensity']['forecast'] + 'gCO₂/kWh';
        messageElement.innerHTML = dformat;
      } else {
        messageElement.innerHTML = data + 'gCO₂/kWh';
      }
      
    });
  } else {
    messageElement.innerHTML = messages[currentIndex];
  }
  currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(msgs, 3000);