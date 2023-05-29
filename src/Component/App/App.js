import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Router/Home';
import Contact from '../Router/Contact';
import About from '../Router/About';

function App() {
    return (
        <Router>
            <Link to={'/'}>Home</Link>
            <br></br>
            <Link to={'./Contact'}>Contact</Link>
            <br></br>
            <Link to={'./About'}>About</Link>
            <br></br>
            <br></br>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/Contact' component={Contact}></Route>
                <Route path='/About' component={About}></Route>
            </Switch>
        </Router>
    )
}
export default App;