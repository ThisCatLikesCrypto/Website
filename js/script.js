var audio = new Audio('assets/scatteredcells.ogg');
var eaudion = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playAprilCells() {
  console.log("You found an easter egg. Enjoy the sound");
  try {
    muct = document.getElementById('musiccontrol')
    muct.innerHTML = "Controls are disabled while easter audio is running";
    muct.onclick = function(){alert("stop trying")};
  } catch {
    console.log("djsifsd");
  }
  if (easterAudio) {
    easterAudio.pause();
    easterAudio = new Audio('assets/aprilscattered.ogg');
  } else {
    var easterAudio = new Audio('assets/aprilscattered.ogg');
  }

  eaudion = true;

  alert("Sorry KyYay (turn up volume once it starts if you can't hear it)");

  if (audio) {
      audio.pause();
  }

  easterAudio.play();
  easterAudio.addEventListener("ended", function() {
      eaudion = false;
      try {
        muct = document.getElementById('musiccontrol');
        muct.innerHTML = "Click to pause music";
        muct.onclick = pausemusic;
        audio.play();
      } catch {
        console.log("djsifsd2");
      }
  });
}

async function handleKeyPress(event) {
  const keysContainer = document.getElementById('keys-container');
  keys.push(event.code);
  keys = keys.slice(-11);
  console.log(keys);

  displayKeys();

  const konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA";
  const fnafCode = "KeyFKeyNKeyAKeyF";
  const sweeney = "KeySKeyWKeyEKeyEKeyNKeyEKeyY";
  const idea = "KeyIKeyDKeyEKeyA";
  const jasperCode = "KeyJKeyAKeySKeyPKeyEKeyR";
  const rm = "KeyRKeyMMinusKeyRKeyFSlash";

  if (keys.join("") === konamiCode && eaudion == false) {
      await sleep(500);
      keysContainer.style.color = "lime";
      playAprilCells();
  } else if (keys.join("").endsWith(fnafCode)) {
      keysContainer.style.color = "lime";
      await sleep(500);
      window.location.href = "https://itsperfect.firstipourthemilk.thenipourthecereal.breakfastmyfriend.fnaf.stream/";
  } else if (keys.join("").endsWith(sweeney)) {
      keysContainer.style.color = "lime";
      await sleep(500);
      window.location.href = "https://sweensters.neocities.org/videos";
  } else if (keys.join("").endsWith(idea)) {
      keysContainer.style.color = "lime";
      await sleep(500);
      window.location.href = "https://theabsoluterealm.com";
  } else if (keys.join("").endsWith(jasperCode)) {
    keysContainer.style.color = "lime";
    await sleep(500);
    alert("Jasper is here, hide your uranium, oh dear!")
  } else if (keys.join("").endsWith(rm)) {
    keysContainer.style.color = "lime";
    await sleep(500);
    document.body.innerHTML = "";
}

function displayKeys() {
  const keysContainer = document.getElementById('keys-container');
  let keysdotjoin = keys.join(' ').replace(/Key/g, '');
  keysContainer.innerHTML = keysdotjoin;
  keysContainer.style.opacity = 1;
  clearTimeout(fadeTimeout);
  fadeTimeout = setTimeout(() => {
      keysContainer.style.opacity = 0;
      keysContainer.style.color = "white";
      keys = [];
  }, 2000);
}

let keys = [];
let fadeTimeout;
window.addEventListener("keyup", handleKeyPress);



function mobileCheck() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  if (check == true) {
    console.warn("Mobile is still in beta on this site.");
  }
};

function catGoMeow(){
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    if (data.length > 0) {
      const imageUrl = data[0].url;
      console.log('Cat image URL:', imageUrl);
      window.location.href = imageUrl;
    } else {
      console.log('No images found');
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

function showSide() {
  snav = document.getElementById("sidenav");
  snavb = document.getElementById("sidenavbtn");
  snav.style.display = "block";
  snavb.style.marginLeft = "36%";
  snavb.innerHTML = "Hide Sidebar";
  snavb.onclick = hideSide;
}

function hideSide(){
  snav = document.getElementById("sidenav");
  snavb = document.getElementById("sidenavbtn");
  snav.style.display = "none";
  snavb.style.marginLeft = "0";
  snavb.innerHTML = "Show Sidebar";
  snavb.onclick = showSide;
}


document.addEventListener('DOMContentLoaded', function(){
  const px20text = 'font-weight: bold; font-size: 20px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)';
  const px15text = 'font-weight: bold; font-size: 15px; color: aqua; text-shadow: 1px 1px 0 rgb(217,31,38)';
  console.log('%cHello Internet Citizen. Welcome to the JavaScript console of wilburwilliams.uk.', 'font-weight: bold; font-size: 30px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)');
  console.log('%cThe source code for this site is available at https://github.com/ThisCatLikesCrypto/Website', px20text)
  console.log('%cPlease do not steal large amounts of code before getting permission from me, or pass this off as your own. This should be obvious, but some people can be straight-up bad people sometimes.', px20text);
  console.log('%cOther than that do whatever you feel like here.', px20text);
  console.log('%cNote that some of this is written in dreamland.js, so some of the content is dynamically loaded from JavaScript.', px15text);
  console.log('%cDreamland source is available at https://github.com/MercuryWorkshop/DreamlandJS', px15text);
  console.log("%cIf my source code is erm... not the greatest then feel free to tell me how to improve just don't be unkind about it.", px15text);
});