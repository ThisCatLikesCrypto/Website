import 'dreamland';
import { Route, Router, Redirect } from 'dreamland-router';
import Site from './routes/home';
import './style.css';
let router = new Router(
    <Route>
        <Route path="" show={<Site />} />
        <Redirect path="/index.html" to="/" />
    </Route>
).mount(document.getElementById('app'));
