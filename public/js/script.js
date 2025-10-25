var eaudion = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function songPlay(songURL) {
    console.log("You found an easter egg. Enjoy the sound");
    try {
        const muct = document.getElementById('musiccontrol')
        muct.innerHTML = "Controls are disabled while easter audio is running";
        muct.onclick = function () { alert("stop trying") };
    } catch {
        console.log("djsifsd");
    }
    if (easterAudio) {
        easterAudio.pause();
        easterAudio = new Audio(songURL);
    } else {
        var easterAudio = new Audio(songURL);
    }

    eaudion = true;

    try {
        const audio = document.getElementById('audioPlayer');
    } catch {
        console.log("djsifsd2");
    }

    try {
        if (audio) {
            audio.pause();
        }
    } catch {
        console.log("djsifsd3");
    }


    easterAudio.play();
    easterAudio.addEventListener("ended", function () {
        eaudion = false;
        try {
            const muct = document.getElementById('musiccontrol');
            muct.innerHTML = "Click to pause music";
            muct.onclick = pausemusic;
            audio.play();
        } catch {
            console.log("djsifsd2");
        }
    });
}

async function playAprilCells() {
    await songPlay('/assets/aprilscattered.opus');
}

function smoothScroll() {
    let scrollbar = document.getElementById("scrollibit");
    let scrollSpeed = 1;

    function scrollStep() {
        if (scrollbar.scrollTop < scrollbar.scrollHeight - scrollbar.clientHeight) {
            scrollbar.scrollTop += scrollSpeed;
            requestAnimationFrame(scrollStep);
        }
    }

    scrollStep();
}

