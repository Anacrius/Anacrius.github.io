import React, { Component } from "react";

import Card from "../jsx/Card"

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <h1> My Projects gallery (building in progress) </h1>
                <Card
                    title="Zsh shell implementation"
                    shortDesc="A program in C to reproduce a Unix shell "
                    longDesc="Long desc"
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc="Long description"
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc="Long description"
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc="Long description"
                    pictures=""
                />
            </div>
        );
    }
}

export default Gallery;