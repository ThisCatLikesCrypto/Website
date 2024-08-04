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
    embedCode = '<a href="https://wilburwilliams.uk" target="_blank"><img src="https://cdn.jsdelivr.net/gh/ThisCatLikesCrypto/Website@active-dev/assets/button.gif" alt="wilburwilliams.uk (spinny cat icon)></a>'
  
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
});

setInterval(function(){
    document.getElementById('mytime').innerHTML = getUKTime();
}, 1000);