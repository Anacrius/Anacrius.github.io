import React from 'react';
import { BrowserRouter as Router,
         Route,
         Switch, } from 'react-router-dom';

import NavBar from "./jsx/Navbar";
import Resume from "./jsx/Resume";
import Gallery from "./services/Gallery";
import Home from "./services/Home"
import Tweaks from "./services/Tweaks"

//import Cloud from "./jsx/animation/Cloud";
import Clouds from './jsx/animation/Cloud';

const Header = (props) => (
    <header id="header">
        <div id="top-header">
            <h1 id="head"><span id="job">UNG</span>Maxime</h1>
            <NavBar />
        </div>
    </header>
);

const Footer = (props) => (
    <footer>
        <div className="efooter info">
            <h4>React page made by Anacrius (Maxime Ung)</h4>
        </div>
    </footer>
);

export default function App() {
    return (
    <Router>
        <div id="app">
            <Header />
            <main id="main">
            {Clouds()}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/tweaks" component={Tweaks} />
                </Switch>
            </main>
            <Footer />
        </div>
    </Router>
    );
}