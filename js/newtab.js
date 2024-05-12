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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

function showThemes() {
    document.getElementById("themes").style.display = "block";
    document.getElementById("main").style.display = "none";
}

function hideThemes() {
    document.getElementById("main").style.display = "block";
    document.getElementById("themes").style.display = "none";
}

function showTimetable() {
    document.getElementById("viewtimetable").style.display = "block";
    document.getElementById("main").style.display = "none";
    useCachedTimetable();
}

function hideTimetable() {
    document.getElementById("main").style.display = "block";
    document.getElementById("viewtimetable").style.display = "none";
}


function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    setCookie('points', parseInt(getCookie('points'))+1, 365);
    getPoints();
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
    } else if (searchTerm.startsWith("https://") || searchTerm.startsWith("http://")) {
        window.location.href=searchTerm;
    } else if (searchTerm.startsWith("!")){
        window.location.href = "https://duckduckgo.com/?q=" + encodeURIComponent(searchTerm);
    } else if (searchTerm.endsWith(".uk") || searchTerm.endsWith(".com") || searchTerm.endsWith(".co") || searchTerm.endsWith(".net") || searchTerm.endsWith(".org")) {
        window.location.href="https://" + searchTerm;
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
    return false; // Prevent default form submission
}

function searchGoogle() {
    var searchTerm = document.getElementById("searchInput").value;
    setCookie('points', parseInt(getCookie('points'))+1, 365);
    getPoints();
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

function getPoints() {
    let pints = getCookie('points');
    if (pints===undefined || pints===null || pints==="") {
        console.log("failed to get points cookie, if this is the first load ignore this. otherwise raise an issue on https://github.com/ThisCatLikesCrypto/Website");
        setCookie('points', 0, 365);
        document.getElementById('points™').innerHTML = 0;
    } else {
        document.getElementById('points™').innerHTML = pints;
    }
}

function displayTimetable(jsonData) {
    var timetableData = JSON.parse(jsonData);
    try {
        weekData.forEach((period) => {
            console.log("fuck this shit");
        });
    } catch(e) {
        //This is necessary because... idk but it breaks if you remove it :D
        timetableData = JSON.parse(timetableData);
        console.log(timetableData);
    }

    // Clear existing timetable rows
    document.getElementById('timetableBody').innerHTML = '';
    for (let i = 1; i < 3; i++) {
        weekh = document.createElement('h2');
        weekh.innerHTML = "Week " + i.toString();
        document.getElementById('timetableBody').append(document.createElement('br'));
        document.getElementById('timetableBody').append(weekh);
        console.log(timetableData);
        var weekData = timetableData['week' + i.toString()];
        console.log(weekData);
        weekData.forEach((period) => {
            const row = document.createElement('tr');
            const periodCell = document.createElement('td');
            periodCell.innerText = period.period;
            row.appendChild(periodCell);
      
            period.days.forEach((subject) => {
                const subjectCell = document.createElement('td');
                subjectCell.innerText = subject;
                row.appendChild(subjectCell);
                document.getElementById('timetableBody').appendChild(row);
            });
        });
    }
}

function importJSON() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        let jsonData = event.target.result;
        localStorage.setItem('timetable', JSON.stringify(jsonData));
        displayTimetable(jsonData);
      };
      reader.readAsText(file);
    } else {
      alert('Please select a JSON file.');
    }
}

async function useCachedTimetable() {
    let jsonData = localStorage.getItem('timetable');
    if (jsonData) {
        displayTimetable(jsonData);
    }
    else {
        document.getElementById('ttstatus').innerHTML = "No local timetable found.";
        await sleep(3000);
        document.getElementById('ttstatus').innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateLinkList();
    updateTheme();
    getPoints();

});