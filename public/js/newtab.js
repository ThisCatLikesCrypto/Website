var titleIndex = 0;
var titles = "";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var directory = JSON.parse(localStorage.getItem("directory")) || {
    "link1": "https://copilot.microsoft.com",
    "link2": "https://classroom.google.com",
    "link3": "https://docs.google.com",
    "link4": "https://github.com",
    "link5": "https://ecosia.org/chat",
    "link6": "https://grid.me.uk",
    "link7": "https://app.electricitymaps.com/map",
    "link8": "https://quizlet.com/latest",
    "link9": "https://dashboard.blooket.com"
};

async function fetchDomainEndings() {
  const response = await fetch('https://publicsuffix.org/list/public_suffix_list.dat');
  if (!response.ok) {
    throw new Error(`Failed to fetch TLD list: ${response.status}`);
  }
  let text = await response.text();
  text = text
    .split('\n')                                  // Split lines
    .filter(line => line && !line.startsWith('/')) // Remove comments/empty
    .map(tld => tld.toLowerCase());          // Prepend dot & normalise
  document.getElementById('stupiddomainendingstag').innerHTML = text;
}

function getDomainEndings() {
  return document.getElementById('stupiddomainendingstag').innerHTML.split(',');
}

function getLink(Link) {
    return directory[Link];
}

function updateLinkList() {
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
    const searchTerm = document.getElementById("searchInput").value;
    localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1);
    getPoints();
    if (searchTerm === "") {
        window.location.href = "https://www.ecosia.org/chat";
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
}

function searchGoogle() {
    const searchTerm = document.getElementById("searchInput").value;
    localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1);
    getPoints();
    window.location.href = "https://google.com/search?q=" + encodeURIComponent(searchTerm);
}

