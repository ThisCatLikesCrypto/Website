var domainEndings = ["uk", "com", "net", "org", "co", "ooo", "ca", "de", "eu", "us", "cn", "in", "website", "site", "tr", "dev"];
var titleIndex = 0;
var titles = "";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

try {
    var directory = JSON.parse(localStorage.getItem("directory"));
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
    localStorage.setItem("directory", JSON.stringify(directory));
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
    localStorage.setItem('points', parseInt(localStorage.getItem('points'))+1);
    getPoints();
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat";
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
}

function searchGoogle() {
    var searchTerm = document.getElementById("searchInput").value;
    localStorage.setItem('points', parseInt(localStorage.getItem('points'))+1);
    getPoints();
    window.location.href = "https://google.com/search?q=" + encodeURIComponent(searchTerm);
}

function search(query) {
    var searchTerm = query || document.getElementById("searchInput").value;
    var engine = localStorage.getItem("engine") || "https://ecosia.org/search?q=%s";

    console.log(searchTerm);

    localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1);
    getPoints();

    var queryEnding = searchTerm.split(".");
    queryEnding = queryEnding[queryEnding.length - 1];
    console.log(queryEnding);

    var searchquOption = localStorage.getItem("searchqu") || "https";
    var searchexOption = localStorage.getItem("searchex") || "ddgbangs";

    if (searchTerm === "") {
        console.log("Empty search string");
    } else if (searchTerm.startsWith("https://") || searchTerm.startsWith("http://")) {
        window.location.href = searchTerm;
    } else if (searchTerm.startsWith("?")) {
        handleQuestionQuery(searchTerm, searchquOption);
    } else if (searchTerm.startsWith("!")) {
        handleExclamationQuery(searchTerm, searchexOption);
    } else if (domainEndings.includes(queryEnding)) {
        window.location.href = "https://" + searchTerm;
    } else {
        window.location.href = engine.replace("%s", encodeURIComponent(searchTerm));
    }
    return false; // Prevent default form submission
}

function handleQuestionQuery(query, option) {
    if (option === "https") {
        window.location.href = query.replace("?", "https://");
    } else if (option === "http") {
        window.location.href = query.replace("?", "http://");
    } else if (option === "search") {
        var engine = localStorage.getItem("engine") || "https://ecosia.org/search?q=%s";
        window.location.href = engine.replace("%s", encodeURIComponent(query));
    }
}

function handleExclamationQuery(query, option) {
    if (option === "ddgbangs") {
        window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
    } else if (option === "https") {
        window.location.href = query.replace("!", "https://");
    } else if (option === "http") {
        window.location.href = query.replace("!", "http://");
    } else if (option === "search") {
        var engine = localStorage.getItem("engine") || "https://ecosia.org/search?q=%s";
        window.location.href = engine.replace("%s", encodeURIComponent(query));
    }
}

function goPlaces(place){
    window.location.href=place;
}

function changeSearch(){
    var engine = document.getElementById("engineInput").value;
    console.log("Switching to " + engine);
    localStorage.setItem('engine', engine);
    document.getElementById('failthing2').innerHTML = "Updated to " + engine;
    return false;
}

function titleCycle(){
    ntitle = document.getElementById("ntitle");
    let currentTitle = titles[titleIndex];
    currentTitle = currentTitle.replace(/\[\s*|\s*\]/g, '');
    ntitle.innerHTML = currentTitle;
    titleIndex = (titleIndex + 1) % titles.length;
}

function updateTitle(){
    title = localStorage.getItem("title") || "New Tab Go Brrr";
    if (title.startsWith("[") && title.endsWith("]")){
        titles = title.split(", ");
        titleCycle();
        setInterval(titleCycle, 10000);
    } else {
        document.getElementById("ntitle").innerHTML = title;
    }
}

function setNewTitle(){
    newtitle = document.getElementById("newTitleInput").value;
    console.log("Switching title " + newtitle);
    localStorage.setItem("title", newtitle);
    document.getElementById('failthing2').innerHTML = "Updated to " + newtitle;
    window.location.href="index.html";
}

function changeTheme(theme) {
    themething = "../css/themes/" + theme + ".css";
    document.getElementById("them").href = themething;
    localStorage.setItem("theme", themething);
}

function updateTheme() {
    themething = localStorage.getItem("theme");
    if (themething === null) {
        themething = "../css/themes/surface.css";
    }
    document.getElementById("them").href = themething;
}

function changeToCustomTheme(){
    const cssURL = document.getElementById("cssURL").value;
    localStorage.setItem("theme", cssURL);
    updateTheme();
    return false;
}

function updateInlineCSS(){
    try {
        const inlineCSS = localStorage.getItem("inlineCSS");
        document.getElementById("inlineCustomCSS").innerHTML = inlineCSS;
        document.getElementById("inlineCSSeditor").innerHTML = inlineCSS;
    } catch {
        console.log("updateInlineCSS() failed.");
    }
}

function useCustomInlineCSS(){
    const inlineCSS = document.getElementById("inlineCSSeditor").textContent;
    localStorage.setItem("inlineCSS", inlineCSS);
    updateInlineCSS();
}

function getPoints() {
    let pints = localStorage.getItem('points');
    if (pints === undefined || pints === null || pints === "") {
        localStorage.setItem('points', 0);
        document.getElementById('points™').innerHTML = 0;
    } else {
        document.getElementById('points™').innerHTML = pints;
    }
}

function saveSearchQuOption() {
    var searchqu = document.getElementById("searchqu").value;
    localStorage.setItem("searchqu", searchqu);
}

function saveSearchExOption() {
    var searchex = document.getElementById("searchex").value;
    localStorage.setItem("searchex", searchex);
}

function loadSearchOptions() {
    var searchqu = localStorage.getItem("searchqu");
    if (searchqu) {
        document.getElementById("searchqu").value = searchqu;
    }

    var searchex = localStorage.getItem("searchex");
    if (searchex) {
        document.getElementById("searchex").value = searchex;
    }
}

function lazyAss(){
    // set all my settings
    localStorage.setItem('directory', '{"link1":"https://bing.com/chat","link2":"https://classroom.google.com/u/1/","link3":"https://docs.google.com","link4":"https://github.com","link5":"https://ecosia.org/chat","link6":"https://grid.me.uk","link7":"https://app.electricitymaps.com/map","link8":"https://quizlet.com/latest","link9":"https://dashboard.blooket.com"}');
    localStorage.setItem('inlineCSS', 'body {background-image: url("../assets/background.png");}');
    localStorage.setItem('theme', '../css/themes/deep.css');
    localStorage.setItem('title', "[quark, <span style='color: crimson'>ANTI QUARK!!!!</span>, how are you today?, <span style='color: white'>i wonder how long one of these can be</span>, <i style='color: pink'>Welcome to osu!</i>, <img src='https://media.wetdry.world/custom_emojis/images/000/200/093/original/b33cffec87dc68fc.gif' style='background: transparent !important' width=85>, <a href='https://1centstock.com'>BHP IS A ONE CENT STOCK FRAUD!!</a>, <i>big banana cheescake</i>]");
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    updateTitle();
    updateLinkList();
    updateTheme();
    updateInlineCSS();
    getPoints();
    loadSearchOptions();

    document.getElementById("searchqu").addEventListener("change", saveSearchQuOption);
    document.getElementById("searchex").addEventListener("change", saveSearchExOption);
});