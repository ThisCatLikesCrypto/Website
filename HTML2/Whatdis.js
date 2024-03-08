function EpicFunction() {
  const Pitta = {taste:"Gut", cooktast:"Nicht Gut"};
  var Pitta1 = 74;
  alert(Pitta1);
}
function EpicFunction2() {
  var Pitta2 = "AAAGHG";
  var Num = 148
  for (let i = 0; i < Num; i++) {
    document.write(Pitta2);
    document.write("\n")
  }
}

function displayInfo() {
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;

  warnidjf = `Name: ${userName}\nEmail: ${userEmail}`;

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
