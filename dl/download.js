var fileObject = "";
var data = {};

function SetdlOptions(inFileName){
    data = { //Keep this up to date with files
        "files":[
           {"fileName": "EEEEEE.zip", "gDriveLink": "None", "directLink": "code/EEEEEE.zip", "GitHubLink": "None"},
           {"fileName": "infiwriteRust.zip", "gDriveLink": "None", "directLink": "compliedprograms/infiwriteRust.zip", "GitHubLink": "None"}
        ]   
    };

    try {
        fileObject = data.files.find(file => file.fileName === inFileName);
    } catch {
        document.getElementById('h2FileDisp').innerHTML = "That File Doesn't Exist.";
        console.log(data);
    }
    
    // Extract the relevant information
    const fileName = fileObject.fileName;
    const gDriveLink = fileObject.gDriveLink;
    const directLink = fileObject.directLink;
    const GitHubLink = fileObject.GitHubLink;

    console.log("File Name:", fileName);
    console.log("Google Drive Link:", gDriveLink);
    console.log("Direct Link:", directLink);
    console.log("GitHub Link:", GitHubLink);

    let gdLink = document.getElementById('gDriveLink')
    let dLink = document.getElementById('directLink')
    let ghLink = document.getElementById('GitHubLink')

    gdLink.innerHTML = "Google Drive Link: " + gDriveLink;
    dLink.innerHTML = "Direct Download (Cloudflare CDN) Link: " + directLink;
    ghLink.innerHTML = "GitHub Link: " + GitHubLink;

    if (gDriveLink == "None"){
        gdLink.href = "../";
    } else {
        gdLink.href = gDriveLink;
    }

    if (directLink == "None"){
        dLink.href = "../";
    } else {
        dLink.href = directLink;
    }

    if (GitHubLink == "None"){
        ghLink.href = "../";
    } else {
        ghLink.href = ghLink;
    }

}

function onload(){
    const urlParams = new URLSearchParams(window.location.search);
    const fileName = urlParams.get('fileName');
    console.log(fileName);
    document.getElementById('h2FileDisp').innerHTML = "Selected File: " + fileName;
    SetdlOptions(fileName);
}