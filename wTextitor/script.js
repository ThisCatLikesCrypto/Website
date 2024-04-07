var quill = "justfuckingworkplsplspls";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function countChars() {
    var divContent = document.getElementById('editor').textContent;
    var characterCount = divContent.length;
    document.getElementById('charcount').innerHTML = "&nbsp;&nbsp;Characters: " + characterCount;
}

function save(quill) {
    console.log('Saving changes');
    const data = JSON.stringify(quill.getContents());
    return data;
}

function saveLocal(){
    try {
        stuff = save(quill);
        localStorage.setItem('storedText', stuff);
        console.log("..success!");
    } catch(error) {
        console.log("failed to save to local storage. error: " + error);
    }
}

function dlSave(){
    console.log("dlSave requested");
    let textFile = null;
    const makeTextFile = (text) => {
      const data = new Blob ([text], { type: 'text/plain', });
      if (textFile !== null) {
        window.URL.revokeObjectURL (textFile);
      }
      textFile = window.URL.createObjectURL (data);
      return textFile;
    };
    const link = document.createElement ('a');
    link.setAttribute ('download', "texteditSaveFile");
    link.href = makeTextFile(save(quill));
    try {
        link.click();
        console.log("successfully downloaded text file");
    } catch(error) {
        console.log("fuck you :D " + error);
    }
}

function upSave(){
    console.log("upSave requested");
    var input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (readerEvent) => {
        var content = readerEvent.target.result;
        var data = JSON.parse(content);
        console.log(data);
        quill.setContents(data);
      }
    }
    try {
        input.click();
        console.log("load success!");
    } catch(error) {
        console.log("fuck you :D " + error);
    }

}

function killQuill(){
    quill = "";
    console.log("quill killed. saving and loading is broken but it probably still works");
}

function videoHandler() {
    console.log("Video embed button triggered");
    let url = prompt("Enter Video URL:"); // Prompt the user for the video URL
    
    if (url) {
        url = getVideoUrl(url); // Convert the URL to an embeddable format
        if (url == "invalid") {
            alert("invalid url provided (needs youtube or vimeo, defaulting to.. well...)");
            url = "https://www.youtube.com/embed/dQw4w9WgXcQ?showinfo=0"
            console.log("invalid url, defaulting to rickroll");
;       }

        let range = quill.getSelection();
        if (url) {
            quill.insertEmbed(range, "video", url); // Insert the video embed
        }
    } else {
        console.log("Invalid video URL provided.");
    }
}

function getVideoUrl(url) {
    let match =
    url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) ||
    url.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);

    if (match && match.length === 3) {
    return `https://www.youtube.com/embed/${match[2]}?showinfo=0`;
    }

    match = url.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/);
    if (match) {
        return `https://player.vimeo.com/video/${match[1]}/`;
    }

return "invalid";
}

document.addEventListener('DOMContentLoaded', (event) => {

    //Only init quill after everything has loaded because otherwise it throws an error :shrug:
    console.log("initalise quill");
    const fontSizeArr = ['8px','9px','10px','12px','14px','16px','20px','24px','32px','42px','54px','68px','84px','98px'];
    try {
        var Delta = Quill.import('delta');
        var Size = Quill.import('attributors/style/size');
        Size.whitelist = fontSizeArr;
        Quill.register(Size, true);
        var toolbarOptions = {
            container: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }, { 'size': fontSizeArr }],  
            [{ 'align': [] }],
            ['clean']
            ],
            handlers: {
                video: videoHandler
            }
        };

        //figure out how to not make the toolbar really long and the custom buttons look terrible

        quill = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
        theme: 'snow'
        });

    } catch(error) {
        console.log("quill broke with " + error);
        document.getElementById('infoh1').innerHTML = "quill failed to load.";
        document.getElementById('infop1').innerHTML = "Please refresh the page. If this this issue persists, please create an issue on https://github.com/ThisCatLikesCrypto/Website (not a link)";
        document.getElementById('infop2').innerHTML = "Error is " + error;
        document.getElementById('infop3').innerHTML = "Please remember that this is still in alpha, and all feedback is welcome!";
    }

    console.log("load previous save");
    try {
        data = JSON.parse(localStorage.getItem('storedText'));
        quill.setContents(data);
        console.log("..success!");
        console.log(data);
    } catch(error) {
        console.log("save failed to load. If this is the first load, ignore this. Otherwise create an issue on https://github.com/ThisCatLikesCrypto/Website" + error);
    }

    var change = new Delta();
        quill.on('text-change', function(delta) {
        change = change.compose(delta);
    });

    setInterval(saveLocal, 10000)
    setInterval(countChars, 500);
});