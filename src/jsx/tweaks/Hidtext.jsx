import React from 'react'

const Hidtext = () => {
    return (
        <div className="box">
            <header>
                Turn off your ad blocker(s) or inspect the box, in order to see the text down below
            </header>
            <article>
                <p className="hidtext">
                    <span className="adsbygoogle">
                        This content is hidden if an ad blocker is turned on
                    </span>
                </p>
            </article>
        </div>
    );
}

export default Hidtext;
