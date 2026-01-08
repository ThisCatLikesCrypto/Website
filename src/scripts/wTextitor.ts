import Quill from "quill";
import katex from "katex";

(window as any).katex = katex;

let quill!: Quill; // initialised after DOMContentLoaded
let lengthalerted: number = 0;

//Sleep
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Copy to clipboard
function clipCopy(stuff: string): void {
    try {
        navigator.clipboard?.writeText(stuff).catch((err) => {
            console.log("Copy of text failed " + err);
        });
    } catch (error) {
        console.log("Copy of text failed " + error);
    }
}

//Make HTML out of quill
function quilltoHTML(debug: boolean = false): void {
    try {
        saveLocal();
        console.log("Converting quill to HTML..");
        const ogcontent = quillGetHTML();
        if (debug) {
            console.log(ogcontent);
        }
        let substrings = ogcontent.split(/(?=<)/);
        if (debug) {
            console.log(substrings);
        }
        for (let i = 0; i < substrings.length; i++) {
            substrings[i] += '\n';
        }
        if (debug) {
            console.log(substrings);
        }

        let brrr = substrings.join('')

        //hella replace things (split up so it's not readable but not as bad as if it were one long line)
        brrr = brrr.replace(/class="[^"]*"/g, '');
        brrr = brrr.replace(/ >/g, '>');
        brrr = brrr.replace(/\n<\//g, '</');
        brrr = brrr.replace(/<p>\n<br><\/p>/g, '<br>');
        brrr = brrr.replace(/<p>\n<strong>/g, '<p><strong>');
        brrr = brrr.replace(/ rel="noopener noreferrer" target="_blank"/, '')
        for (let confusion = 0; confusion < 11323; confusion++) { //idk why this is necessary but i cba to find a better solution
            brrr = brrr.replace(/<div  data-language="plain">(.*?)<\/div>/, '<code>$1</code>');
        }

        //I FUCKING HATE HOW QUILL DOES EQUATIONS LIKE THIS, THIS DOES LIKE NOTHING (I moved on because I have better things to do)
        brrr = brrr.replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, '');

        if (debug) {
            console.log(brrr);
        }

        const output = brrr;

        const outEl = document.getElementById('convertedhtml');
        if (outEl) outEl.textContent = output;
        const htmlOut = document.getElementById('htmlout') as HTMLElement | null;
        if (htmlOut) htmlOut.style.display = 'block';
        console.log("..success!")
    } catch (error) {
        console.log("error " + error);
    }
}

//Count characters, runs at 10times/sec
function countChars(): void {
    const nameEl = document.getElementById("name");
    const titlelength = (nameEl?.textContent ?? "").length;
    if (titlelength > 75 && lengthalerted === 0) {
        alert("Shortern your title length!");
        lengthalerted++;
    }
}

//Intitate focus mode (get rid of the explanation bit and widen the editor)
function focusMode(): void {
    console.log("Focus mode on");
    const editor = document.getElementById("editor") as HTMLElement | null;
    const info = document.getElementById("info") as HTMLElement | null;
    const unfoc = document.getElementById("unfoc") as HTMLElement | null;
    const foc = document.getElementById("foc") as HTMLElement | null;

    if (editor) editor.style.width = "100%";
    if (info) info.style.display = "none";
    if (unfoc) unfoc.style.display = "block";
    if (foc) foc.style.display = "none";
    localStorage.setItem('focusMode', "true");
}

function unfocus(): void {
    console.log("Focus mode off")
    const editor = document.getElementById("editor") as HTMLElement | null;
    const info = document.getElementById("info") as HTMLElement | null;
    const foc = document.getElementById("foc") as HTMLElement | null;
    const unfoc = document.getElementById("unfoc") as HTMLElement | null;

    if (editor) editor.style.width = "70%";
    if (info) info.style.display = "block";
    if (foc) foc.style.display = "block";
    if (unfoc) unfoc.style.display = "none";
    localStorage.setItem('focusMode', "false");
}

//Save and saveload functions
function save(q: Quill): string {
    console.log('Saving changes');
    const data = JSON.stringify(q.getContents());
    return data;
}

