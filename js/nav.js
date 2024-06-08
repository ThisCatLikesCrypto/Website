//Made with dreamland.js v0.0.21

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
            <a href="data.html">Data!</a>
            <a href="newtab/index.html">Newtab</a>
            <a href="HTML2/index.html">HTML2</a>
            <a href="HTML3/index.html">HTML3</a>
            <a href="https://eyescary.pages.dev">EyeScary</a>
            <a href="specs.html">Tech Specs</a>
            <a href="software.html">Software Setup</a>
            <a href="downloads.html">dl Index</a>
            <a href="directory.html">Crypto Links</a>
            <a href="donate.html">Donate</a>
            <a href="licence.html">Licence</a>
        </div>
    </div>`
}

function LoadFooter(){
    return html`        
    <footer class="centreplease">
        <svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 1021.2 71.6">
            <path fill="#fff4" d="M808.7 70.7H773v-9.6h9.4V10.3H773V.7h35.5q6.3 0 11 2.15a18.3 18.3 0 0 1 4.859 3.188 16.4 16.4 0 0 1 2.491 2.912q2.65 3.95 2.65 9.35v1a21 21 0 0 1-.252 3.353q-.29 1.792-.913 3.269a11 11 0 0 1-.635 1.278q-1.8 3.1-4.35 4.8t-4.85 2.4V36a13 13 0 0 1 2.079.745q1.014.456 2.087 1.108a25 25 0 0 1 .784.497q2.65 1.75 4.5 4.85 1.53 2.564 1.795 6.427a25 25 0 0 1 .055 1.673v1a20.8 20.8 0 0 1-.535 4.829A15.8 15.8 0 0 1 827.1 62.2q-2.7 4.1-7.45 6.3a23.4 23.4 0 0 1-6.46 1.884 31 31 0 0 1-4.49.316m-776.4 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7L6.6 30.3 0 23.7 23.7 0h7.2l23.7 23.7-6.6 6.6-12.5-12.6-2.4-3.7-1.5.5.7 4.4zm87.5 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7-12.5 12.6-6.6-6.6L111.2 0h7.2l23.7 23.7-6.6 6.6L123 17.7l-2.4-3.7-1.5.5.7 4.4zm86.1.7h-7.2L175 47.7l6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7L223 41.1l6.6 6.6zm87.5 0h-7.2l-23.7-23.7 6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7 12.5-12.6 6.6 6.6zm87.1-6.3-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L509.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm64.1 16.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L720.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm133.7 22.2h-11.2l20-70h19l19.9 70h-11.1l-4.6-16.5h-27.4zm17.5-63.3-10.2 36.8h22L891.2 7.4zm-96.3 33v20.5h14.1a18 18 0 0 0 3.423-.304q1.981-.381 3.538-1.242A9.7 9.7 0 0 0 815.9 58.3q3.1-2.6 3.1-7.2v-.9a11.1 11.1 0 0 0-.411-3.108A8.3 8.3 0 0 0 815.95 43q-3.05-2.6-8.55-2.6zm0-29.9v20h14.1a16.6 16.6 0 0 0 3.407-.329q2.237-.468 3.952-1.601a10 10 0 0 0 .841-.62 8.33 8.33 0 0 0 3.068-6.075A12 12 0 0 0 818.7 21v-1q0-4.4-3.05-6.95a10.4 10.4 0 0 0-3.979-2.026q-1.915-.524-4.271-.524zm187.1 54.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h42.4V18.5h9.4v31.3h-51.8l-4.4-.7-.5 1.5 3.7 2.4z"></path>
        </svg>
        <!--I very much stole the above from mercury workshop no way I write that myself-->
        <abbr title="Probably Inaccurate Website Hit Counter">
            <a class="makehover" href='https://www.free-website-hit-counter.com'>
                    <img src='https://www.free-website-hit-counter.com/c.php?d=9&id=171636&s=1' style='border: 0' alt='Probably Inaccurate Website Hit Counter'>
            </a>
        </abbr>
        <abbr title="Button, click to copy">
            <a onclick="copyBtnEmbed()">
                <img src="assets/button.gif">
            </a>
        </abbr>
        <button height="88px" width="31px" onclick="catGoMeow()">Click for free cat!</button>
        <abbr title="Mousometer Gadget Total Distance">
            <a href="https://www.mousometer.de">
                <img src="https://www.mousometer.de/mousometer32504.gif" alt="Mousometer - Distance meter for your mouse">
            </a>
        </abbr>
    </footer>`
}

window.addEventListener('load', () => {
    document.getElementById("nesteddivsgobrrr").appendChild(h(LoadNav));
    document.querySelector(".main").appendChild(h(LoadFooter));
})