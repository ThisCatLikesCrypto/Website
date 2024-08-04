import 'dreamland';
import '../style.css';
import {Header, Footer, MobileSidebar, Sidebar} from '../layout.jsx';
import {globalCSS} from '../globalcss.jsx';

const Thing = function(){
    return (
        <div class={globalCSS}>
            <Header></Header>
            <h1 class="centretext mainheader">Thing</h1>
            <MobileSidebar></MobileSidebar>
            <div class="main">
                <Sidebar></Sidebar>
                <div class="main-content">
                    <div class="section">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Thing;