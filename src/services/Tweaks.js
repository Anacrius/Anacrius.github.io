import React, { Component } from "react";

class Tweaks extends Component {
    state = {
        width: "80%",
    }

    render() {
        return (
            <div className="tweaks">
                <div className="box" style={{width: this.state.width}}>
                    <header>
                        Turn off your ad blocker(s) or inspect the box, in order to see the text down below
                    </header>
                    <article>
                        <p className="hidtext">
                            <span className="adsbygoogle">
                                This content is hidden if an ad blocker is turned off
                            </span>
                        </p>
                    </article>
                </div>
            </div>
        );
    }
}

export default Tweaks;