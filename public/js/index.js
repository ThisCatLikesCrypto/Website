var eaudion = false;
var splashtext = ["Why does this exist again", "prefers-reduced-motion: no movement", 
  "hmmm, what to put here?", "defying gravity", "HTML2 is just an archive", "Wine Is Not an Emulator",
  "built with VSCode", "<a href='https://www.youtube.com/watch?v=M93mt3NzkmM'>This song has no right being this good</a>",
  "<a href='https://www.youtube.com/watch?v=24sx3aFynQI'>1996 stock motors</a>",
  "<img style='height: 32px; width: 32px;' src='/images/spinny_cat_ace.gif' alt='spinny_cat_ace'>", 
  "<a href='https://www.youtube.com/watch?v=83CqPViJB0I'>UNIFY</a>"];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getUKTime() {
    // Create a Date object for the current date and time
    const now = new Date();
  
    // Format the date and time for the UK timezone
    const ukTimeFormatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  
    // Get the formatted time string
    const ukTime = ukTimeFormatter.format(now);
  
    return ukTime;
  }
  
  function copyBtnEmbed() {
    embedCode = '<a href="https://wilburwilliams.uk" target="_blank"><img src="https://dev.wilburwilliams.uk/assets/button.gif" alt="wilburwilliams.uk (spinny cat icon)></a>'
  
    navigator.clipboard.writeText(embedCode).then(function() {
        alert("Copied Embed Code");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
  
}

function playmusic(){
    if (!eaudion){
      audio.play();
      muct = document.getElementById('musiccontrol');
      muct.innerHTML = "Click to pause music";
      muct.onclick = pausemusic;
      audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        audio.play();
      });
    }
  }

function pausemusic(){
  audio.pause();
  eaudion = false;
  muct = document.getElementById('musiccontrol');
  muct.innerHTML = "Click to resume music";
  muct.onclick = playmusic;
}

document.addEventListener('DOMContentLoaded', async function(){
    document.getElementById('mytime').innerHTML = getUKTime();
    document.getElementById('splash').innerHTML = choose(splashtext);
});

setInterval(function(){
    document.getElementById('mytime').innerHTML = getUKTime();
}, 1000);

// this should be status.cf.wilburwilliams.uk but then it always returns 'down' for dl.wilburwilliams.uk
const url = 'https://ww-status.thiscatlikescrypto.workers.dev/all';

// Function to fetch and decode the JSON response
async function fetchStatus() {
    try {
        // Fetch data from the URL
        const response = await fetch(url);

        // Parse the JSON response
        const data = await response.json();

        console.log(data);

        const siteElement = document.getElementById("sitestatus");
        const devElement = document.getElementById("devstatus");
        const dlElement = document.getElementById("dlstatus");
        const projElement = document.getElementById("projstatus");
        const mirrorElement = document.getElementById("mirrorstatus");

        // Set innerHTML and style based on status
        siteElement.innerHTML = data['site'];
        devElement.innerHTML = data['dev'];
        dlElement.innerHTML = data['dl'];
        projElement.innerHTML = data['proj'];
        mirrorElement.innerHTML = data['repo'];

        // Change text color based on status
        if (data['site'] === '200 OK') {
            siteElement.style.color = 'limegreen';
        } else {
            siteElement.style.color = 'red';
        }
        if (data['dev'] === '200 OK') {
            devElement.style.color = 'limegreen';
        } else {
            devElement.style.color = 'red';
        }
        if (data['dl'] === '200 OK') {
            dlElement.style.color = 'limegreen';
        } else {
            dlElement.style.color = 'red';
        }
        if (data['proj'] === '200 OK') {
            projElement.style.color = 'limegreen';
        } else {
            projElement.style.color = 'red';
        }
        if (data['repo'] === '200 OK') {
            mirrorElement.style.color = 'limegreen';
        } else {
            mirrorElement.style.color = 'red';
        }

    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch and decode the status
fetchStatus();