function search(query) {
    const searchTerm = query || document.getElementById("searchInput").value;
    var engine = localStorage.getItem("engine") || "https://www.ecosia.org/search?q=%s";

    console.log(searchTerm);

    localStorage.setItem('points', parseInt(localStorage.getItem('points')) + 1);
    getPoints();

    var queryEnding = searchTerm.split(".");
    queryEnding = queryEnding[queryEnding.length - 1];
    console.log(queryEnding);

    const searchquOption = localStorage.getItem("searchqu") || "https";
    const searchexOption = localStorage.getItem("searchex") || "ddgbangs";

    const domainEndings = getDomainEndings();

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

function goPlaces(place) {
    window.location.href = place;
}

function changeSearch() {
    var engine = document.getElementById("engineInput").value;
    console.log("Switching to " + engine);
    localStorage.setItem('engine', engine);
    document.getElementById('failthing2').innerHTML = "Updated to " + engine;
    return false;
}

function titleCycle() {
    const ntitle = document.getElementById("ntitle");
    let currentTitle = titles[titleIndex];
    currentTitle = currentTitle.replace(/\[\s*|\s*\]/g, '');
    ntitle.innerHTML = currentTitle;
    titleIndex = (titleIndex + 1) % titles.length;
}

function updateTitle() {
    const title = localStorage.getItem("title") || "New Tab Go Brrr";
    if (title.startsWith("[") && title.endsWith("]")) {
        titles = title.split(", ");
        titleCycle();
        setInterval(titleCycle, 10000);
    } else {
        document.getElementById("ntitle").innerHTML = title;
    }
}

function setNewTitle() {
    const newtitle = document.getElementById("newTitleInput").value;
    console.log("Switching title " + newtitle);
    localStorage.setItem("title", newtitle);
    document.getElementById('failthing2').innerHTML = "Updated to " + newtitle;
    window.location.href = "index.html";
}

function changeTheme(theme) {
    const themething = "../css/themes/" + theme + ".css";
    document.getElementById("them").href = themething;
    localStorage.setItem("theme", themething);
}

function updateTheme() {
    let themething = localStorage.getItem("theme");
    if (themething === null) {
        themething = "../css/themes/surface.css";
    }
    document.getElementById("them").href = themething;
}

function changeToCustomTheme() {
    const cssURL = document.getElementById("cssURL").value;
    localStorage.setItem("theme", cssURL);
    updateTheme();
    return false;
}

function updateInlineCSS() {
    try {
        const inlineCSS = localStorage.getItem("inlineCSS");
        document.getElementById("inlineCustomCSS").innerHTML = inlineCSS;
        document.getElementById("inlineCSSeditor").innerHTML = inlineCSS;
    } catch {
        console.log("updateInlineCSS() failed.");
    }
}

function useCustomInlineCSS() {
    const inlineCSS = document.getElementById("inlineCSSeditor").textContent;
    localStorage.setItem("inlineCSS", inlineCSS);
    updateInlineCSS();
}

function getPoints() {
    const pints = localStorage.getItem('points');
    if (pints === undefined || pints === null || pints === "") {
        localStorage.setItem('points', 0);
        document.getElementById('points™').innerHTML = 0;
    } else {
        document.getElementById('points™').innerHTML = pints;
    }
}

function saveSearchQuOption() {
    const searchqu = document.getElementById("searchqu").value;
    localStorage.setItem("searchqu", searchqu);
}

function saveSearchExOption() {
    const searchex = document.getElementById("searchex").value;
    localStorage.setItem("searchex", searchex);
}

function loadSearchOptions() {
    const searchqu = localStorage.getItem("searchqu");
    if (searchqu) {
        document.getElementById("searchqu").value = searchqu;
    }

    const searchex = localStorage.getItem("searchex");
    if (searchex) {
        document.getElementById("searchex").value = searchex;
    }
}

function lazyAss() {
    // set all my settings
    localStorage.setItem('directory', '{"link1":"https://copilot.microsoft.com","link2":"https://classroom.google.com/u/1/h","link3":"https://docs.google.com","link4":"https://github.com","link5":"https://ecosia.org/chat","link6":"https://grid.me.uk","link7":"https://app.electricitymaps.com/map","link8":"https://quizlet.com/latest","link9":"https://dashboard.blooket.com"}');
    localStorage.setItem('inlineCSS', 'body {background-image: url("../assets/background.png");}');
    localStorage.setItem('theme', '../css/themes/deep.css');
    localStorage.setItem('title', "[quark, <span style='color: crimson'>ANTI QUARK!!!!</span>, how are you today?, <span style='color: white'>i wonder how long one of these can be</span>, <i style='color: pink'>Welcome to osu!</i>, <img src='https://assets.c48.uk/spinny_cat/spinny_cat_aroace.gif' style='background: transparent !important' width=85>, <a href='https://1centstock.com'>BHP IS A ONE CENT STOCK FRAUD!!</a>, <i>big banana cheescake</i>]");
    window.location.reload();
}

document.getElementById("mesage").innerHTML = "It's just javascript, bro";

const messages = [
    "It's just JavaScript, bro",
    "Bet you wish you could make this, huh?",
    "What? Never seen a custom new tab before?",
    "Oh, this? It's just web dev",
    "Imagine not knowing how to code, couldn't be me!",
    "Aww sweetie, you don't know what JS is?",
    "hehe sudo rm -rf /*"
];

let currentIndex = 0;
const messageElement = document.getElementById("mesage");

function msgs() {
    messageElement.innerHTML = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}

setInterval(msgs, 3000);

function getDayOfWeek(day) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (daysOfWeek[day] === undefined){
        return 'Sunday' // dumb fix for breakage on Sunday
    } else {
        return daysOfWeek[day];
    }
}

function getTime() {
    const now = new Date();
    const date = now.getDate().toString().padStart(2, '0');
    const dayOfWeek = getDayOfWeek(now.getDay() - 1);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return [`${dayOfWeek}, ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`];
}

function updateTime() {
    time = getTime();
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = time[0];
}

setInterval(updateTime, 500);

document.addEventListener('DOMContentLoaded', function () {
    updateTheme();
    updateTitle();
    updateLinkList();
    updateInlineCSS();
    getPoints();
    loadSearchOptions();
    updateTime();
    msgs();

    document.getElementById("searchqu").addEventListener("change", saveSearchQuOption);
    document.getElementById("searchex").addEventListener("change", saveSearchExOption);
});

document.addEventListener('DOMContentLoaded', fetchDomainEndings);