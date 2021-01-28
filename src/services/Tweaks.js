import React from "react";

import Hidtext from "../jsx/tweaks/Hidtext";
import ChangeTitle from "../jsx/tweaks/ChangeTitle";
import GetIp from "../jsx/tweaks/GetIp";

import "../styles/tweaks.css";

const Tweaks = () => {
    return (
        <div className="tweaks">
            <Hidtext />
            <ChangeTitle />
            <GetIp />
        </div>
    );
}

export default Tweaks;