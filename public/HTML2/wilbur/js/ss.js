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

const writeToTextFile = (text, fileName) => {
  let textFile = null;
  const makeTextFile = (text) => {
    const data = new Blob ([text], { type: 'text/plain', });
    if (textFile !== null) {
      window.URL.revokeObjectURL (textFile);
    }
    textFile = window.URL.createObjectURL (data);
    return textFile;
  };
  const link = document.createElement ('a');
  link.setAttribute ('download', fileName);
  link.href = makeTextFile (text);
  link.click ();
};

function lol() {
  window.location.replace("https://www.youtube.com/watch?v=j5a0jTc9S10");
  writeToTextFile("Hello, as you can see, you have been rickrolled. Here is a file to sit forever on your PC, and remind you of what you have done.", "rick")
}
