let cokcl = 0;
let farmamount= 0;
let cursorAmount = 0;
let procursorAmount = 0;
let msg = "";
let cookiesGainedByClicking = 1;
let priceocur = 5;
let priceoprocur = 10;
let priceofarm = 1000;

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

/*
function encodeV001() {
  const header = "cokclv001";
  let saveString = header + ";" + "AA" + cokcl;
  saveString += "AB" + cookiesGainedByClicking;
  saveString += "BA" + cursorAmount;
  saveString += "BB" + procursorAmount;

  // Set the cookie with a 10-year expiration
  const expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 10);
  expires = "expires=" + expirationDate.toUTCString()
  document.cookie = 'cokclSave' + "=" + saveString + ";" + expires + ";path=/"

  console.log(saveString);
}


function decodeV001() {
  const saveFile = readCookie('cokclSave');
  console.log(saveFile);

  const decodedValues = {};
  const valuePairs = saveFile.split(';');

  for (const valuePair of valuePairs) {
    const [letters, value] = valuePair.split(/(?<=\D)(?=\d)/); // Split at the boundary between letters and digits
    decodedValues[letters] = value;
  }

  // Assign the decoded values to your existing variables
  cokcl = decodedValues['AA'];
  cookiesGainedByClicking = decodedValues['AB'];
  cursorAmount = decodedValues['BA'];
  procursorAmount = decodedValues['BB'];

  // Use the decoded values as needed
  console.log('Decoded values:');
  console.log('cokcl:', cokcl);
  console.log('cookiesGainedByClicking:', cookiesGainedByClicking);
  console.log('cursorAmount:', cursorAmount);
  console.log('procursorAmount:', procursorAmount);
}

*/


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