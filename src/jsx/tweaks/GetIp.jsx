import React, { useState } from 'react'


const GetIp = () => {

    const [ip, setIp] = useState(null);
    let text = "Click on the button below to get your IP address";

    const handleClick = () => {
        fetch("https://api.ipify.org/?format=json")
            .then(result => result.json())
            .then(data => setIp(data.ip));
    }

    return (
        <div className="box">
            <header>
                {ip ? ip : text}
            </header>
            <p>
                <button onClick={handleClick}>Get my Ip</button>
            </p>
        </div>
    )
}

export default GetIp;