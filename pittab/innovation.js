let ino = 0;

function innovation() {
  ino += 1;
  document.getElementById("inocount").innerHTML = ino + " innovations";
}

function unin() {
  ino -= 1;
  document.getElementById("inocount").innerHTML = ino + " innovations";
}
