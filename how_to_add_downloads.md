1. Add the files to the correct places. For GitHub and Google Drive, obtain the download links. For direct downloads (only for files <2MB) upload it to dl/[type]/[filename]. For multiple files compress to .zip.
2. Add the files to download.js. Add a comma to the previous thing added and add {fileName:[fileName], gDriveLink:[gDriveLink], directLink:[directLink], GitHubLink:[GitHubLink]} to the file. If there isn't a download link for a download type set it to 'None'.
3. Add the file to downloads.html. The link you should use in the <a> tag is 'dl/download?fileName=[fileName]'.
