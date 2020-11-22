import React from 'react';
import { BrowserRouter as Router,
         Route,
         Switch, } from 'react-router-dom';

import NavBar from "./jsx/Navbar";
import Resume from "./jsx/Resume";
import Gallery from "./services/Gallery";
import Skills from "./services/Skills"

const Header = (props) => (
    <header id="top-header">
        <h1 id="head"><span id="job">UNG</span>Maxime</h1>
        <NavBar />
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
                <Switch>
                    <Route exact path="/" component={Skills} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/gallery" component={Gallery} />
                </Switch>
            </main>
            <Footer />
        </div>
    </Router>
    );
}