import React, { Component } from 'react';

class Theme {
    constructor(m, lm, im, bg, txt = "black", ltxt = "black") {
      this.main_color = m;
      this.light_main = lm;
      this.inner_main = im;
      this.background = bg;
      this.text_color = txt;
      this.light_text = ltxt;
    }
}

const def = new Theme (
    "rgba(98, 182, 203, 0.8)",      // --main-color
    "rgba(190, 227, 219, 0.8)",      // --lmain-color
    "#219EBC",      // --inner-main-color
    "#ffe5d9",      // --main-background
    "white",
    "#05668D"
);

const alt = new Theme (
    "#7d4f50",      // --main-color
    "#cc8b86",      // --lmain-color
    "#d5b9b2",      // --inner-main-color
    "#f9eae1",      // --main-background
    "white",
    "#472D30",
);

const dark = new Theme (
    "rgba(16, 20, 23, 0.95)",      // --main-color
    "rgba(62, 71, 77, 0.9)",      // --lmain-color
    "#293241",      // --inner-main-color
    "#2B2D2E",      // --main-background
    "#ffe6cc",      // --text-color
    "#ffcc99"
);

const dark2 = new Theme (
    "rgba(16, 20, 23, 0.9)",      // --main-color
    "rgba(62, 71, 77, 0.9)",      // --lmain-color
    "#293241",      // --inner-main-color
    "#2B2D2E",      // --main-background
    "lightgray",      // --text-color
    "#ff3333"
);

const alt2 = new Theme (
    "#e8d7f1",      // --main-color
    "#f3e0ec",     // --lmain-color
    "#B49FCC",     // --inner-main-color
    "#d3bccc",   // --main-background
    "black"
);

const legacy = new Theme (
    "#0080ff",      // --main-color
    "lightblue",     // --lmain-color
    "#6699ff",     // --inner-main-color
    "bisque",   // --main-background
    "black"
);

class Themer extends Component {
    change(theme) {
        document
            .documentElement
            .style
            .setProperty("--main-color", theme.main_color);
        document
            .documentElement
            .style
            .setProperty("--lmain-color", theme.light_main);
        document
            .documentElement
            .style
            .setProperty("--inner-main-color", theme.inner_main);
        document
            .documentElement
            .style
            .setProperty("--main-background", theme.background);
        document
            .documentElement
            .style
            .setProperty("--text-color", theme.text_color);
        document
            .documentElement
            .style
            .setProperty("--ltext-color", theme.light_text);
    }

    componentDidMount() {
        this.changeTheme("dark");
    }

    changeTheme(val) {
        if (val === "def")
            this.change(def);
        else if (val === "alt")
            this.change(alt);
        else if (val === "dark")
            this.change(dark);
        else if (val === "dark2")
            this.change(dark2);
        else if (val === "alt2")
            this.change(alt2);
        else if (val === "legacy")
            this.change(legacy);
        else
            this.change(dark);
    }

    handleChange(e) {
        const val = e.target.value;
        this.changeTheme(val);
    }

    render() {
        return (
            <select className="themer" onChange={this.handleChange.bind(this)}>
                <option value="dark">Dark</option>
                <option value="def">Default Theme</option>
                <option value="dark2">Dark (2)</option>
                <option value="alt">Alternative</option>
                <option value="alt2">Wisteria</option>
                <option value="legacy">Legacy</option>
            </select>
        );
    }
}

export default Themer;