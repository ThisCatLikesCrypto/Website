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

var classroomLink = getCookie("classroomLink") || 'https://classroom.google.com'; // Default classroom link

function changeClassroomLink(link) {
    classroomLink = link;
    setCookie("classroomLink", link, 30); // Save the choice in a cookie for 30 days
}

function getClassroomLink() {
    return classroomLink;
}

function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
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