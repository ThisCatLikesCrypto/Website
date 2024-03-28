let Thom = 0

function YeS() {
  document.getElementById("A").innerHTML = "YESSS"
}

function Who() {
  alert("You don't exist")
}

function Poreg() {
  if (Thom == 100) {
    Thom = 0
    document.getElementById("Update").innerHTML = Thom
  } else {
    Thom = Thom + 1
    document.getElementById("Update").innerHTML = Thom
  }
}
