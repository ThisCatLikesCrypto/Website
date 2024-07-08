var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) // Initialises tooltips

var Thom = 0;
var Count = 0;
var CountForPoreg = 0;
var OtherCount = 0
const ButtonOrder = []

function YeS() {
  if ((Count % 2) == 0){
    document.getElementById("A").innerHTML = '<p id="A" onclick="YeS()">YESSS</p>';
  } else {
    document.getElementById("A").innerHTML = '<p id="A" onclick="YeS()">A</p>';
  }
}

function Poreg() {
  if (Thom == 100) {
    Thom = 0;
    document.getElementById("Update").style.width=Thom+"%";
    document.getElementById("Update").innerHTML = Thom+"%";
    CountForPoreg =+ 1
  } else {
    Thom = Thom + 1
    document.getElementById("Update").style.width=Thom+"%";
    document.getElementById("Update").innerHTML = Thom+"%";
  }
  console.log(Thom);
}

function ReversePoreg() {
  if (Thom == 0) {
    Thom = 100;
    document.getElementById("Update").style.width=Thom+"%";
    document.getElementById("Update").innerHTML = Thom+"%";
    CountForPoreg =+ 1
  } else {
    Thom = Thom - 1
    document.getElementById("Update").style.width=Thom+"%";
    document.getElementById("Update").innerHTML = Thom+"%";
  }
}

function Bannona() {
  Ba = prompt("Bannoona").toLowerCase();
  Baa = Ba.charAt(1)
  if (Baa == "e") {
    alert("whY");
  } else if (Baa == "y") {
    alert("*E*");
  } else if (Baa == "a") {
    alert("A Aardvark");
  } else if (Baa == "b") {
    Poreg();
    alert("Poreg");
  }
}
function Yees(){
  alert("You? Don't? Exist? Or? Do? You?")
}
function Who() {
  alert("You don't exist");
}


function Primary() {
  ButtonOrder.push(1);
}

function Secondary() {
  ButtonOrder.push(2);
}

function Triary() {
  ButtonOrder.push(3);
  if (ButtonOrder.length == 3) {
    if (ButtonOrder[0] == 1) {
      if (ButtonOrder[1] == 2) {
        if (ButtonOrder[2] == 3) {
          alert("Correct Order, reload to try again")
        } else {
          alert("Fail 3")
        }
      } else {
        alert("Fail 2")
      }
    } else {
      alert("Fail")
    }
  } else {
    alert("Too Many")
  }
}

function Something() {
  OtherCount = OtherCount + 1;
  document.getElementById("Count").innerHTML = OtherCount;
  if (OtherCount > 100) {
    OtherCount = 0
    Poreg()
  }
}