import React from 'react';

import "../styles/timeline.css";

const Timepoint = ({year, title="test", desc}) => (
    <article className="timepoint">
        <h3 className="t-year">{year}</h3>
        <div className="t-line">|</div>
        <div className="t-desc">
            <h4 className="tdesc-title">{title}</h4>
            <p className="tdesc-desc">{desc}</p>
        </div>
    </article>
);

const Timeline = (divname) => (
    <div className="timeline">
        <Timepoint
            year="2015"
            title="Lycée Montesquieu (High School)"
            desc="Highscool degree ES (economic and social)"
        />
        <Timepoint
            year="2018"
            title="Paris-V Descartes (University)"
            desc="Economy and Management bachelor's degree"
        />
        <Timepoint
            year="2019"
            title="Epitech Paris"
            desc={
            <article>
                <p>
                (2019-2020) PGE 2nd year
                <br />
                (2020-now) Pre-Msc Pro
                </p>
            </article>}
        />
    </div>
);

export default Timeline;