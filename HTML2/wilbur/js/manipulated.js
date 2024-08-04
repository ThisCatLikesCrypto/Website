var numOfSomethings = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

async function doNothing() {
  button = document.getElementById("nothingButton");
  for (i = 0; i < 20; i++) {
    await sleep(100);
    button.style.backgroundColor = randomChoice(["lightblue", "lightgreen", "yellow", "orange", "pink"]);
  }
  button.style.backgroundColor = "lightgrey";
}

function doSomething() {
  button = document.getElementById("somethingButton");
  numOfSomethings++;
  button.style.backgroundColor = "lightgrey";
  button.style.width = (numOfSomethings * 250).toString() + "px";
  button.style.height = (numOfSomethings * 20).toString() + "px";
}

function doReverse() {
  button = document.getElementById("somethingButton");
  numOfSomethings--;
  button.style.backgroundColor = "lightgrey";
  button.style.width = (numOfSomethings * 250).toString() + "px";
  button.style.height = (numOfSomethings * 20).toString() + "px";
}

async function main() {
  while (true) {
    await sleep(250);
    clicky = document.getElementById("noclick");
    clicky.style.color = randomChoice(["lightblue", "lightgreen", "yellow", "orange", "pink"]);
  }
}

main()