import 'dreamland';
import '../style.css';
import { Header, Footer, MobileSidebar, Sidebar } from '../layout.jsx';
import { globalCSS } from '../globalcss.jsx';
const About = function () {
    return (
        <div class={globalCSS}>
            <Header></Header>
            <h1 class="centretext mainheader">About Website</h1>
            <MobileSidebar></MobileSidebar>
            <div class="main">
                <Sidebar></Sidebar>
                <div class="main-content">
                    <div class="section">
                        <p>This website is hosted on <a href="https://pages.cloudflare.com/">Cloudflare Pages</a>, and is managed on <a href="https://github.com">GitHub</a>.</p>
                        <p>It was coded by me, but some bits, mostly HTML2 bits, were coded by Jasper Cayley (An autistic + ADHD), Peter Rimmer, and Kieran Lynch.</p>
                        <h3>Tracking, ads and cookies</h3>
                        <p>There are no trackers, cookies or ads placed on this site, with the exception of preferences cookies for newtab.</p>
                        <p>Music is <a href="https://discord.com/invite/cellua-machine-server-866250603508662313">Scattered Cells by KyYay</a></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

document.body.appendChild(h(About));