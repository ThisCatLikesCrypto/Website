function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomChoice(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

async function button1Function() {
  document.getElementById("button1").addEventListener("click", function() {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  });
}

