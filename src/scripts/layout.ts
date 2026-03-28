function showSide() {
    const snav = document.getElementById("sidenav") as HTMLElement;
    const snavb = document.getElementById("sidenavbtn") as HTMLElement;
    snav.style.display = "block";
    snavb.style.marginLeft = "36%";
    snavb.innerHTML = `<span class="fa-bars fa-solid"></span>`;
    snavb.onclick = hideSide;
}
function hideSide() {
    const snav = document.getElementById("sidenav") as HTMLElement;
    const snavb = document.getElementById("sidenavbtn") as HTMLElement;
    snav.style.display = "none";
    snavb.style.marginLeft = "0";
    snavb.innerHTML = `<span class="fa-bars fa-solid"></span>`;
    snavb.onclick = showSide;
}

document.addEventListener('DOMContentLoaded', function () {
    (document.getElementById("sidenavbtn") as HTMLElement).onclick = showSide;
});