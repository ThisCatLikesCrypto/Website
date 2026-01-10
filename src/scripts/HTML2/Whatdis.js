function EpicFunction() {
  const Pitta = { taste: "Gut", cooktast: "Nicht Gut" };
  var Pitta1 = 74;
  alert(Pitta1);
}
function EpicFunction2() {
  var Pitta2 = "AAAGHG";
  var Num = 148;
  document.body.innerHTML = "";
  document.body.style = "background-color: white; color: black; font-family: serif; text-align: left; margin: 8px; line-height: 1.125;";
  for (let i = 0; i < Num; i++) {
    document.body.innerHTML += Pitta2;
    document.body.innerHTML += "\n";
  }
}

function displayInfo() {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;

  const warnidjf = `Name: ${userName}\nEmail: ${userEmail}`;

  alert(`Name: ${userName}\nEmail: ${userEmail}`);
  document.getElementById('id243').innerHTML = warnidjf;

  return false;
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

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("defaultTab").click();
  document.getElementById("PainButton").addEventListener("click", EpicFunction2);
  document.getElementById("EEEE").addEventListener("click", EpicFunction);
  document.getElementById("Boooo").addEventListener("click", function() { alert('Flip'); });
  document.getElementById("add").addEventListener("click", function() { alert(5 + 6); });
  document.getElementById("displayInfo").addEventListener("click", function(event) {
    event.preventDefault();
    displayInfo();
  });
  const tabs = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event) {
      openTab(event, this.getAttribute("data-tab"));
    });
  }
});