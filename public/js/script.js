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


//Feel free to cheat if you want lmao
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
    document.body.style = "background: white";
    document.body.innerHTML = `<h1 style='text-align: center;'>404 Not Found</h1><hr><p style='text-align: center;'>Cloudflare</p>`;
}
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