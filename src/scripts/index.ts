export { }; // sybau TS

// --- Music Player Code ---
const songList = [
    "/assets/scatteredcells.opus",
    "https://eyescary-development.github.io/CDN/musik/ESDP2/BHP_IS_A_ONE_CENT_STOCK_FRAUD.mp3",
    "https://eyescary-development.github.io/CDN/musik/DRUMNBASS/DRUMNBASS1.mp3",
];

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function shuffleArray<T>(array: T[]): T[] {
    let currentIndex: number = array.length,
        temporaryValue: T,
        randomIndex: number;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex] as T;
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let shuffledSongs = shuffleArray([...songList]);
let currentTrack = 0;
var audio = document.getElementById("audioPlayer") as HTMLAudioElement;

function loadTrack(index: number) {
    if (index < 0 || index >= shuffledSongs.length) return;
    audio.src = shuffledSongs[index];
}

loadTrack(currentTrack);
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        const mc = document.getElementById("musiccontrol");
        if (mc) mc.innerHTML = "<span class='fa-play fa-solid'></span>";
    } else {
        audio.play();
        isPlaying = true;
        const mc = document.getElementById("musiccontrol");
        if (mc) mc.innerHTML = "<span class='fa-pause fa-solid'></span>";
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % shuffledSongs.length;
    loadTrack(currentTrack);
    if (isPlaying) {
        audio.play();
    }
}

function prevTrack() {
    currentTrack =
        (currentTrack - 1 + shuffledSongs.length) % shuffledSongs.length;
    loadTrack(currentTrack);
    if (isPlaying) {
        audio.play();
    }
}

audio.addEventListener("ended", function () {
    nextTrack();
});

const splashtext = [
    "Why does this exist again",
    "prefers-reduced-motion: no movement",
    "hmmm, what to put here?",
    "defying gravity",
    "HTML2 is just an archive",
    "Wine Is Not an Emulator",
    "built with VSCode",
    "<a href='https://www.youtube.com/watch?v=M93mt3NzkmM'>This song has no right being this good</a>",
    "<a href='https://www.youtube.com/watch?v=24sx3aFynQI'>1996 stock motors</a>",
    "<img style='height: 32px; width: 32px;' src='https://assets.c48.uk/spinny_cat/spinny_cat_ace.gif' alt='spinny_cat_ace'>",
    "<img style='height: 32px; width: 32px;' src='https://assets.c48.uk/spinny_cat/spinny_cat_aroace.gif' alt='spinny_cat_aroace'>",
    "<img style='height: 32px; width: 32px;' src='https://assets.c48.uk/spinny_cat/spinny_cat_aro.gif' alt='spinny_cat_aro'>",
    "<a href='https://www.youtube.com/watch?v=83CqPViJB0I'>UNIFY</a>",
    "Killer Queen"
];

function choose<T>(choices: T[]): T {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUKTime() {
    const now = new Date();
    const ukTimeFormatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return ukTimeFormatter.format(now);
}


// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", function () {
    (document.getElementById("musiccontrol") as HTMLElement | null)?.addEventListener("click", togglePlay);
    (document.getElementById("prevTrack") as HTMLElement | null)?.addEventListener("click", prevTrack);
    (document.getElementById("nextTrack") as HTMLElement | null)?.addEventListener("click", nextTrack);
    const splashEl = document.getElementById("splash");
    if (splashEl) splashEl.innerHTML = choose(splashtext);
    const mytimeEl = document.getElementById("mytime");
    if (mytimeEl) mytimeEl.innerHTML = getUKTime();
});

setInterval(function () {
    const mytimeEl = document.getElementById("mytime");
    if (mytimeEl) mytimeEl.innerHTML = getUKTime();
}, 1000);

async function displayStatus(response: Response) {
    const statusTableBody = document.querySelector<HTMLTableSectionElement>("#statusTable tbody");
    if (!statusTableBody) return;
    const URLtoname: Record<string, string> = {
        "https://wilburwilliams.uk": "site",
        "https://repo.c48.uk": "mirror",
        "https://de.repo.c48.uk": "german mirror",
        "https://uk.repo.c48.uk": "uk mirror",
        "https://assets.c48.uk": "assets",
    };
    const data = await response.json();
    const entries = Object.entries(data);
    for (let i = 0; i < entries.length; i += 2) {
        const row = document.createElement("tr");
        for (let j = 0; j < 2; j++) {
            const idx = i + j;
            if (idx < entries.length) {
                const [key, value] = entries[idx];
                const statusCode = Number(value);
                const nameCell = document.createElement("td");
                nameCell.textContent = URLtoname[key];
                const statusCell = document.createElement("td");
                statusCell.id = URLtoname[key];
                statusCell.textContent = String(value);
                if (statusCode >= 200 && statusCode < 300) {
                    statusCell.style.color = "limegreen";
                } else if (statusCode >= 300 && statusCode < 400) {
                    statusCell.style.color = "orange";
                } else {
                    statusCell.style.color = "red";
                }
                row.appendChild(nameCell);
                row.appendChild(statusCell);
            } else {
                // Fill empty cells if not enough entries for the last row
                row.appendChild(document.createElement("td"));
                row.appendChild(document.createElement("td"));
            }
        }
        statusTableBody.appendChild(row);
    }
}

