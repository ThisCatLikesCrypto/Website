let ino = 0;

function innovation(string) {
  if (string == "True") {
    ino += 1;
  } else {
    ino -= 1;
  }
  document.getElementById("inocount").innerHTML = ino + " innovations";
}
