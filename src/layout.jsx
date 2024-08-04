const splashtext = ["Why does this exist again", 
    "prefers-reduced-motion: no movement", 
    "hmmm, what to put here?", 
    "defying gravity", 
    "HTML2 is just an archive", 
    "Wine Is Not an Emulator",
    "built with VSCode", 
    <a href='https://www.youtube.com/watch?v=M93mt3NzkmM'>This song has no right being this good</a>,
    <a href='https://www.youtube.com/watch?v=24sx3aFynQI'>1996 stock motors</a>,
    "The last straight cis person on this corner of the net", 
    <a href='https://www.youtube.com/watch?v=83CqPViJB0I'>UNIFY</a>];
  
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const footerCSS = css`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const sidebarCSS = css`
    margin-top: 0;
    padding-top: 0;
`

const mobileSidebarCSS = css`
    max-height: 25px;
    overflow-x: auto;
    white-space: nowrap;
    button {
        border-radius: 10px;
    }
`;


const Header = function(){
    this.message = choose(splashtext);
    return (
        <div id="header">
            <script src="../js/script.js"></script>
            <div id="headercontent">
                <div>
                    <h1 class="rainbow"><a href="/">wilburwilliams.uk</a></h1>
                    <div>{this.message}</div>
                </div>
                <div class="desktoponly">
                    <p class="inlineplease">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text)">
                            <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"></path>
                        </svg>
                        &nbsp;<a href="https://catppuccin.com">Catppuccin Mocha</a>
                    </p>
                </div>
            </div>
            <hr />
        </div>
    );
}

const Sidebar = function(){
    this.isstupid = `sidebar section desktoponly ${sidebarCSS}`
    return (
        <div class={this.isstupid}>
            <div>
                <h2>Nav</h2>
                <a href="3dsite/index.html">3D site</a><br />
                <a href="ppp/index.html">PPP</a>
            </div>
            <div>
                <h2>Webrings</h2>
                <b><a class="abutp" href="https://webring.dinhe.net/">Retronaut webring</a></b>
                <p><a href='https://webring.dinhe.net/prev/https://wilburwilliams.uk'>Previous</a> | <a href='https://webring.dinhe.net/next/https://wilburwilliams.uk'>Next</a></p>
            </div>
        </div>
    )
}

const AButton = function(){
    return (
        <button><a href={this.href}>{this.text}</a></button>
    )
}

const MobileSidebar = function(){
    this.isstupid = `mobileonly ${mobileSidebarCSS}`
    return (
        <div class={this.isstupid}>
            <b>Nav:&nbsp;</b>
            <AButton href="3dsite/index.html" text="3DSite"></AButton>&nbsp;
            <AButton href="ppp/index.html" text="PPP"></AButton>&nbsp;
            somethingthattakesupalotofspacefortestingidk&nbsp;
            somethingthattakesupalotofspacefortestingidk
        </div>
    )
}

const Footer = function(){
    return (
        <footer class={footerCSS}>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.5em" viewBox="0 0 1021.2 71.6">
                <path fill="#fff4" d="M808.7 70.7H773v-9.6h9.4V10.3H773V.7h35.5q6.3 0 11 2.15a18.3 18.3 0 0 1 4.859 3.188 16.4 16.4 0 0 1 2.491 2.912q2.65 3.95 2.65 9.35v1a21 21 0 0 1-.252 3.353q-.29 1.792-.913 3.269a11 11 0 0 1-.635 1.278q-1.8 3.1-4.35 4.8t-4.85 2.4V36a13 13 0 0 1 2.079.745q1.014.456 2.087 1.108a25 25 0 0 1 .784.497q2.65 1.75 4.5 4.85 1.53 2.564 1.795 6.427a25 25 0 0 1 .055 1.673v1a20.8 20.8 0 0 1-.535 4.829A15.8 15.8 0 0 1 827.1 62.2q-2.7 4.1-7.45 6.3a23.4 23.4 0 0 1-6.46 1.884 31 31 0 0 1-4.49.316m-776.4 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7L6.6 30.3 0 23.7 23.7 0h7.2l23.7 23.7-6.6 6.6-12.5-12.6-2.4-3.7-1.5.5.7 4.4zm87.5 0h-10V18.9l.7-4.4-1.5-.5-2.4 3.7-12.5 12.6-6.6-6.6L111.2 0h7.2l23.7 23.7-6.6 6.6L123 17.7l-2.4-3.7-1.5.5.7 4.4zm86.1.7h-7.2L175 47.7l6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7L223 41.1l6.6 6.6zm87.5 0h-7.2l-23.7-23.7 6.6-6.6 12.5 12.6 2.4 3.7 1.5-.5-.7-4.4V.7h10v51.8l-.7 4.4 1.5.5 2.4-3.7 12.5-12.6 6.6 6.6zm87.1-6.3-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L509.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm64.1 16.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h51.8v9.4h-51.8l-4.4-.7-.5 1.5 3.7 2.4zm146.9-16.6-23.2 23.1-6.6-6.5L720.8 53l3.7-2.4-.5-1.5-4.4.7h-51.8v-9.4h51.8l4.4.7.5-1.5-3.7-2.4-12.2-12.1 6.6-6.6 23.2 23.2zm133.7 22.2h-11.2l20-70h19l19.9 70h-11.1l-4.6-16.5h-27.4zm17.5-63.3-10.2 36.8h22L891.2 7.4zm-96.3 33v20.5h14.1a18 18 0 0 0 3.423-.304q1.981-.381 3.538-1.242A9.7 9.7 0 0 0 815.9 58.3q3.1-2.6 3.1-7.2v-.9a11.1 11.1 0 0 0-.411-3.108A8.3 8.3 0 0 0 815.95 43q-3.05-2.6-8.55-2.6zm0-29.9v20h14.1a16.6 16.6 0 0 0 3.407-.329q2.237-.468 3.952-1.601a10 10 0 0 0 .841-.62 8.33 8.33 0 0 0 3.068-6.075A12 12 0 0 0 818.7 21v-1q0-4.4-3.05-6.95a10.4 10.4 0 0 0-3.979-2.026q-1.915-.524-4.271-.524zm187.1 54.6-6.6 6.5-23.2-23.1v-6.8l23.2-23.2 6.6 6.6-12.2 12.1-3.7 2.4.5 1.5 4.4-.7h42.4V18.5h9.4v31.3h-51.8l-4.4-.7-.5 1.5 3.7 2.4z"></path>
            </svg>
            <abbr title="Probably Inaccurate Website Hit Counter">
                <a class="makehover" href='https://www.free-website-hit-counter.com'>
                    <img src='https://www.free-website-hit-counter.com/c.php?d=9&id=171636&s=1' style='border: 0' alt='Probably Inaccurate Website Hit Counter'/>
                </a>
            </abbr>
            <abbr title="Button, click to copy">
                <a onclick="copyBtnEmbed()">
                    <img src="/assets/button.gif"/>
                </a>
            </abbr>
            <button height="88px" width="31px" onclick="catGoMeow()">Click for free cat!</button>
            <abbr title="Mousometer Gadget Total Distance">
                <a href="https://www.mousometer.de">
                    <img src="https://www.mousometer.de/mousometer32504.gif" alt="Mousometer - Distance meter for your mouse"/>
                </a>
            </abbr>
            <div id="keys-container"></div>
        </footer>
    );
}

export {Header, Sidebar, MobileSidebar, Footer};