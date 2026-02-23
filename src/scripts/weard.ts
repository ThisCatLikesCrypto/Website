export {}; // SHUT UP

var cokcl = 0;
var cursorAmount = 0;
var procursorAmount = 0;
var farmAmount = 0;
var factoryAmount = 0;
var msg = "";
var cookiesGainedByClicking = 1;
var priceocur = 5;
var priceoprocur = 10;
var priceofarm = 100;
var priceofactory = 1000;

function saveCookie(name: string, saveString: string) {
    // Set the cookie with a 10-year expiration
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10);
    let expires = "expires=" + expirationDate.toUTCString();
    let stringToCookie = name + "=" + saveString + ";" + expires + ";path=/";
    document.cookie = stringToCookie;
}

function readCookie(cookieName: string): string {
    const cookies = document.cookie.split(';');
    console.log(cookies)
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }
    return ""; // no cookie :c
}
const writeToTextFile = (text: string, fileName: string) => {
    let textFile: string = "";
    const makeTextFile = (text: string) => {
        const data = new Blob([text], {
            type: 'text/plain',
        });
        if (textFile !== "") {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };
    const link = document.createElement('a');
    link.setAttribute('download', fileName);
    link.href = makeTextFile(text);
    link.click();
};
// Encodes Saves
function encodeV001() {
    const header = "cokclv001";
    let saveString = header + "-" + "AA" + cokcl + "AB" + cookiesGainedByClicking + "BA" + cursorAmount + "BB" +
        procursorAmount + "BC" + farmAmount + "CA" + factoryAmount;
    return saveString;
}
// Decodes Saves
function decodeV001(saveString: string) {
    console.log("Decoding with " + saveString);
    if (saveString.split("-")[0] === "cokclv001") {
        saveString = saveString.substring("cokclv001-".length);
    } else {
        console.log("Save does not start with 'cokclv001', wrong format.");
    }
    cokcl = parseInt(saveString.split("AA")[1].split("AB")[0]);
    cookiesGainedByClicking = parseInt(saveString.split("AB")[1].split("BA")[0]);
    cursorAmount = parseInt(saveString.split("BA")[1].split("BB")[0]);
    procursorAmount = parseInt(saveString.split("BB")[1].split("BC")[0]);
    farmAmount = parseInt(saveString.split("BC")[1].split("CA")[0]);
    factoryAmount = parseInt(saveString.split("CA")[1]);
    console.log(
        `cokcl: ${cokcl}, cookiesGainedByClicking: ${cookiesGainedByClicking}, cursorAmount: ${cursorAmount}, procursorAmount: ${procursorAmount}, farmAmount ${farmAmount}, factoryAmount ${factoryAmount}.`
    );
}

function save() {
    try {
        var saveString = encodeV001();
        saveCookie("cokclSave", saveString);
        console.log("Game Saved with " + saveString)
    } catch (error: any) {
        console.log(
            "Game failed to save. Please raise an issue on https://github.com/ThisCatLikesCrypto/Website.")
        console.log("Error: " + error.message);
    }
}

function saveload() {
    try {
        let saveFile: string = readCookie('cokclSave');
        decodeV001(saveFile);
        console.log("Game Loaded with " + saveFile);
    } catch (error: any) {
        console.log(
            "Game failed to load. If this is the first load, ignore this. Otherwise please raise an issue on https://github.com/ThisCatLikesCrypto/Website."
        );
        console.log("Error is " + error.message);
    }
}

function quickRun() {
    if (farmAmount > 0) {
        priceofarm = 100 * farmAmount;
        (document.getElementById("farmby") as HTMLElement).innerHTML = priceofarm.toString();
    }
    if (cursorAmount > 0) {
        priceocur = 5 * cursorAmount;
        (document.getElementById("curby") as HTMLElement).innerHTML = priceocur.toString();
    }
    if (procursorAmount > 0) {
        priceoprocur = 10 * procursorAmount;
        (document.getElementById("procurby") as HTMLElement).innerHTML = priceoprocur.toString();
    }
    if (factoryAmount > 0) {
        priceofactory = 1000 * factoryAmount;
        (document.getElementById("factoryby") as HTMLElement).innerHTML = priceofactory.toString();
    }
}

function updateCount() {
    let stats = "Du hast: " + cokcl + " cokie(s), " + cursorAmount + " cursor(s), " + procursorAmount +
        " pro cursor(s), " + farmAmount + " farm(s), " + factoryAmount + " factory(s).";
    (document.getElementById("cps") as HTMLElement).innerHTML = "You're generating " + (cursorAmount + (procursorAmount * 2) + (
        farmAmount * 10) + (factoryAmount * 100)) + " cokies automatically per second.";
    (document.getElementById("counter") as HTMLElement).innerHTML = stats;
    document.title = Math.round(cokcl) + " cokies - Cokie Cliker";
}

function runner() {

    cokcl += 1 * cursorAmount;
    cokcl += 2 * procursorAmount;
    cokcl += 10 * farmAmount;
    cokcl += 100 * factoryAmount;
    updateCount();

    if (cokcl > 100000) {
        msg = "International expansion, you have taken over all cokie production in the world."
    } else if (cokcl > 10000) {
        msg =
            "Huge monopoly, you bought out all the cokie businesses in your country and are the only cokie company left";
    } else if (cokcl > 1000) {
        msg = "Massive corporation, the county enjoys your cokies";
    } else if (cokcl > 100) {
        msg = "Local enterprise, you have many happy customers";
    } else if (cokcl > 10) {
        msg = "Beginner business: Supplying stuff for the girl scout group";
    } else {
        msg = "Your business just begun, have fun!";
    }
    (document.getElementById("messages") as HTMLElement).innerHTML = msg;

    save();

    quickRun();
}

function cookieClicked() {
    cokcl += cookiesGainedByClicking;
    updateCount();
}

function buyProCursor() {
    if (cokcl > priceoprocur) {
        cokcl -= priceoprocur;
        procursorAmount += 1;
    }
    quickRun();
}

function buyCursor() {
    if (cokcl > priceocur) {
        cursorAmount += 1;
        cokcl -= priceocur;
    }
    quickRun(); // quick, run!
}

function buyfarm() {
    if (cokcl > priceofarm) {
        farmAmount += 1;
        cokcl -= priceofarm;
    }
    quickRun();
}

function buyfactory() {
    if (cokcl > priceofactory) {
        factoryAmount += 1;
        cokcl -= priceofactory;
    }
    quickRun();
}

function downloadSave() {
    let saveString = encodeV001();
    writeToTextFile(saveString, "Cokie Cliker Save");
}

function uploadSave() {
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
        var target = e.target;
        if (!(target instanceof HTMLInputElement) || !target.files || target.files.length === 0) { // again, sybau TS
            return;
        }
        var file = target.files[0];
        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (readerEvent: any) => {
            var content = readerEvent.target.result;
            decodeV001(content);
            runner();
        };
    };
    input.click();
}
saveload();
setInterval(runner, 1000)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cookieBtn')?.addEventListener('click', cookieClicked);
    document.getElementById('downSave')?.addEventListener('click', downloadSave);
    document.getElementById('upSave')?.addEventListener('click', uploadSave);
    document.getElementById('buyCursorBtn')?.addEventListener('click', buyCursor);
    document.getElementById('buyProCursorBtn')?.addEventListener('click', buyProCursor);
    document.getElementById('buyFarmBtn')?.addEventListener('click', buyfarm);
    document.getElementById('buyFactoryBtn')?.addEventListener('click', buyfactory);
    updateCount();
    quickRun();
});