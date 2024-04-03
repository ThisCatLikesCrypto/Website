var Thom = 0

function YeS() {
  document.getElementById("A").innerHTML = "YESSS"
}

function Who() {
  alert("You don't exist")
}

function Poreg() {
  if (Thom == 100) {
    Thom = 0
    document.getElementById("Update").style.width=Thom+"%";
  } else {
    Thom = Thom + 1
    document.getElementById("Update").style.width=Thom+"%";
  }
  console.log(Thom);
}
