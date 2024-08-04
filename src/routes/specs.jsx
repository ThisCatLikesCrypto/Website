import 'dreamland';
import '../style.css';
import { Header, Footer, MobileSidebar, Sidebar } from '../layout.jsx';
import { globalCSS } from '../globalcss.jsx';

const Specs = function () {
    return (
        <div class={globalCSS}>
            <Header></Header>
            <h1 class="centretext mainheader">Specs for Stuff :D</h1>
            <MobileSidebar></MobileSidebar>
            <div class="main">
                <Sidebar></Sidebar>
                <div class="main-content">
                    <div class="section">
                        <h3>PC Specs</h3>
                        <p>CPU: Intel Core i3-12100F</p>
                        <p>GPU: Nvidia GeForce RTX 3060 12GB</p>
                        <p>RAM: 16GB (2x8) Corsair Vengeance PRO 3200mhz</p>
                        <p>Mobo: ASUS Prime B660-A D4</p>
                        <p>PSU: Corsair TX650m</p>
                        <p>Case: Corsair iCUE 4000X</p>
                        <p>Boot SSD: WD Blue SN570 500GB</p>
                        <p>Linux Mint SSD: WD Green SN350 500GB</p>
                        <p>Games SSD: WD Green SN350 2TB</p>
                        <p>Storage SSD: Seagate BarraCuda 120 SSD 1TB&nbsp;</p>
                        <p>CPU Cooler: Hyper 212</p>
                        <p>Fans: 5x Corsair 120mm RGB fans (mix)</p>
                        <p>Monitor: iiyama G Master 24" 1080p 165hz (running at 120hz)</p>
                        <p>Keyboard: RK Royal Kludge RK84 (originally brown switch)</p>
                        <p>Keyswitches: MAGIC-REFINER AS Coral Pink Switches (Ultralight Linear) and some other clicky switches for function and modifier keys</p>
                        <p>Mouse: Logitech G305</p>
                        <p>OS: Win11</p>
                        <br />
                        <h3>Laptop Specs</h3>
                        <p>Name: Lenovo Ideapad Chrome 14ITL6</p>
                        <p>CPU: Intel Core i5-1135G7</p>
                        <p>RAM: 8GB (idk)</p>
                        <p>Boot SSD: Some generic 256GB SSD</p>
                        <p>OS: ChromeOS (school forced me to, I do use Linux Dev Environment though)</p>
                        <br />
                        <h3>Other Things</h3>
                        <p>Phone: iPhone XR</p>
                        <p>Watch: Apple Watch Series SE (1st gen)</p>
                        <p>Earbuds: EarFun Air Pro 3</p>
                        <p>Tablet: iPad Mini (5th gen, I don't really use it)</p>
                        <p>3D Printer: Anycubic Kobra 2 Neo</p>
                        <p>Bo: redom</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Specs;