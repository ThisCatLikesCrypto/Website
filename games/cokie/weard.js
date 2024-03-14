  let cokcl=0
  let gann=0
  let curse=0
  let msg=0
  
  function red() {
    if (cokcl > 10){
      msg="Beginner business: Supplying stuff for the local female trooper group"
      document.getElementById("sus").innerHTML = msg
    }
    else if (cokcl > 100){
      msg="Local enterprise, you have many happ customers"
      document.getElementById("sus").innerHTML = msg
    }
   else if (cokcl > 1000){
     msg="Massive corporation, the county enjoys your cokies"
     document.getElementById("sus").innerHTML = msg
   }
   else if (cokcl > 10000){
     msg="Huge monopoly, you bought out all the cookie businesses and are the only cookie company left"
     document.getElementById("sus").innerHTML = msg
   }
   else{
     msg="Your business just begun, have fun!"
     document.getElementById("sus").innerHTML = msg
   }
  }
  
  setInterval(red, 30);
  
  function wot() {
    cokcl += 1
    document.getElementById("lol").innerHTML = cokcl
  }
  function e(){
  document.getElementById("lol").innerHTML = cokcl
  }
  function idl(){
    if (cokcl > 10){
      cokcl-=10
      gann+=1
      document.getElementById("lol").innerHTML = cokcl;
    }
  }
function ildcurse(){
  if (cokcl > 5){
    curse+=1
    cokcl-=5
    document.getElementById("lol").innerHTML = cokcl;
  }
}
function ildgencurse(){
      cokcl += 0.5 * curse;
    document.getElementById("lol").innerHTML = cokcl;
}

setInterval(ildgencurse, 1000);


function idlgen() {
    cokcl += 1 * gann;
    document.getElementById("lol").innerHTML = cokcl;
}

setInterval(idlgen, 1000);


  
