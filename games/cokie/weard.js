var cokcl = 0;
var farmamount= 0;
var cursorAmount = 0;
var procursorAmount = 0;
var msg = "";
var cookiesGainedByClicking = 1;
var priceocur = 5;
var priceoprocur = 10;
var priceofarm = 1000;

function readCookie(cookieName) {
  const cookies = document.cookie.split(';');
  console.log(cookies)
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return decodeURIComponent(value);
    }
  }
  return null; // Cookie not found
}


function encodeV001() {
  const header = "cokclv001";
  let saveString = header + "-" + "AA" + cokcl + "AB" + cookiesGainedByClicking + "BA" + cursorAmount + "BB" + procursorAmount;

  // Set the cookie with a 10-year expiration
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 10);
  expires = "expires=" + expirationDate.toUTCString();
  stringToCookie = 'cokclSave' + "=" + saveString + ";" + expires + ";path=/";
  document.cookie = stringToCookie;

  console.log(saveString);
}


function decodeV001() {
  let saveString = readCookie('cokclSave');
  console.log(saveString);

  if (saveString.split("-")[0] === "cokclv001") {
      saveString = saveString.substring("cokclv001-".length);
  } else {
      throw new Error("Save does not start with 'cokclv001', wrong format.");
  }

  cokcl = parseInt(saveString.split("AA")[1].split("AB")[0]);
  cookiesGainedByClicking = parseInt(saveString.split("AB")[1].split("BA")[0]);
  cursorAmount = parseInt(saveString.split("BA")[1].split("BB")[0]);
  procursorAmount = parseInt(saveString.split("BB")[1]);

  console.log(`cokcl: ${cokcl}, cookiesGainedByClicking: ${cookiesGainedByClicking}, cursorAmount: ${cursorAmount}, procursorAmount: ${procursorAmount}.`);
}

decodeV001();





function alwaysOn100() {
  // Update everything
  document.getElementById("curby").innerHTML = priceocur;
  document.getElementById("procurby").innerHTML = priceoprocur;
  document.getElementById("farmby").innerHTML = priceofarm;
  if (farmamount > 0) {
    priceofarm=1000*farmamount
    document.getElementById("farmby").innerHTML = priceofarm;
  }
  if (cursorAmount > 0){
    priceocur=5*cursorAmount
    document.getElementById("curby").innerHTML = priceocur;
  }
  if (procursorAmount > 0){
    priceoprocur=10*procursorAmount
    document.getElementById("procurby").innerHTML = priceoprocur;
  }
  if (cokcl > 10000) {
    msg = "Huge monopoly, you bought out all the cokie businesses and are the only cokie company left";
  } else if (cokcl > 1000) {
    msg = "Massive corporation, the county enjoys your cokies";
  } else if (cokcl > 100) {
    msg = "Local enterprise, you have many happy customers";
  } else if (cokcl > 10) {
    msg = "Beginner business: Supplying stuff for the local female trooper group";
  } else {
    msg = "Your business just begun, have fun!";
  }
  document.getElementById("messages").innerHTML = msg;

}

function runner(){
  // Update Counter
  cokcl += 0.5 * cursorAmount;
  cokcl += 1 * procursorAmount;
  cokcl += 10 * farmamount
  document.getElementById("counter").innerHTML = cokcl
  document.title = Math.round(cokcl) + " cokies - Cokie Cliker";
  encodeV001()
}

setInterval(runner, 1000)

function cookieClicked() {
  cokcl += cookiesGainedByClicking;
  document.getElementById("counter").innerHTML = Math.round(cokcl);
}

function buyProCursor() {
  if (cokcl > priceoprocur) {
    cokcl -= priceoprocur;
    procursorAmount += 1;
  }
}

function buyCursor() {
  if (cokcl > priceocur) {
    cursorAmount += 1;
    cokcl -= priceocur;
  }
}
function buyfarm() {
  if (cokcl > priceofarm) {
    farmamount += 1;
    cokcl -= priceofarm;
  }
}

setInterval(alwaysOn100, 100);

decodeV001()
