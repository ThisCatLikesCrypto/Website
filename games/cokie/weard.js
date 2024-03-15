let cokcl = 0;
let farmamount= 0;
let cursorAmount = 0;
let procursorAmount = 0;
let msg = "";
let cookiesGainedByClicking = 1;
let priceocur = 5;
let priceoprocur = 10;
let priceofarm = 1000;

// Encode the data into a cookie
function encodeV001() {
  const header = "cokclv001";
  let saveString = header + ";" + "AA" + cokcl;
  saveString += "AB" + cookiesGainedByClicking;
  saveString += "BA" + cursorAmount;
  saveString += "BB" + procursorAmount;

  // Set the cookie
  document.cookie = "cokclSave=" + saveString;

  return saveString;
}

// Decode the data from the cookie
function decodeV001() {
      const cookieValue = document.cookie
          .split("; ")
          .find(row => row.startsWith("cokclSave="))
          .split("=")[1];

      if (!cookieValue.startsWith("cokclv001")) {
          throw new Error("Save does not start with 'cokclv001', wrong format.");
      }

      const values = cookieValue.substring(9).split(";");
      const idTable = {
          cokcl: "AA",
          cookiesGainedByClicking: "AB",
          cursorAmount: "BA",
          procursorAmount: "BB"
      };

      cokcl = values[0].substring(2);
      cookiesGainedByClicking = values[1].substring(2);
      cursorAmount = values[2].substring(2);
      procursorAmount = values[3].substring(2);

      console.log(`cokcl: ${cokclValue}, cookiesGainedByClicking: ${cookiesGainedValue}, cursorAmount: ${cursorAmountValue}, procursorAmount: ${procursorAmountValue}`);
}

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


decodeV001()


setInterval(alwaysOn100, 100);
setInterval(runner, 1000)