import 'dreamland';
import '../style.css';
import {Header, Footer} from '../layout.jsx';

const globalCSS = css`
    max-width: 700px;
    margin-top: 50px !important;
    margin: 10px auto;
`

const Site = function(){
    return (
        <div class={globalCSS}>
            <Header></Header>
            <h1>test</h1>
            <a href="old.html">Go Back To Old Site</a>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Site;