import React from 'react';

import { Interests } from "./Logos";
import { Interestpoint } from "./Format";

const InterestLists = (divname) => (
    <div className={divname}>
        <h4 id="interests">Interests / Activities:</h4>
        <Interestpoint
            label="Kendo"
            src={Interests.katana}
            alt="katana logo"
            desc="Suburi"
        />
        <Interestpoint
            label="Video games"
            src={Interests.controller}
            alt="controller logo"
            desc="Cooperation, Competition"
        />
        <Interestpoint
            label="Programming"
            src={Interests.laptop}
            alt="laptop logo"
            desc="Learning concepts"
        />
        <Interestpoint
            label="Problem Solving"
            src={Interests.hackerRank}
            alt="hackerrank logo"
            desc="Program to solve problems"
        />
        <Interestpoint
            label="Artificial consciousness"
            src={Interests.ml}
            alt="machine learning logo"
            desc=""
        />
        <Interestpoint
            label="Music"
            src={Interests.music}
            alt="music logo"
            desc="OST, post-rock, rock"
        />
        <Interestpoint
            label="Manga / Anime"
            src={Interests.book}
            alt="book logo"
            desc=""
        />
    </div>
);

export default InterestLists;