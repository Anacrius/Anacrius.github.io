import React from 'react'
import { Link } from 'react-router-dom'

import Themer from "./Themer";

const NavBar = (props) => (
    <ul>
        <Link className="link" to="/"><li>Home</li></Link>
        <Link className="link" to="/Gallery"><li>Gallery</li></Link>
        <Link className="link" to="/Skills"><li>Skills</li></Link>
        <li><Themer /></li>
    </ul>
)

export default NavBar;