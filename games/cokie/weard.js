let cokcl=0
let cursorAmount=0
let procursorAmount=0
let msg=0
let cookiesGainedByClicking=1
  
function alwaysOn100() {
  //Update Message Board
  if (cokcl > 10000){
    msg="Huge monopoly, you bought out all the cokie businesses and are the only cokie company left"
  }
  else if (cokcl > 1000){
    msg="Massive corporation, the country enjoys your cokies"
  }
  else if (cokcl > 100){
    msg="Local enterprise, you have many happy customers";
  }
  else if (cokcl > 10){
    msg="Beginner business: Supplying stuff for the local female trooper group";
  }
  else{
    msg="Your business just begun, have fun!";
  }
  document.getElementById("messages").innerHTML = msg;

  //Update Counter
  cokcl += 0.05 * cursorAmount;
  cokcl += 0.1 * procursorAmount;
  document.getElementById("counter").innerHTML = cokcl;
  document.title = cokcl + " cokies - Cokie cliker";
}

  
function cookieClicked() {
    cokcl += cookiesGainedByClicking;
    document.getElementById("counter").innerHTML = cokcl;
}

function buyProCursor(){
    if (cokcl > 10){
      cokcl-=10
      procursorAmount+=1
    }
}
function buyCursor(){
  if (cokcl > 5){
    cursorAmount+=1
    cokcl-=5
  }
}

setInterval(alwaysOn100, 100);