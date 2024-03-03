function sayHello() {
  var name = document.getElementById("name").value;
  document.getElementById("greeting").innerHTML = "Hello " + name;
}
function changeTextSize() {
  var facttxt = document.getElementById("fun");
  facttxt.style.fontSize = "30px";
}

function changeBackground() {
  var colour = document.getElementById("colorChoice").value;
  var bd = document.getElementById("myPage");
  bd.style.backgroundColor = colour;
}
var funIsClickable = 0;
var funVar = 0;

var score = 0;

function funIsStop() {
  if (funIsClickable == 0) {
    pass;
  } else {
    alert("*fun noise*");
    score++;
    var funImg = document.getElementById("funmg");
    funImg.style.visibility = "hidden";
    document.getElementById("funn").innerHTML = "Current Score: " + score;
    funVar = 0;
    funImg.style.left = funVar + "px";
    funImg.style.visibility = "visible";
  }
}

function restart() {
  score = 0;
  funVar = 0;
  document.getElementById("funn").innerHTML = "";
  funImg = document.getElementById("funmg");
  funImg.style.left = funVar + "px";
  funImg.style.visibility = "visible";
  funIsClickable = 1;
  var funGoBrrr = document.getElementById("funmg");
  var speed = Number(document.getElementById("diff").value);
  var id = setInterval(frame, 10);
  var w = window.innerWidth;

  function frame() {
    if (funVar >= w) {
      clearInterval(id);
      funGoBrrr.style.visibility = "hidden";
      alert("You died lol")
      document.getElementById("funn").innerHTML = "You ded. Your score is " + score
    }
    else {
      funVar = funVar + speed;
    }
    funGoBrrr.style.left = funVar + "px";
  }

}