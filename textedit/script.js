console.log("page not ded yet :D");

function countChars() {
    var divContent = document.getElementById('editor').textContent;
    var characterCount = divContent.length;
    document.getElementById('charcount').innerHTML = "&nbsp;&nbsp;Characters: " + characterCount;
}

document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(countChars, 500);
});