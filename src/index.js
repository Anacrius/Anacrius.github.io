import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import "./styles/styles.css";

const rootElem = document.getElementById("root");
render(
<BrowserRouter>
    <App />
</BrowserRouter>, rootElem); // the render of App will be appenned inside the div id="root"