async function fetchStatus() {
    const url = "https://oxfbw5zjg2kikumhitruzci2gi0bmugx.lambda-url.eu-west-2.on.aws/";
    try {
        const response = await fetch(url);
        displayStatus(response);
    } catch (error) {
        console.warn("status lambda failed, it does this a lot so will be retried after a 3 second delay");
        await sleep(3000);
        try {
            const response = await fetch(url);
            displayStatus(response);
        } catch (error) {
            console.warn("status lambda failed, it does this a lot so will be retried after a 3 second delay (2)");
            await sleep(3000);
            try {
                const response = await fetch(url);
                displayStatus(response);
            } catch (error) {
                console.error(
                    "There was a problem with the fetch operation:",
                    error,
                );
            }
        }
    }
}
fetchStatus();

// global easter-audio state
let easterAudio: HTMLAudioElement | null = null;
var eaudion = false;

async function songPlay(songURL: string) {
    console.log("You found an easter egg. Enjoy the sound");
    const muct = document.getElementById('musiccontrol') as HTMLElement | null;
    if (muct) {
        muct.innerHTML = "Controls are disabled while easter audio is running";
        muct.onclick = function () { alert("stop trying"); };
    }

    if (easterAudio) {
        try { easterAudio.pause(); } catch { }
    }
    easterAudio = new Audio(songURL);
    eaudion = true;

    try {
        if (audio) audio.pause();
    } catch { }

    await easterAudio.play();
    easterAudio.addEventListener("ended", function () {
        eaudion = false;
        const mc = document.getElementById('musiccontrol') as HTMLElement | null;
        if (mc) {
            mc.innerHTML = "Click to pause music";
            // re-enable regular toggle
            mc.onclick = togglePlay;
        }
        try { audio.play(); } catch { }
    });
}

async function playAprilCells() {
    await songPlay('/assets/aprilscattered.opus');
}

function smoothScroll() {
    const scrollbar = document.getElementById("scrollibit") as HTMLElement | null;
    if (!scrollbar) return;
    const scrollSpeed = 1;

    function scrollStep() {
        if (scrollbar.scrollTop < scrollbar.scrollHeight - scrollbar.clientHeight) {
            scrollbar.scrollTop += scrollSpeed;
            requestAnimationFrame(scrollStep);
        }
    }

    scrollStep();
}

let fadeTimeout: number | undefined;

async function technologyConnectionsOutro(keysContainer: HTMLElement) {
    keysContainer.innerHTML = "Connecting to Technology...";
    await sleep(1000);
    await songPlay('/assets/floaters.ogx');
    console.log('hmmm');
    keysContainer.style.opacity = "1";
    keysContainer.innerHTML = '♫ connectedly smooth jazz ♫';
    await sleep(250);
    keysContainer.style.opacity = "1";
    await sleep(250);
    keysContainer.style.opacity = "1";
    fadeTimeout = window.setTimeout(() => {
        keysContainer.style.opacity = "0";
        keysContainer.style.color = "white";
        keys = [];
    }, 2000);
    await sleep(12750);
    const mainelement = document.getElementById('main') as HTMLElement;
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
    keysContainer.style.opacity = "1";
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
    keysContainer.style.opacity = "0";
    await sleep(1000);
    window.location.reload();
}

async function killerQueen() {
    await songPlay('/assets/killerqueen.opus');
}

function disableCodes() {
    // by making it error lol
    const keysContainer = document.getElementById('keys-container');
    if (keysContainer) keysContainer.outerHTML = "";
}

// Feel free to cheat if you want lmao
async function handleKeyPress(event: KeyboardEvent) {
    const keysContainer = document.getElementById('keys-container') as HTMLElement | null;
    if (!keysContainer) return;
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
    const obsidianSphereAlternate = "KeySKeyPKeyHKeyEKeyRKeyE";
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
    } else if (keys.join("").endsWith(obsidianSphereCode) || keys.join("").endsWith(obsidianSphereAlternate)) {
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
    const keysContainer = document.getElementById('keys-container') as HTMLElement;
    let keysdotjoin = keys.join(' ').replace(/Key/g, '');
    keysContainer.innerHTML = keysdotjoin;
    keysContainer.style.opacity = "1";
    if (fadeTimeout !== undefined) {
        clearTimeout(fadeTimeout);
    }
    fadeTimeout = window.setTimeout(() => {
        keysContainer.style.opacity = "0";
        keysContainer.style.color = "white";
        keys = [];
    }, 2000);
}

let keys: string[] = [];
window.addEventListener("keyup", handleKeyPress);

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

    (document.getElementById('close-obsidian-sphere') as HTMLElement | null)!.onclick = () => {
        overlay.remove();
    };

    const copyButton = document.getElementById('copy-obsidian-text') as HTMLButtonElement | null;
    if (copyButton) {
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

document.getElementById("catButton")!.addEventListener("click", catGoMeow);

function copyBtnEmbed() {
    const embedCode = '<a href="https://wilburwilliams.uk" target="_blank"><img src="https://wilburwilliams.uk/assets/button.gif" alt="wilburwilliams.uk (spinny cat icon)></a>'

    navigator.clipboard.writeText(embedCode).then(function () {
        alert("Copied Embed Code");
    }, function (err) {
        console.error("Could not copy text: ", err);
    });
}

document.getElementById("buttona")!.addEventListener("click", copyBtnEmbed);