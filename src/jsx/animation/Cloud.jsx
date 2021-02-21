import React, { useState, useEffect } from 'react';

import Clouds_svg from "../../img/svg/clouds_svg"
import Cloud_svg from "../../img/svg/cloud_svg"
import Rain_cloud from "../../img/svg/rain_cloud_svg"

/*

https://www.flaticon.com/free-icon/mansion_1040993?term=house&page=2&position=73&page=2&position=73&related_id=1040993&origin=search
https://www.flaticon.com/free-icon/house_619034?term=house&related_id=619034
https://www.flaticon.com/free-icon/house_609803?term=house&page=1&position=14&page=1&position=14&related_id=609803&origin=search
https://www.flaticon.com/free-icon/home_3079182?related_id=3079182&origin=search

*/

// disabled vertical cloud mouvement
function Cloud(initX, initY, width, height, svg, xDir = false) {

    //const maxHeight = 50;
    const inc = 0.1;
    //const incY = 0.1;

    //const height = "30";
    //const width = "50";

    //const [xy, setXY] = useState([0, initY]);

    const [yAxis, setYAxis] = useState(initY);
    const [xAxis, setXAxis] = useState(initX);

    //const [fall, setFall] = useState(false);
    const [right, setRight] = useState(xDir);

    const cloudStyle = {
        fill: "white",
        top: yAxis + "%",
        left: xAxis + "%",
        height: height + "vw",
        width: width + "vw",
        position: 'absolute',
        zIndex: "auto"
    };

    const cloud_list = [Cloud_svg(cloudStyle), Clouds_svg(cloudStyle), Rain_cloud(cloudStyle)];

/*
    useEffect(() => {
        if (yAxis >= 100) {
            setFall(true);
        }
        else if (yAxis < 0) {
            setFall(false);
        }

        //if (innerWidth)
        //console.log("Cloud state: ", fall, "#", " y:", yAxis);
    }, [yAxis, fall]);
*/
    useEffect(() => {
        //const screenWidth = window.innerWidth;
        if (xAxis >= 100) {
            setRight(false);
        }
        else if (xAxis < 0 - parseInt(width) / 4) {
            setRight(true);
        }
    }, [xAxis, right]);

    const moveX = () => {
        if (right) {
            setXAxis(xAxis + inc);
        }
        else {
            setXAxis(xAxis - inc);
        }
        //moveY();
    }
/*
    const moveY = () => {
        if (fall) {
            setYAxis(yAxis - incY);
        }
        else {
            setYAxis((yAxis + incY));
        }
    }
*/
    useEffect(() => {
        const interval = setInterval(moveX, 285);
        return () => {
            clearInterval(interval);
        };
    }, [xAxis]);

    return (
        cloud_list[svg]
    )
}

const Clouds = () => {

    const cloudsStyle = {
        overflow: "hidden",
        position: "fixed",
        /*background-color: rgba(255, 0, 0, 0.1);/**/
        zIndex: 0,
        height: "100%",
        width: "100%"
    }

    return (
        <div style={cloudsStyle}>
            { Cloud(-5, 5, "1.5", "1.3", 0) }
            { Cloud(12, 20, "4", "2", 1, true) }
            { Cloud(33, 29, "20", "5", 2) }
            { Cloud(50, 48, "7", "5", 1, true) }
            { Cloud(85, 72, "6", "8", 2, true) }
        </div>
    )
}

export default Clouds;