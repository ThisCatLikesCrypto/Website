function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
   
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
   
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

async function easter(){
    console.log("you found an easter egg. allow me to redirect...");
    await sleep(2000);
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

let keys = [];
const code = [];
window.addEventListener("keyup", ({ code }) => {
  keys.push(code);
  keys = keys.slice(-11);
  if (keys.join("") == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyAEnter") {
      easter()
  }
});