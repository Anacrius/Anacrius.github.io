import React from 'react';

const btnStyle = {
    overflow: 'hidden',
    borderRadius: "25px",
    height: "45px",
    width: "45px"
}

const CustomBtn = (logo, link) => {
    return (
        <a style={btnStyle} href={link}>
            { typeof(logo) === "string"
                ? <img src= {logo} width="45" height="45" />
                : logo
            }
        </a>
    );
}

export default CustomBtn;