async function technologyConnectionsOutro(keysContainer) {
    keysContainer.innerHTML = "Connecting to Technology...";
    await sleep(1000);
    await songPlay('/assets/floaters.ogx');
    console.log('hmmm');
    keysContainer.style.opacity = 1;
    keysContainer.innerHTML = '♫ connectedly smooth jazz ♫';
    await sleep(250);
    keysContainer.style.opacity = 1;
    await sleep(250);
    keysContainer.style.opacity = 1;
    fadeTimeout = setTimeout(() => {
        keysContainer.style.opacity = 0;
        keysContainer.style.color = "white";
        keys = [];
    }, 2000);
    await sleep(12750);
    const mainelement = document.getElementById('main');
    mainelement.innerHTML = '';
    const stfuconsole = document.createElement('span');
    stfuconsole.id = 'mytime';
    stfuconsole.style.display = 'none';
    document.body.style.background = 'black';
    await sleep(1000);
    mainelement.innerHTML = `
  <div class="techdivdiv">
    <div id="scrollbar">
      <h2>Fake Names</h2>
      <div id="scrollibit">
        <ul>
         <li>Vanessa Fields</li>
         <li>Jennifer Mcdaniel</li>
         <li>Daniel Delgado</li>
         <li>Alyssa Clark</li>
         <li>David James</li>
         <li>Jeffery Hamilton</li>
         <li>Amanda Morris</li>
         <li>Tina Martinez</li>
         <li>Brian Wright</li>
         <li>Sir Kyle Garcia</li>
         <li>Rebecca Malone</li>
         <li>David Brewer</li>
         <li>Stephanie Brown</li>
         <li>Morgan Jackson</li>
         <li>Joshua Francis</li>
         <li>Tricia Edwards</li>
         <li>Caroline Jones</li>
         <li>Christy Novak</li>
         <li>Robert Williams</li>
         <li>Nicole Gonzalez</li>
         <li>Richard Jacobs</li>
         <li>Terry Hunt</li>
         <li>Perry Wheeler</li>
         <li>Brandi Campbell</li>
         <li>Amber Smith</li>
         <li>Craig Peterson</li>
         <li>Brittney Smith</li>
         <li>Janet Gould</li>
         <li>Carla Wright</li>
         <li>Louis Perez</li>
         <li>Jennifer Gonzalez</li>
         <li>Austin Martin</li>
         <li>Todd Gross</li>
         <li>Michael Allen</li>
         <li>David Williamson</li>
         <li>Donna Lara</li>
         <li>Kimberly Hall</li>
         <li>Rebecca Griffith</li>
         <li>Kimberly Waller CBE</li>
         <li>Jennifer Black</li>
         <li>Scott Watson</li>
         <li>Derek Evans</li>
         <li>Brandy Gutierrez</li>
         <li>Cindy Chen</li>
         <li>Margaret Richmond</li>
         <li>Christopher Watts</li>
         <li>Nicholas Edwards</li>
         <li>Lynn Elliott</li>
         <li>Stephanie Moyer</li>
         <li>Amanda Lynch</li>
         <li>Christopher Vance</li>
         <li>Matthew Mccarthy</li>
         <li>Blake Raymond</li>
         <li>Mark Herrera</li>
         <li>Heather Sanchez</li>
         <li>Melissa Williamson</li>
         <li>Matthew Johnson</li>
         <li>Tiffany Sullivan</li>
         <li>Ashley Sharp</li>
         <li>Michelle Lopez</li>
         <li>Aaron Johnson</li>
         <li>Francisco Suarez</li>
         <li>Amy Gill</li>
         <li>Joseph Roberts</li>
         <li>Dr. Christopher Mccoy</li>
         <li>Christopher Thompson</li>
         <li>David Murphy</li>
         <li>Edward Rivera</li>
         <li>Lauren Gregory</li>
         <li>Edward Melton</li>
         <li>David Smith</li>
         <li>Nicholas Johnson</li>
         <li>Dan Woods</li>
         <li>Erin Hill</li>
         <li>Melissa Romero</li>
         <li>James Weaver</li>
         <li>Lily Radley</li>
         <li>Shannon Jones</li>
         <li>Michael Dunn</li>
         <li>Christopher Vasquez</li>
         <li>Michael Henry</li>
         <li>Anthony Ray</li>
         <li>Kieran Lynch</li>
         <li>Madeline Church</li>
         <li>Kayla Hart</li>
         <li>Michelle Phillips</li>
         <li>Paul Hernandez</li>
         <li>Amanda Evans</li>
         <li>Kelsey Wells</li>
         <li>John Thomas</li>
         <li>Alison Jackson</li>
         <li>Sue Barber</li>
         <li>Jose Lopez</li>
         <li>Jasper Cayley</li>
         <li>Anne Preston</li>
         <li>Elizabeth Sanford</li>
         <li>Linda Coleman</li>
         <li>Sarah Ramsey</li>
         <li>Samantha Adams DVM</li>
         <li>Jamie Marsh</li>
         <li>Christopher Miller</li>
         <li>Miss Rhonda Roy MD</li>
         <li>Matthew Thomas</li>
         <li>Melanie Lewis</li>
         <li>Jerry Turner</li>
         <li>Jason Hansen</li>
         <li>Cheryl Lam</li>
         <li>James Johnson</li>
         <li>Ariana Sanders</li>
         <li>Aaron Quinn</li>
         <li>John Finley</li>
         <li>Tracey Morales</li>
         <li>Jennifer Broadbent</li>
         <li>Bianca Marsh</li>
         <li>Vivian Harris</li>
         <li>Chris Spencer</li>
         <li>Hannah Johnson</li>
         <li>Sudbury Town</li>
         <li>Samuel Caulfield</li>
         <li>Crisitan Gherb</li>
         <li>Rachel Corr</li>
         <li>Digit1</li>
         <li>beeps</li>
         <li>Alexander the Great</li>
         <li>Theodore Roosevelt</li>
         <li>Johnny Cash</li>
         <li>Bill Gates</li>
         <li>Steve Jobs</li>
         <li>Mark Zuckerberg</li>
         <li>Elongated Muskrat</li>
         <li>Jeff Bezos</li>
       </ul>
      </div>
    </div>
    <div id="picturething">
      <video src='https://assets.c48.uk/videos/commits.webm' muted autoplay></video>
    </div>
  </div>
  `;
    document.body.appendChild(stfuconsole);
    smoothScroll();
    await sleep(48000);
    document.getElementById('main').innerHTML = '';
    keysContainer.style.opacity = 1;
    keysContainer.innerHTML = 'Hope you enjoyed this thing lol';
    await sleep(3000);
    keysContainer.innerHTML = 'And I hope at least one person gets the reference';
    await sleep(3000);
    keysContainer.innerHTML = "Did you know there's more song than you thought?";
    await sleep(3000);
    keysContainer.innerHTML = "It has a proper ending";
    await sleep(3000);
    keysContainer.innerHTML = "Listen:";
    await sleep(3000);
    keysContainer.innerHTML = "";
    await sleep(25000);
    keysContainer.innerHTML = "Cya and thank you for listening! <3";
    await sleep(3000);
    keysContainer.style.opacity = 0;
    await sleep(1000);
    window.location.reload();
}

async function killerQueen() {
    await songPlay('/assets/killerqueen.opus');
}

function disableCodes() {
    // by making it error lol
    const keysContainer = document.getElementById('keys-container');
    keysContainer.outerHTML = "";
}

