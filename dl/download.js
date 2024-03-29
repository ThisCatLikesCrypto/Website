var gDriveLink;
var directLink;
var archiveLink;
var GitHubLink;

function SetdlOptions(fileName){
    if (fileName == "EEEEEE.zip"){
        gDriveLink = "None";
        directLink = "code/EEEEEE.zip";
        GitHubLink = "None";
    } else if (fileName == "infiwriteRust.zip"){
        gDriveLink = "None";
        directLink = "compiledprograms/infiwriteRust.zip";
        GitHubLink = "None";
    } else {
        document.getElementById('h2FileDisp').innerHTML = "That file doesn't exist."
    }

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