var quill = "justfuckingworkplsplspls";
console.log("page not ded yet :D");

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

function saveLocal(quill){
    stuff = save(quill);
    localStorage.setItem('storedText', stuff);
}

function dlSave(){
    //NO WORKY FIGURE OUT LATER
    const link = document.createElement ('a');
    link.setAttribute ('download', "texteditSaveFile");
    link.href = window.URL.createObjectURL(save(quill));
    link.click();
}

document.addEventListener('DOMContentLoaded', (event) => {
    var Delta = Quill.import('delta');
    quill = new Quill('#editor', {
    modules: {
      toolbar: '#toolbar'
    },
    theme: 'snow'
    });
    // Store accumulated changes

    try {
    data = JSON.parse(localStorage.getItem('storedText'));
    quill.setContents(data);
    console.log(data);
    } catch {
    console.log("fuck you! :D")
    }

    var change = new Delta();
        quill.on('text-change', function(delta) {
        change = change.compose(delta);
    });

    setInterval(function() {saveLocal( quill)}, 1000)
    setInterval(countChars, 500);
});
