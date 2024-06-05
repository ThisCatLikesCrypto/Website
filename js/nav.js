function LoadNav(){
    return html`
    <div class="nav">
        <!-- Site navigation -->
        <button id="sidenavbtn" onclick="showSide()">Show Sidebar</button>
        <div class="sidenav" id="sidenav">
            <a href="index.html">Main</a>
            <a href="https://wilbur.is-a.dev">Programs</a>
            <a href="https://dl.wilburwilliams.uk">ISO dl</a>
            <a href="about.html">About This</a>
            <a href="data/index.html">Data!</a>
            <a href="newtab/index.html">Newtab</a>
            <a href="HTML2/index.html">HTML2</a>
            <a href="HTML3/index.html">HTML3</a>
            <a href="https://eyescary.pages.dev">EyeScary</a>
            <a href="specs.html">Tech Specs</a>
            <a href="software.html">Software Setup</a>
            <a href="downloads.html">dl Index</a>
            <a href="directory.html">Crypto Links</a>
            <a href="donate.html">Donate</a>
            <a href="tos.html">'TOS'</a>
        </div>
    </div>`
}

window.addEventListener('load', () => {
    document.getElementById("nesteddivsgobrrr").appendChild(h(LoadNav))
})