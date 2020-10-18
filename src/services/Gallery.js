import React, { Component } from "react";

import Card from "../jsx/Card"

class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <h3>Gallery part (build in progress)</h3>
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    logo=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    logo=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    logo=""
                />
                <Card
                    title="** Title **"
                    shortDesc="short description"
                    longDesc=""
                    logo=""
                />
            </div>
        );
    }
}

export default Gallery;