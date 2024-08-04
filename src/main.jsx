import 'dreamland';
import { Route, Router, Redirect } from 'dreamland-router';
import Site from './routes/home';
import About from './routes/about';
import Specs from './routes/specs';
import Data from './routes/data';
import './style.css';
let router = new Router(
    <Route>
        <Route path="" show={<Site />} />
        <Route path="about" show={<About />}></Route>
        <Route path="specs" show={<Specs />}></Route>
        <Route path="data" show={<Data />}></Route>
        <Redirect path="/index.html" to="/" />
    </Route>
).mount(document.getElementById('app'));
