function showSide() {
    const snav = document.getElementById("sidenav");
    const snavb = document.getElementById("sidenavbtn");
    snav.style.display = "block";
    snavb.style.marginLeft = "36%";
    snavb.innerHTML = `<span class="fa-bars fa-solid"></span>`;
    snavb.onclick = hideSide;
}
function hideSide() {
    const snav = document.getElementById("sidenav");
    const snavb = document.getElementById("sidenavbtn");
    snav.style.display = "none";
    snavb.style.marginLeft = "0";
    snavb.innerHTML = `<span class="fa-bars fa-solid"></span>`;
    snavb.onclick = showSide;
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('%cHello Internet Citizen. Welcome to the JavaScript console of wilburwilliams.uk.', 'font-weight: bold; font-size: 30px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)');
    document.getElementById("sidenavbtn").onclick = showSide;
});