function saveLocal(): void {
    try {
        const stuff = save(quill);
        localStorage.setItem('storedText', stuff);
        const nameEl = document.getElementById('name');
        localStorage.setItem('docTitle', nameEl?.textContent ?? "Untitled Document");
        console.log("..success!");
    } catch (error) {
        console.log("failed to save to local storage. error: " + error);
    }
}

function dlSave(): void {
    console.log("dlSave requested");
    let textFile: string | null = null;
    const makeTextFile = (text: string) => {
        const data = new Blob([text], { type: 'text/json' });
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        return textFile;
    };
    const link = document.createElement('a');
    const nameEl = document.getElementById("name");
    link.setAttribute('download', (nameEl?.textContent ?? "Untitled Document") + ".wtext");
    link.href = makeTextFile(save(quill));
    try {
        link.click();
        console.log("successfully downloaded text file");
    } catch (error) {
        console.log("download failed " + error);
    }
}

function upSave(): void {
    console.log("upSave requested");
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) return;

        if (file.name.endsWith(".wtext")) {
            const nameEl = document.getElementById('name');
            if (nameEl) nameEl.textContent = file.name.split(".")[0];
        }
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            const content = readerEvent.target?.result;
            if (typeof content === 'string') {
                try {
                    const data = JSON.parse(content);
                    console.log(data);
                    quill.setContents(data);
                } catch (err) {
                    console.log("Invalid file content: " + err);
                }
            }
        };
    };
    try {
        input.click();
        console.log("load success!");
    } catch (error) {
        console.log("upload failed " + error);
    }
}

//Function to get HTML from a quill delta
function quillGetHTML(inputDelta?: any): string {
    console.log("Get Quill HTML");
    let convhtml = "";
    try {
        let delta = inputDelta;
        if (!delta) {
            const stored = localStorage.getItem('storedText');
            delta = stored ? JSON.parse(stored) : (quill ? quill.getContents() : null);
        }
        if (!delta) return "";
        const tempCont = document.createElement("div");
        (new Quill(tempCont)).setContents(delta);
        const editorEl = tempCont.getElementsByClassName("ql-editor")[0] as HTMLElement | undefined;
        convhtml = editorEl?.innerHTML ?? "";
        console.log("..success!");
    } catch (error) {
        console.log("Quill HTML get failed. " + error);
    }
    return convhtml;
}

//Set quill to an empty string. Just disables all quill functions. Not sure why you need this.
function killQuill(): void {
    if (quill) {
        quill.disable();
        console.log("quill disabled. saving and loading will not apply while disabled");
    }
}

//Custom handler functions for the video link input (turns it into embedded links)
function getVideoUrl(url: string): string {
    let match =
        url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || //Yes this is a pain to decipher, I had bing do it
        url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);

    if (match && match.length >= 3) {
        return `https://www.youtube.com/embed/${match[2]}?showinfo=0`;
    }

    match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
    if (match && match.length >= 3) {
        return `https://player.vimeo.com/video/${match[2]}/`;
    }

    return "invalid";
}

function videoHandler(): void {
    console.log("Video embed button triggered");
    let url = prompt("Enter Video URL:"); // Prompt the user for the video URL

    if (url) {
        url = getVideoUrl(url); // Convert the URL to an embeddable format
        if (url === "invalid") {
            alert("invalid url provided (needs youtube or vimeo, defaulting to.. well...)");
            url = "https://www.youtube.com/embed/dQw4w9WgXcQ?showinfo=0"
            console.log("invalid url, defaulting to rickroll");
        }

        const range = quill.getSelection(true);
        const index = range ? range.index : quill.getLength();
        quill.insertEmbed(index, "video", url, "user");
        quill.setSelection(index + 1, 0, "user");
    } else {
        console.log("Invalid video URL provided.");
    }
}

function updateTheme(): void {
    let themething = getCookie("theme");
    if (themething === "") {
        themething = "/css/themes/surface.css"
    }
    const el = document.getElementById("them") as HTMLLinkElement | null;
    if (el) el.href = themething;
}

function setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string): string {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changeTheme(theme: string): void {
    const themething = "/css/themes/" + theme + ".css"
    const el = document.getElementById("them") as HTMLLinkElement | null;
    if (el) el.href = themething;
    setCookie("theme", themething, 180);
}

//Essentially the main function, cuz quill needs the page to be loaded first (ik it's not a function)
document.addEventListener('DOMContentLoaded', () => {

    //Only init quill after everything has loaded because otherwise it throws an error :shrug:
    console.log("initalise quill");
    const fontSizeArr: string[] = ['8px', '9px', '10px', '12px', '14px', '16px', '20px', '24px', '32px', '42px', '54px', '68px', '84px', '98px'];
    try {
        const Delta: any = Quill.import('delta');
        const Size: any = Quill.import('attributors/style/size');
        Size.whitelist = fontSizeArr;
        Quill.register(Size, true);
        const toolbarOptions = {
            container: [ //All the toolbar shit
                [{ 'font': [] }, { 'size': fontSizeArr }],
                ['bold', 'italic', 'underline', 'strike'],
                ['link', 'image', 'video'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }, { 'align': [] }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'header': 1 }, { 'header': 2 }],
                ['blockquote', 'code-block', 'formula'],
                ['clean']
            ],
            handlers: {
                video: videoHandler
            }
        };

        quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });

    } catch (error) {
        console.log("quill broke with " + error);
        const h1 = document.getElementById('infoh1');
        const p1 = document.getElementById('infop1');
        const p2 = document.getElementById('infop2');
        const p3 = document.getElementById('infop3');
        if (h1) h1.innerHTML = "quill failed to load.";
        if (p1) p1.innerHTML = "Please refresh the page. If this this issue persists, please create an issue on <a href='https://github.com/ThisCatLikesCrypto/Website'>https://github.com/ThisCatLikesCrypto/Website</a>";
        if (p2) p2.innerHTML = "Error is " + error;
        if (p3) p3.innerHTML = "Please remember that this is still in alpha, and all feedback is welcome!";
    }

    console.log("load previous save");
    try {
        const stored = localStorage.getItem('storedText');
        if (stored) {
            const data = JSON.parse(stored);
            quill.setContents(data);
            console.log(data);
        }
        const doctitle = localStorage.getItem('docTitle');
        const nameEl = document.getElementById('name');
        if (nameEl) {
            nameEl.textContent = doctitle && doctitle.trim().length > 0 ? doctitle : "Untitled Document";
        }
        console.log("..success!");
    } catch (error) {
        console.log("save failed to load. If this is the first load, ignore this. Otherwise create an issue on https://github.com/ThisCatLikesCrypto/Website " + error);
    }

    // track changes (kept as any to avoid type issues)
    const Delta: any = Quill.import('delta');
    let change: any = new Delta();
    quill.on('text-change', function (delta: any) {
        change = change.compose(delta);
    });

    if (localStorage.getItem('focusMode') === 'true') {
        focusMode();
    }

    setInterval(saveLocal, 10000)
    setInterval(countChars, 500);

    // Replace inline onclicks with event listeners
    const byId = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T | null;

    byId('file-save')?.addEventListener('click', (e) => { e.preventDefault(); saveLocal(); });
    byId('file-download')?.addEventListener('click', (e) => { e.preventDefault(); dlSave(); });
    byId('file-upload')?.addEventListener('click', (e) => { e.preventDefault(); upSave(); });
    byId('file-html-convert')?.addEventListener('click', (e) => { e.preventDefault(); quilltoHTML(); });

    document.querySelectorAll('.theme-option').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const theme = (el as HTMLElement).getAttribute('data-theme');
            if (theme) changeTheme(theme);
        });
    });

    byId('foc')?.addEventListener('click', (e) => { e.preventDefault(); focusMode(); });
    byId('unfoc')?.addEventListener('click', (e) => { e.preventDefault(); unfocus(); });

    byId('mainheader')?.addEventListener('click', () => alert('Stands for Wilbur Text Editor'));
});