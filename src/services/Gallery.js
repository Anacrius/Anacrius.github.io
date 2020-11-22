import React, { Component } from "react";

import Card from "../jsx/Card"

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <Card
                    title="Zsh shell implementation"
                    shortDesc="A program in C to reproduce a Unix shell "
                    longDesc="Long desc"
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    pictures=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    pictures=""
                />
            </div>
        );
    }
}

export default Gallery;