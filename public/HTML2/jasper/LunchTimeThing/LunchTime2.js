var numOfSomethings = 1;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function doSomethin() {
  button = document.getElementById("somethingButto");
  numOfSomethings++;
  button.style.backgroundColor = "lightblue";
  button.style.width = (numOfSomethings*20).toString() + "px";
  button.style.height = (numOfSomethings*250).toString() - "px";
}

function Calcukation() {
  var Calculation = getRandomInt(10, 600);
  var Calculation2 = getRandomInt(10,600);
  var Calculation0 = Calculation + Calculation2;
  alert("number is " +Calculation0);
}
function th() {
  alert("the answer was button");
}