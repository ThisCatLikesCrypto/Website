import 'dreamland';
import '../style.css';
import {Header, Footer, MobileSidebar, Sidebar} from '../layout.jsx';
import {globalCSS} from '../globalcss.jsx';

const Site = function(){
    return (
        <div class={globalCSS}>
            <Header></Header>
            <h1 class="centretext mainheader">Wilbur's Website</h1>
            <p class="centretext"><a class="abutp" onclick="playmusic()" id="musiccontrol">*Click here to play music!*</a></p>
            <MobileSidebar></MobileSidebar>
            <div class="main">
                <Sidebar></Sidebar>
                <div class="main-content">
                    <div class="section maindivdiv">
                        <div>
                            <h2>About</h2>
                            <p>Hello, I'm Wilbur.
                                I'm a person™ that enjoys most things computer-related, plus trains and electrical engineering.
                                I currently know Python, HTML, CSS, and JS, and eventually I want to learn a compiled programming language (I have tried C, C++ and Rust so far).</p>
                            <p>Feel free to have a look around this site
                                (and <a href="https://wilbur.is-a.dev">wilbur.is-a.dev</a>)
                                to explore from the
                                <a href="HTML2/wilbur/manipulator.html"> downright stupid </a>
                                to the
                                <a href="data.html"> actually kinda cool</a>.
                            </p>
                            <p>My hyperfixations (interests) include
                                computer hardware (and electronics in general), software engineering (duh), cryptotechnology, and
                                <a href="https://dl.wilburwilliams.uk/Other/Underground%20Sync.mov"> trains/trams</a>.
                            </p>
                            <p>
                                I enjoy programming, researching random stuff (I spend too much time on Wikipedia), watching YT and playing games (I have over 2300 days in one Minecraft world).
                            </p>
                        </div>
                        <div>
                            <h2>Basic Info</h2>
                            <p>he/they</p>
                            <p>Autistic</p>
                            <p><a rel="me" href="https://wetdry.world/@wilbur">Mastodon</a></p>
                            <p><a href="publickey.html">Public key here</a></p>
                            <p><a class="abutp" href="https://time.is/United_Kingdom">My Time:</a> <span id="mytime"></span></p>
                            <p><a href="https://github.com/ThisCatLikesCrypto">My GitHub</a></p>
                        </div>
                    </div>
                    <br />
                    <div class="buttons section">
                        <h2 class="centretext">Buttons</h2>
                        <div class="centretext">
                            <abbr title="Button, click to copy">
                                <a onclick="copyBtnEmbed()">
                                    <img loading="lazy" src="assets/button.gif" />
                                </a>
                            </abbr>
                            <a href="https://pittab.neocities.org" target="_blank">
                                <img loading="lazy" src='images/buttons/pittab.png' alt="pitt ab (not a real company)" />
                            </a>
                            <a href="https://jasperweb.pages.dev" target="_blank">
                                <img loading="lazy" src="images/buttons/jasper.webp" alt="chaos" />
                            </a>
                            <a href="https://bomberfish.ca/?higherdimension">
                                <img loading="lazy" src="images/buttons/bomberfish.gif" alt="BomberFish" title="BomberFish" />
                            </a>
                            <a href="https://omada.cafe/">
                                <img loading="lazy" src="images/buttons/omada.gif" alt="website button for omada.cafe, an private and secure alternative provider." />
                            </a>
                            <a href="https://dreamland.js.org/?kawaii">
                                <img loading="lazy" src="images/buttons/dreamland.webp" alt="dreamland" />
                            </a>
                            <a href="https://boxy.neocities.org/" target="_blank">
                                <img loading="lazy" src="images/buttons/boxy.png" alt="boxy" />
                            </a>
                            <a href="https://dimden.dev/">
                                <img loading="lazy" src="https://dimden.dev/services/images/88x31.gif" alt="dimden" />
                            </a>
                            <a href="https://eightyeightthirty.one">
                                <img loading="lazy" src="images/buttons/eightyeightthirtyone.png" alt="88x31" />
                            </a>
                            <a href="https://petrapixel.neocities.org/" target="_blank">
                                <img loading="lazy" src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@master/public/img/linkback.webp" alt="petrapixel" />
                            </a>
                            <a href="https://invoxiplaygames.uk" target="_blank">
                                <img loading="lazy" src="images/buttons/ipg.png" alt="InvoxiPlayGames" />
                            </a>
                            <a href="https://ssi.fyi" target="_blank">
                                <img loading="lazy" src="https://ssi.fyi/88x31.gif" alt="ssi, just fyi" />
                            </a>
                            <a href="https://velzie.rip" target="_blank">
                                <img loading="lazy" src="images/buttons/velzie.png" alt="coolelectronics (new site)" />
                            </a>
                            <a href="https://thememesniper.dev" target="_blank">
                                <img loading="lazy" src="images/buttons/memsnipe.png" alt="meme sniper" />
                            </a>
                            <a href="https://micro.pages.gay" target="_blank">
                                <img loading="lazy" src="images/buttons/micro.png" alt="micro" />
                            </a>
                            <a href="rd.html?immashortenthat" target="_blank">
                                <img loading="lazy" src="images/buttons/immashortenthatsrry.png" alt="long ass username" />
                            </a>
                            <a href="https://kalechips.net/responsive">
                                <img loading="lazy" src="images/buttons/responsive.png" alt="responsive web design" />
                            </a>
                            <a href="https://split.pet">
                                <img loading="lazy" src="https://split.pet/88x31/split.png" alt="split.pet" />
                            </a>
                        </div>
                        <br />
                    </div>
                    <br />
                    <div class="section">
                        <h2 class="centretext">Status</h2>
                        <h3 class="centretext">
                            <code>Website:
                                <span id="sitestatus"></span> Dev Site:&nbsp;
                                <span id="devstatus"></span> Downloads Site:&nbsp;
                                <span id="dlstatus"></span> Projects Site:&nbsp;
                                <span id="projstatus"></span>
                            </code>
                        </h3>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

document.body.appendChild(h(Site));