import React from 'react';
import { BrowserRouter as Router,
         Route,
         Switch, } from 'react-router-dom';

import NavBar from "./jsx/Navbar";
import Gallery from "./services/Gallery";
import Skills from "./services/Skills"

const Header = (props) => (
    <header>
        <h1 id="head"><span id="job">UNG</span>Maxime</h1>
        <NavBar />
    </header>
);

const Footer = (props) => (
    <footer>
        <div className="efooter info">
            <a className="link" href="./">About</a>
            <a className="link" href="./">Contact</a>
        </div>
    </footer>
);

const Home = (props) => (
    <div>Home</div>
);

export default function App() {
    return (
    <Router>
        <div id="app">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/skills" component={Skills} />
                </Switch>
            </main>
            <Footer />
        </div>
    </Router>
    );
}