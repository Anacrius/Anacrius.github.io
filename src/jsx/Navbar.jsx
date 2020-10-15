import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Themer extends Component {
    change(m, lm, im, bg, txt = "black") {
        document
            .documentElement
            .style
            .setProperty("--main-color", m);
        document
            .documentElement
            .style
            .setProperty("--lmain-color", lm);
        document
            .documentElement
            .style
            .setProperty("--inner-main-color", im);
        document
            .documentElement
            .style
            .setProperty("--main-background", bg);
        document
            .documentElement
            .style
            .setProperty("--text-color", txt);
    }

    changeTheme(val) {
        if (val === "def")
            this.default();
        else if (val === "alt")
            this.alternative()
        else if (val === "dark")
            this.darkmode();
        else if (val === "alt2")
            this.alt2();
        else if (val === "legacy")
            this.legacy();
        else
            this.default();
    }

    default() {
        this.change(
            "#6699cc",      // --main-color
            "#a2d2ff",      // --lmain-color
            "#457b9d",      // --inner-main-color
            "#ffe5d9"       // --main-background
        );
    }
    // D16666 // 7B0828
    // 8AA1B1

    // 412234 // 6D466B // B49FCC // EAD7D7
    darkmode() {
        this.change(
            "#1a1a1a",      // --main-color
            "#3E474D",      // --lmain-color
            "#808080",      // --inner-main-color
            "#2B2D2E",      // --main-background
            "white"         // --text-color
        );
    }

    alt2() {
        this.change(
            "#e8d7f1",      // --main-color
            "#f3e0ec",     // --lmain-color
            "#B49FCC",     // --inner-main-color
            "#d3bccc",   // --main-background
            "black"
        );
    }

    legacy() {
        this.change(
            "#0080ff",      // --main-color
            "lightblue",     // --lmain-color
            "#6699ff",     // --inner-main-color
            "bisque",   // --main-background
            "black"
        );
    }

    alternative() {
        this.change(
            "#7d4f50",      // --main-color
            "#cc8b86",      // --lmain-color
            "#d5b9b2",      // --inner-main-color
            "#f9eae1",      // --main-background
            "black"
        );
    }

    handleChange(e) {
        const val = e.target.value;
        this.changeTheme(val);
    }

    render() {
        return (
            <select className="themer" onChange={this.handleChange.bind(this)}>
                <option value="def">Default Theme</option>
                <option value="dark">Dark</option>
                <option value="alt">Alternative</option>
                <option value="alt2">Wisteria</option>
                <option value="legacy">Legacy</option>
            </select>
        );
    }
}

const NavBar = (props) => (
    <ul>
        <Link className="link" to="/"><li>Home</li></Link>
        <Link className="link" to="/Gallery"><li>Gallery</li></Link>
        <Link className="link" to="/Skills"><li>Skills</li></Link>
        <li><Themer /></li>
    </ul>
)

export default NavBar;