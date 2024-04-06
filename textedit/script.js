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

document.addEventListener('DOMContentLoaded', (event) => {

    //Only init quill after everything has loaded because otherwise it throws an error :shrug:
    console.log("initalise quill");
    try {
        var Delta = Quill.import('delta');
        quill = new Quill('#editor', {
        modules: {
        toolbar: '#toolbar'
        },
        theme: 'snow'
        });
        console.log("..success!");
    } catch(error) {
        console.log("quill broke with " + error)
        document.getElementById('infoh1').innerHTML = "quill failed to load.";
        document.getElementById('infop1').innerHTML = "Please refresh the page. If this this issue persists, please create an issue on https://github.com/ThisCatLikesCrypto/Website (not a link)";
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