// Feel free to cheat if you want lmao
async function handleKeyPress(event) {
    const keysContainer = document.getElementById('keys-container');
    keys.push(event.code);
    keys = keys.slice(-15);
    console.log(keys);

    displayKeys();

    const konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA";
    const fnafCode = "KeyFKeyNKeyAKeyF";
    const sweeney = "KeySKeyWKeyEKeyEKeyNKeyEKeyY";
    const idea = "KeyIKeyDKeyEKeyA";
    const jasperCode = "KeyJKeyAKeySKeyPKeyEKeyR";
    const graphs = "KeyGKeyRKeyAKeyPKeyHKeyS";
    const rm = "KeyRKeyMMinusKeyRKeyFSlash";
    const connect = "KeyCKeyOKeyNKeyNKeyEKeyCKeyT";
    const killerqueen = "KeyKKeyIKeyLKeyLKeyEKeyRKeyQKeyUKeyEKeyEKeyN";
    const killerqueenwithspace = "KeyKKeyIKeyLKeyLKeyEKeyRSpaceKeyQKeyUKeyEKeyEKeyN";
    const overcharge = "KeyOKeyVKeyEKeyRKeyCKeyHKeyAKeyRKeyGKeyE";
    const trains = "KeyTKeyRKeyAKeyIKeyNKeyS";
    const obsidianSphereCode = "KeyOKeyBKeySKeyIKeyDKeyIKeyAKeyN";
    const instructions = "KeyIKeyNKeySKeyTKeyRKeyUKeyCKeyTKeyIKeyOKeyNKeyS";

    if (keys.join("") === konamiCode) {
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
        document.body.innerHTML = `<h1 style='text-align: center;'>404 Not Found</h1><hr><p style='text-align: center;'>nginx</p>`;
    } else if (keys.join("").endsWith(graphs)) {
        keysContainer.style.color = "lime";
        await sleep(500);
        window.location.href = "https://jasperweb.uk/Graphs/Graphs";
    } else if (keys.join("").endsWith(connect)) {
        await sleep(250);
        keysContainer.style.color = "lime";
        await sleep(250);
        technologyConnectionsOutro(keysContainer);
    } else if (keys.join("").endsWith(killerqueen) || keys.join("").endsWith(killerqueenwithspace)) {
        keysContainer.style.color = "lime";
        await sleep(500);
        killerQueen();
    } else if (keys.join("").endsWith(overcharge)) {
        keysContainer.style.color = "lime";
        await sleep(500);
        document.body.innerHTML += "<div class='video-overlay'><iframe class='vido' src='videoplayer.html?url=https://assets.c48.uk/videos/battery_overcharging.mp4' frameborder='0' allowfullscreen></iframe></div>";
        // check if https://images-ext-1.discordapp.net/external/z52jIjvYpYuLVnUh1FacblC_ZvV4sKE2rwWWKH946Pw/https/r2.wilburwilliams.com/Battery%2520overcharging%2520to%2520ABSOLUTE%2520INFINITY%2520PERCENT%21%21%21.mp4 still works regularly
        disableCodes();
    } else if (keys.join("").endsWith(trains)) {
        keysContainer.style.color = "lime";
        await sleep(500);
        document.body.innerHTML += "<div class='video-overlay'><iframe class='vido' src='videoplayer.html?url=https://assets.c48.uk/videos/Underground_Sync.webm' frameborder='0' allowfullscreen></iframe></div>";
        disableCodes();
    } else if (keys.join("").endsWith(obsidianSphereCode)) {
        keysContainer.style.color = "#0ff";
        await sleep(500);
        showObsidianSpherePrompt();
    } else if (keys.join("").endsWith(instructions)) {
        keysContainer.style.color = "aqua";
        await sleep(500);
        criticismAndReview();
        await songPlay('/assets/instructions.mp3');
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

function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    if (check == true) {
        console.warn("Mobile is still in beta on this site.");
    }
};

function catGoMeow() {
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

function hideSide() {
    snav = document.getElementById("sidenav");
    snavb = document.getElementById("sidenavbtn");
    snav.style.display = "none";
    snavb.style.marginLeft = "0";
    snavb.innerHTML = "Show Sidebar";
    snavb.onclick = showSide;
}

function copyBtnEmbed() {
    embedCode = '<a href="https://wilburwilliams.uk" target="_blank"><img src="https://wilburwilliams.uk/assets/button.gif" alt="wilburwilliams.uk (spinny cat icon)></a>'

    navigator.clipboard.writeText(embedCode).then(function () {
        alert("Copied Embed Code");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const px20text = 'font-weight: bold; font-size: 20px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)';
    const px15text = 'font-weight: bold; font-size: 15px; color: aqua; text-shadow: 1px 1px 0 rgb(217,31,38)';
    console.log('%cHello Internet Citizen. Welcome to the JavaScript console of wilburwilliams.uk.', 'font-weight: bold; font-size: 30px; color: aqua; text-shadow: 2px 2px 0 rgb(217,31,38)');
    console.log('%cThe source code for this site is available at https://github.com/ThisCatLikesCrypto/Website', px20text)
    console.log('%cPlease do not steal large amounts of code before getting permission from me, or pass this off as your own. This should be obvious, but some people can be straight-up bad people sometimes.', px20text);
    console.log('%cOther than that do whatever you feel like here.', px20text);
    console.log("%cIf my source code is erm... not the greatest then feel free to tell me how to improve just don't be unkind about it.", px15text);
});

async function showObsidianSpherePrompt() {
    // Fetch the obsidianspheres.txt file
    let text = "";
    try {
        const resp = await fetch('/obsidianspheres.txt');
        text = await resp.text();
    } catch (e) {
        text = "THE SPHERES ARE HIDING FROM YOU. (Could not load prompt)";
    }

    const overlay = document.createElement('div');
    overlay.id = "obsidian-sphere-overlay";

    const sphere = document.createElement('div');
    sphere.innerHTML = `
        <pre class="obsidian-sphere-symbol">
   ⬤
        </pre>
        <h1 class="obsidian-sphere-title">
            THE OBSIDIAN SPHERE MANIFESTO
        </h1>
        <hr class="obsidian-sphere-hr">
        <div class="obsidian-sphere-content">
            <code class="obsidian-sphere-code">
${text.replace(/([A-Z]{2,}[\s.,!])/g, '<span style="color:#0ff; font-weight:bold; font-size:1.2em;">$1</span>')}
            </code>
        </div>
        <button id="close-obsidian-sphere" class="obsidian-sphere-button">
            close
        </button>
        <button id="copy-obsidian-text" class="obsidian-sphere-button">
            copy
        </button>
        <br>
        <br>
    `;
    overlay.appendChild(sphere);

    document.body.appendChild(overlay);

    document.getElementById('close-obsidian-sphere').onclick = () => {
        overlay.remove();
    };

    const copyButton = document.getElementById('copy-obsidian-text');

    copyButton.onclick = () => {
        navigator.clipboard.writeText(text).then(() => {
            copyButton.innerHTML = "copied!";
            setTimeout(() => {
                copyButton.innerHTML = "copy";
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
}

function criticismAndReview() {
    document.body.innerHTML = `
    <h1 id="criticism-and-review-so-this-falls-under-fair-dealing-copyright-be-like-">criticism and review so the lyrics fall
        under fair dealing (copyright be like)</h1>
    <h2 id="overall-assessment">Overall Assessment</h2>
    <ul>
        <li>Purpose: To standardise invigilation announcements and ensure candidates follow JCQ exam rules.</li>
        <li>Tone: Authoritative and serious (appropriate), but occasionally bureaucratic and repetitive.</li>
        <li>Structure: Mostly logical but could be smoother, with less cognitive load on nervous candidates.</li>
        <li>Clarity: Generally clear, though several sentences are dense or slightly awkward for oral delivery.</li>
    </ul>
    <hr>
    <h2 id="detailed-critique">Detailed Critique</h2>
    <h3 id="1-tone-and-delivery">1. Tone and Delivery</h3>
    <p><strong>Strengths:</strong></p>
    <ul>
        <li>The tone reinforces seriousness and fairness.</li>
        <li>The step-by-step delivery provides clear points for invigilators to pause.</li>
    </ul>
    <p><strong>Weaknesses:</strong></p>
    <ul>
        <li>The announcement can feel intimidating and mechanical to already anxious students.</li>
        <li>Phrases like &quot;Failure to do so may lead to disqualification&quot; are necessary but could be softened
            with context or reassurance (for example, &quot;This is a JCQ regulation - please hand in any items now to
            avoid problems later.&quot;).</li>
        <li>The constant imperative commands (&quot;Check your pockets,&quot; &quot;Hand it to an invigilator now,&quot;
            &quot;Do not write anything else&quot;) make the delivery sound punitive rather than procedural.</li>
        <li>Due to the constant commands, you may not have time to actually thoroughly check everything and do as
            you're told. Invigilators should probably make sure everyone is doing these, too.</li>
    </ul>
    <p><strong>Suggestion:</strong> Balance authority with calm reassurance, for example:
        &quot;Please take a moment to check your pockets now and hand in any items you should not have.&quot;</p>
    <hr>
    <h3 id="2-structure-and-flow">2. Structure and Flow</h3>
    <p><strong>Strengths:</strong></p>
    <ul>
        <li>Follows a logical order: materials, conduct, identity of paper, admin details, conduct reminders.</li>
        <li>Includes specific instructions for laptops and equipment.</li>
    </ul>
    <p><strong>Weaknesses:</strong></p>
    <ul>
        <li>Some transitions are abrupt; for example, it jumps from &quot;unauthorised items&quot; to &quot;If books are
            allowed...&quot; without an orienting sentence.</li>
        <li>&quot;In a moment you'll be asked to fill in...&quot; appears too early - it interrupts the sequence of
            pre-exam checks. This should either be at the start or just not included.</li>
        <li>The fire alarm instruction is tacked on at the end, almost as an afterthought.</li>
        <li>It's really bloody long and sitting through this like 25 times gets old fast :sob:</li>
    </ul>
    <p><strong>Suggestion:</strong> Group by theme for smoother pacing:</p>
    <ol>
        <li>Before exam starts: materials, checks, watches, calculators</li>
        <li>Filling details: names, codes, etc.</li>
        <li>During the exam: writing, communication, conduct</li>
        <li>Emergency info: alarms, invigilator help</li>
    </ol>
    <hr>
    <h3 id="3-clarity-and-readability">3. Clarity and Readability</h3>
    <p><strong>Strengths:</strong></p>
    <ul>
        <li>Most sentences are short and simple.</li>
        <li>Key prohibitions (&quot;must not&quot;) are clear and repeated consistently.</li>
    </ul>
    <p><strong>Weaknesses:</strong></p>
    <ul>
        <li>Some lists are cumbersome when spoken (&quot;Notes, Books, Papers, Airpods, Earphones or Earbuds,
            iPods...&quot;).</li>
        <li>Certain phrases are redundant (&quot;hand these into an invigilator now&quot; could just be &quot;hand them
            in now&quot;).</li>
    </ul>
    <p><strong>Suggestion:</strong> Simplify and reformat lists for better oral delivery:
        &quot;Please check your pockets now - that includes phones, notes, earphones, watches, and any other electronic
        devices.&quot;</p>
    <hr>
    <h3 id="4-accessibility-and-inclusivity">4. Accessibility and Inclusivity</h3>
    <ul>
        <li>The pace of delivery might overwhelm candidates with additional needs.</li>
        <li>Phrases like &quot;Laptop users must read the JCQ instructions on the yellow card&quot; assume colour
            visibility; should add &quot;the card placed on your desk&quot; for clarity to colour-blind candidates.</li>
        <li>&quot;Water bottles are to be clear plastic, unlabelled, with a sports cap only&quot; is good for fairness
            but could include &quot;You may keep it on the floor beside your desk.&quot;</li>
        <li>Shortening it and slowing it down a bit is probably in order.</li>
    </ul>
    <p><strong>Suggestion:</strong> Add small inclusivity touches:
        &quot;If you are unsure about anything or need assistance, please raise your hand - we are here to help.&quot;
    </p>
    <hr>
    <h3 id="5-professionalism-and-precision">5. Professionalism and Precision</h3>
    <ul>
        <li>The instruction &quot;Exam boards can, and do, mark you down&quot; is slightly informal and speculative.
        </li>
        <li>&quot;We do hold a small stock of equipment&quot; is friendly but breaks tone consistency - it is
            conversational amid a regulatory announcement.</li>
    </ul>
    <p><strong>Suggestion:</strong> Reword for consistency:
        &quot;If you require any equipment, please raise your hand and ask an invigilator.&quot;</p>
    <hr>
    <h2 id="overall-recommendations">Overall Recommendations</h2>
    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Rating (1-5)</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Clarity</td>
                <td>4</td>
                <td>Mostly clear but overly dense in some places</td>
            </tr>
            <tr>
                <td>Tone</td>
                <td>3</td>
                <td>Too rigid and intimidating for oral delivery</td>
            </tr>
            <tr>
                <td>Structure</td>
                <td>3</td>
                <td>Logical, but could be reordered for smoother flow</td>
            </tr>
            <tr>
                <td>Inclusivity</td>
                <td>4</td>
                <td>Functional but could be more supportive</td>
            </tr>
            <tr>
                <td>Professional polish</td>
                <td>4</td>
                <td>Minor errors and phrasing issues</td>
            </tr>
        </tbody>
    </table>
    <hr>
    `
    document.body.style.color = "white";
}