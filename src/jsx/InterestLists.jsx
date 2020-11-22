import React from 'react';

import { Svg } from "./Logos";
import { BiBox, Icontxt } from "./Format";

const SingleInterest = ({ svgicon, svgtxt, desc}) => (
    <BiBox
        left={
            <Icontxt
                icon={ svgicon }
                txt={ svgtxt }
            />
        }
        right={ desc }
    />
);

const InterestLists = ({divname}) => (
    <div className={divname}>
        <SingleInterest
            svgicon={Svg.sword}
            svgtxt="Kendo"
            desc="Suburi"
        />
        <SingleInterest
            svgicon={Svg.controller}
            svgtxt="Video games"
            desc="Cooperation, Competition"
        />
        <SingleInterest
            svgicon={Svg.puzzle}
            svgtxt="Problem Solving"
            desc="Hackerrank"
        />
        <SingleInterest
            svgicon={Svg.ai}
            svgtxt="Scientific culture"
            desc="Artificial consciousness, thermodynamic"
        />
        <SingleInterest
            svgicon={Svg.music}
            svgtxt="Music"
            desc="OST, post-rock, rock"
        />
        <SingleInterest
            svgicon={Svg.book}
            svgtxt="Manga / Anime"
            desc=""
        />
    </div>
);

export default InterestLists;