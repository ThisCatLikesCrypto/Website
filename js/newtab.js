var domainEndings = ["uk", "com", "net", "org", "co", "ooo", "ca", "de", "eu", "us", "cn", "in", "website", "site", "tr", "dev"];

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

try {
    var directory = JSON.parse(getCookie("directory"));
    if (directory['classroomLink']){
        alert("Please reset your cookies for this site in devtools due to an update in how links will work going forward.");
    }
} catch {
    var directory = {
        "link1": "https://bing.com/chat",
        "link2": "https://classroom.google.com",
        "link3": "https://docs.google.com",
        "link4": "https://github.com",
        "link5": "https://ecosia.org/chat",
        "link6": "https://wilbur.is-a.dev/wTextitor",
        "link7": "https://app.electricitymaps.com/map",
        "link8": "https://quizlet.com/latest",
        "link9": "https://dashboard.blooket.com"
    };
}

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

function showThemes() {
    document.getElementById("themes").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function hideThemes() {
    document.getElementById("main").style.display = "block";
    document.getElementById("themes").style.display = "none";
}

function showOptions() {
    document.getElementById("primaryoptions").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function hideOptions() {
    document.getElementById("main").style.display = "block";
    document.getElementById("primaryoptions").style.display = "none";
}

function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    setCookie('points', parseInt(getCookie('points'))+1, 365);
    getPoints();
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat";
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
}

function searchGoogle() {
    var searchTerm = document.getElementById("searchInput").value;
    setCookie('points', parseInt(getCookie('points'))+1, 365);
    getPoints();
    window.location.href = "https://google.com/search?q=" + encodeURIComponent(searchTerm);
}

function search(query) {
    var searchTerm = query || document.getElementById("searchInput").value;
    var engine = getCookie("engine") || "https://ecosia.org/search?q=%s";

    console.log(searchTerm);

    setCookie('points', parseInt(getCookie('points')) + 1, 365);
    getPoints();

    var queryEnding = searchTerm.split(".");
    queryEnding = queryEnding[queryEnding.length - 1];
    console.log(queryEnding);

    if (searchTerm === "") {
        console.log("Empty search string");
    } else if (searchTerm.startsWith("https://") || searchTerm.startsWith("http://")) {
        window.location.href = searchTerm;
    } else if (searchTerm.startsWith("?")) {
        window.location.href=searchTerm.replace("?", "https://");
    } else if (searchTerm.startsWith("!")) {
        window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm);
    } else if (domainEndings.includes(queryEnding)) {
        window.location.href = "https://" + searchTerm;
    } else {
        window.location.href = engine.replace("%s", encodeURIComponent(searchTerm));
    }
    return false; // Prevent default form submission
}

function goPlaces(place){
    window.location.href=place;
}

function changeSearch(){
    var engine = document.getElementById("engineInput").value;
    console.log("Switching to " + engine);
    setCookie('engine', engine, 365);
    document.getElementById('failthing2').innerHTML = "Updated to " + engine;
    return false;
}

function updateTitle(){
    title = getCookie("title") || "New Tab Go Brrr";
    document.getElementById("ntitle").innerHTML = title;
}

function setNewTitle(){
    newtitle = document.getElementById("newTitleInput").value;
    console.log("Switching title " + newtitle);
    setCookie("title", newtitle, 365);
    document.getElementById('failthing2').innerHTML = "Updated to " + newtitle;
    updateTitle();
}

function changeTheme(theme) {
    themething = "../css/themes/" + theme + ".css";
    document.getElementById("them").href = themething;
    setCookie("theme", themething, 180);
}

function updateTheme() {
    themething = getCookie("theme");
    if (themething === "") {
        themething = "../css/themes/surface.css";
    }
    document.getElementById("them").href = themething;
}

function changeToCustomTheme(){
    const cssURL = document.getElementById("cssURL").value;
    setCookie("theme", cssURL, 180);
    updateTheme();
    return false;
}

function updateInlineCSS(){
    try {
        const inlineCSS = getCookie("inlineCSS");
        document.getElementById("inlineCustomCSS").innerHTML = inlineCSS;
        document.getElementById("inlineCSSeditor").innerHTML = inlineCSS;
    } catch {
        console.log("updateInlineCSS() failed, probably failed in getting cookie.");
    }
}

function useCustomInlineCSS(){
    const inlineCSS = document.getElementById("inlineCSSeditor").textContent;
    setCookie("inlineCSS", inlineCSS, 365);
    updateInlineCSS();
}

function getPoints() {
    let pints = getCookie('points');
    if (pints === undefined || pints === null || pints === "") {
        console.log("failed to get points cookie, if this is the first load ignore this. otherwise raise an issue on https://github.com/ThisCatLikesCrypto/Website");
        setCookie('points', 0, 365);
        document.getElementById('points™').innerHTML = 0;
    } else {
        document.getElementById('points™').innerHTML = pints;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateTitle();
    updateLinkList();
    updateTheme();
    updateInlineCSS();
    getPoints();
});