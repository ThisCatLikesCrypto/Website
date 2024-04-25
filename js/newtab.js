function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm === ""){
        window.location.href="https://ecosia.org"
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