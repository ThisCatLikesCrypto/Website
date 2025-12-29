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
    const px20text = 'font-weight: bold; font-size: 20px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)';
    const px15text = 'font-weight: bold; font-size: 15px; color: aqua; text-shadow: 1px 1px 0 rgb(217,31,38)';
    console.log('%cHello Internet Citizen. Welcome to the JavaScript console of wilburwilliams.uk.', 'font-weight: bold; font-size: 30px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)');
    console.log('%cThe source code for this site is available at https://github.com/ThisCatLikesCrypto/Website', px20text)
    console.log('%cPlease do not steal large amounts of code before getting permission from me, or pass this off as your own. This should be obvious, but some people can be straight-up bad people sometimes.', px20text);
    console.log('%cOther than that do whatever you feel like here.', px20text);
    console.log("%cIf my source code is erm... not the greatest then feel free to tell me how to improve just don't be unkind about it.", px15text);
    document.getElementById("sidenavbtn").onclick = showSide;
});