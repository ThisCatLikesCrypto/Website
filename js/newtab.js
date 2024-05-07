function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

try {
    var directory = JSON.parse(getCookie("directory"));
} catch {
    var directory = {
        "classroomLink": "https://classroom.google.com",
        "githubLink": "https://github.com"
    };
};

function getLink(Link) {
    return directory[Link];
}

function updateLinkList(){
    var ul = document.getElementById("availableLinks");
    ul.innerHTML = "";
    for (var key in directory) {
        if (directory.hasOwnProperty(key)) {
            var li = document.createElement("li");
            li.textContent = key + ": " + directory[key];
            ul.appendChild(li);
        }
    }
}

function updateLink() {
    var linkName = document.getElementById("linkName").value;
    var newLink = document.getElementById("linkContent").value;
    directory[linkName] = newLink;
    setCookie("directory", JSON.stringify(directory), 30); // Save the updated link in a cookie for 30 days
    messageMessage = "Update success: " + linkName + " was set to " + newLink;
    document.getElementById("failthing").innerHTML = messageMessage;
    updateLinkList();
}

function showLinkEditor() {
    document.getElementById("linkeditor").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function hideLinkEditor() {
    document.getElementById("main").style.display = "block";
    document.getElementById("linkeditor").style.display = "none";
}

function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
    } else if (searchTerm.startsWith("https://") || searchTerm.startsWith("http://")) {
        window.location.href=searchTerm;
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
    return false; // Prevent default form submission
}

function searchGoogle() {
    var searchTerm = document.getElementById("searchInput").value;
    window.location.href = "https://google.com/search?q=" + encodeURIComponent(searchTerm);
}

function goPlaces(place){
    window.location.href=place;
}

function changeTheme(theme) {
    themething = "../css/themes/" + theme + ".css"
    document.getElementById("them").href = themething;
    setCookie("theme", themething, 180);
}

function updateTheme() {
    themething = getCookie("theme");
    if (themething === "") {
        themething = "../css/themes/surface.css"
    }
    document.getElementById("them").href = themething;
}

document.addEventListener('DOMContentLoaded', function() {
    updateLinkList();
    updateTheme();

});