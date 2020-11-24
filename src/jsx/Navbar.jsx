import React from 'react'
import { Link } from 'react-router-dom'

import Themer from "./Themer";

const NavBar = (props) => (
    <ul className="navbar">
        <Link className="link" to="/"><li>Home</li></Link>
        <Link className="link" to="/resume"><li>Resume</li></Link>
        <Link className="link" to="/gallery"><li>Gallery</li></Link>
        <Link className="link" to="/tweaks"><li>Tweaks</li></Link>
        <li><Themer /></li>
    </ul>
)

export default NavBar;