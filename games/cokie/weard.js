
let cokcl = 0;
let farmamount= 0;
let cursorAmount = 0;
let procursorAmount = 0;
let msg = "";
let cookiesGainedByClicking = 1;
let curpric=0;
let procurpric=0;
let farmpric=0;

function alwaysOn100() {
  // Update Message Board
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
  if (cursorAmount > 0){
   curpric=5*cursorAmount
   document.getElementById("curpric").innerHTML = curpric;
  }
  else{
    curpric=5
    document.getElementById("curpric").innerHTML = curpric;
  }
  if(farmamount > 0){
    farmpric=1000*farmamount
    document.getElementById("farmpric").innerHTML = farmpric;
  }
  else{
    farmpric=1000
    document.getElementById("farmpric").innerHTML = farmpric;
  }
  if(procurpric > 0){
   procurpric=10*procursorAmount
   document.getElementById("procurpric").innerHTML = procurpricpric;
  }  
  else{
    procurpric=10
  }
}

function runner(){
  // Update Counter
  cokcl += 0.5 * cursorAmount;
  cokcl += 1 * procursorAmount;
  cokcl += 10 * farmamount
  document.getElementById("counter").innerHTML = cokcl
  document.title = Math.round(cokcl) + " cokies - Cokie Cliker";
}
setInterval(runner, 1000)

function cookieClicked() {
  cokcl += cookiesGainedByClicking;
  document.getElementById("counter").innerHTML = Math.round(cokcl);
}

function buyProCursor() {
  if (cokcl > 9.9) {
    cokcl -= 10;
    procursorAmount += procurpric;
  }
}

function buyCursor() {
  if (cokcl > 4.9) {
    cursorAmount += 1;
    cokcl -= curpric;
  }
}
function buyfarm() {
  if (cokcl > 4.9) {
    farmamount += 1;
    cokcl -= farmpric;
  }
}

setInterval(alwaysOn100, 100);
