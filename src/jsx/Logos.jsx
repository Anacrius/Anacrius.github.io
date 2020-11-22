import React from 'react';

const PLanguages = {
    haskell: "https://wiki.haskell.org/wikiupload/4/4a/HaskellLogoStyPreview-1.png",
    materialize: "https://pbs.twimg.com/profile_images/532662364613525504/GN559Lfb_400x400.png", // materialize's twitter profile pic
    /* logos free to use from uxwing.com */
    cpp: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-plus-plus-programming-language.png",
    c: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/c-program.png",
    python: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/python-programming-language.png",
    html: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/html.png",
    css: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/css.png",
    js: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/javascript-programming-language.png",
    react: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/react-js.png",
    jquery: "https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/jquery.png"
}

const PSofts = {
    filezilla: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/FileZilla_logo.svg/200px-FileZilla_logo.svg.png",
    /* logos free to use from uxwing.com */
    github: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.png",
    teams: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-teams.png",
    visual: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/visual-studio-code.png",
    excel: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-excel.png",
    ppt: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/microsoft-powerpoint.png",
    gsheets: "https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/google-sheets.png"
}

const About = {
    bday: "https://uxwing.com/wp-content/themes/uxwing/download/20-food-and-drinks/birthday-cake.png",
    phone: "https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/phone-square.png",
    home: "https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/home-button.png",
}

const Flags = {
    french: "https://cdn.countryflags.com/thumbs/france/flag-square-250.png",
    english: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png"
}

const Interests = {
    katana: "https://img.icons8.com/ios/452/katana.png",
    controller: "https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/gaming-gamepad.png",
    laptop: "https://uxwing.com/wp-content/themes/uxwing/download/08-technology/it.png",
    hackerRank: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/HackerRank_Icon-1000px.png/600px-HackerRank_Icon-1000px.png",
    ml: "https://uxwing.com/wp-content/themes/uxwing/download/08-technology/learning-machine-ai.png",
    music: "https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/music.png",
    book: "https://uxwing.com/wp-content/themes/uxwing/download/18-education/read-book.png"
}

const Svg = {
    // https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/phone-square.svg
    phone: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88" xmlSpace="preserve">
            <g>
                <path d="M13.001,0h96.878c7.152,0,13.001,5.849,13.001,13.001v96.878 c0,7.152-5.849,13.001-13.001,13.001H13.001C5.849,122.88,0,117.031,0,109.879V13.001C0,5.849,5.849,0,13.001,0L13.001,0z M21.196,33.195c6.529,4.49,13.026,9,18.496,14.824c-3.148,13.872,9.386,24.945,20.829,31.483c4.461,2.551,6.432,4.35,11.411,3.48 l19.623,19.215C54.648,114.594,13.23,62.588,21.196,33.195L21.196,33.195z M76.99,78.052l4.304-4.382 c1.254-1.261,3.304-1.271,4.558-0.048l15.856,15.627c1.264,1.248,1.279,3.291,0.043,4.557l-4.311,4.369 c-1.234,1.271-3.279,1.271-4.55,0.051L77.028,82.599C75.766,81.354,75.749,79.306,76.99,78.052L76.99,78.052z M25.047,24.009 l3.129-3.787c1.333-1.628,3.771-1.871,5.386-0.533l16.232,13.378c1.631,1.34,1.869,3.775,0.533,5.397l-3.125,3.789 c-1.335,1.615-3.764,1.851-5.395,0.52L25.562,29.39C23.945,28.057,23.711,25.619,25.047,24.009L25.047,24.009z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/21-maps-and-location/address-location.svg
    place: (
    <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 117.55" enable-background="new 0 0 122.88 117.55" xmlSpace="preserve">
            <g>
                <path d="M78.81,82.78c-4.35,4.77-9.42,9.05-15.12,12.51c-0.7,0.51-1.65,0.58-2.43,0.08 c-8.41-5.35-15.48-11.78-21.03-18.76c-7.66-9.61-12.49-20.27-14.14-30.53c-1.68-10.41-0.11-20.42,5.07-28.56 c2.04-3.22,4.65-6.15,7.83-8.68C46.3,3.01,54.65-0.06,62.96,0c8.01,0.06,15.91,3.05,22.74,9.28c2.4,2.18,4.42,4.68,6.07,7.39 c5.57,9.17,6.77,20.87,4.32,32.73c-2.41,11.71-8.41,23.62-17.28,33.35V82.78L78.81,82.78L78.81,82.78z M25.32,74.54 c1.98,0,3.59,1.61,3.59,3.59c0,1.98-1.61,3.59-3.59,3.59h-6.74l-8.88,28.67h103.22l-9.64-28.67h-5.57c-1.98,0-3.59-1.61-3.59-3.59 c0-1.98,1.61-3.59,3.59-3.59h10.7l14.46,43.01H0l13.32-43.01H25.32L25.32,74.54z M61.38,18.51c9.88,0,17.88,8.01,17.88,17.87 c0,9.88-8.01,17.88-17.88,17.88c-9.88,0-17.87-8-17.87-17.88C43.49,26.51,51.5,18.51,61.38,18.51L61.38,18.51L61.38,18.51z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/envelope-line.svg
    mail: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.879 88.855" enable-background="new 0 0 122.879 88.855" xmlSpace="preserve">
            <g>
                <path d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/20-food-and-drinks/birthday-cake.svg
    cake: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 110.08 122.88" enable-background="new 0 0 110.08 122.88" xmlSpace="preserve">
                <path d="M63.85,18.63h3.9v6.55h16.4c3.7,0,6.72,3.02,6.72,6.72V37c-2.55,2.11-4.91,3.25-7.05,3.3 c-2.68,0.07-5.24-1.66-7.65-5.39l0,0c-0.13-0.2-0.3-0.38-0.5-0.52c-0.89-0.65-2.13-0.45-2.78,0.44c-2.44,3.35-4.95,5.21-7.53,5.35 c-2.61,0.14-5.53-1.46-8.79-5.03c-0.04-0.05-0.09-0.09-0.13-0.13c-0.82-0.74-2.08-0.68-2.82,0.13c-3.06,3.36-5.92,5.1-8.58,5.13 c-2.6,0.03-5.22-1.61-7.86-5.01l0,0c-0.12-0.15-0.26-0.29-0.43-0.41c-0.9-0.63-2.15-0.42-2.78,0.48c-1.95,2.76-4.22,4.4-6.66,4.84 c-1.67,0.3-3.47,0.02-5.39-0.77c-3.96-1.63-2.53-2.56-2.79-7.5c-0.2-3.69,3.03-6.73,6.73-6.73h16.35v-6.55h3.9v6.55h6.93V10.92h3.9 v14.26h6.93V18.63L63.85,18.63z M0,114.88h110.08v8H0V114.88L0,114.88z M90.87,41.92v0.22h-0.35C90.63,42.07,90.75,42,90.87,41.92 L90.87,41.92z M89.31,42.81v20.52H20.77V43.27c2.48,0.99,4.91,1.26,7.23,0.84c2.82-0.51,5.4-2.02,7.64-4.48 c2.98,3.15,6.12,4.67,9.42,4.64c3.35-0.04,6.69-1.7,10.03-4.91c3.6,3.46,7.09,4.99,10.47,4.81c3.19-0.17,6.13-1.86,8.85-4.89 c2.85,3.49,6.03,5.1,9.51,5.01C85.68,44.24,87.48,43.74,89.31,42.81L89.31,42.81z M15.2,66.95h79.76c5.06,0,9.19,4.14,9.19,9.19 v6.98c-3.49,2.89-6.71,4.44-9.65,4.52c-3.66,0.09-7.16-2.26-10.47-7.37l0,0c-0.18-0.27-0.4-0.52-0.68-0.72 c-1.22-0.89-2.92-0.62-3.8,0.6c-3.34,4.58-6.77,7.13-10.3,7.32c-3.57,0.19-7.56-1.99-12.02-6.88c-0.06-0.06-0.12-0.12-0.18-0.18 c-1.12-1.02-2.84-0.93-3.86,0.18c-4.18,4.59-8.1,6.97-11.74,7.01c-3.55,0.04-7.14-2.2-10.75-6.85l0,0 c-0.16-0.21-0.36-0.4-0.59-0.56c-1.23-0.87-2.94-0.57-3.8,0.66c-2.66,3.78-5.77,6.02-9.11,6.62c-2.29,0.41-4.75,0.02-7.38-1.06 C4.39,84.19,6.36,82.92,6,76.15C5.73,71.1,10.14,66.95,15.2,66.95L15.2,66.95z M104.15,89.85v0.3h-0.48 C103.83,90.06,103.99,89.96,104.15,89.85L104.15,89.85z M102.02,91.07v21.49H8.26V91.69c3.39,1.35,6.72,1.72,9.89,1.15 c3.86-0.7,7.39-2.77,10.45-6.13c4.07,4.31,8.37,6.39,12.89,6.34c4.58-0.05,9.16-2.32,13.72-6.71c4.93,4.73,9.7,6.83,14.32,6.58 c4.37-0.23,8.39-2.54,12.1-6.68c3.9,4.77,8.25,6.98,13,6.86C97.05,93.03,99.51,92.34,102.02,91.07L102.02,91.07z M44.13,7.71 C52.37,19.65,35.94,21.79,44.13,7.71L44.13,7.71z M54.96,0C63.2,11.94,46.76,14.08,54.96,0L54.96,0z M65.79,7.71 C74.02,19.65,57.59,21.79,65.79,7.71L65.79,7.71z"/>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/08-technology/internet-web-browser.svg
    website: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 115.33" enable-background="new 0 0 122.88 115.33" xmlSpace="preserve">
            <g>
                <path d="M76.98,97.89c-3.62,4.01-7.79,7.99-12.51,11.94c1.28-0.17,2.56-0.38,3.81-0.62c3.42-0.69,6.71-1.7,9.89-3.08 c0.82-0.35,1.62-0.72,2.41-1.1c0.59,0.76,1.25,1.42,1.96,1.98c0.77,0.61,1.59,1.09,2.45,1.45c-1.58,0.85-3.2,1.62-4.86,2.34 c-3.53,1.52-7.16,2.63-10.9,3.39c-3.74,0.76-7.61,1.14-11.59,1.14c-3.98,0-7.82-0.38-11.59-1.14c-3.7-0.73-7.26-1.83-10.76-3.32 c-0.03,0-0.1-0.03-0.14-0.07c-3.46-1.49-6.75-3.29-9.82-5.33c-3.08-2.04-5.92-4.39-8.51-6.99c-2.63-2.59-4.95-5.43-6.99-8.51 c-2.08-3.08-3.84-6.37-5.33-9.82c-1.52-3.53-2.63-7.16-3.39-10.9C0.38,65.52,0,61.64,0,57.66c0-3.98,0.38-7.82,1.14-11.59 c0.73-3.7,1.83-7.26,3.32-10.76c0-0.03,0.03-0.1,0.07-0.14c1.49-3.49,3.29-6.75,5.33-9.82c2.04-3.08,4.39-5.92,6.99-8.51 c2.59-2.63,5.43-4.95,8.51-6.99c3.08-2.08,6.36-3.84,9.82-5.33c3.53-1.52,7.16-2.63,10.9-3.39C49.81,0.38,53.69,0,57.66,0 c3.98,0,7.82,0.38,11.59,1.14c3.7,0.73,7.26,1.83,10.76,3.32c0.03,0,0.1,0.03,0.14,0.07c3.46,1.49,6.75,3.29,9.82,5.33 c3.08,2.04,5.92,4.39,8.51,6.99c2.63,2.59,4.95,5.43,6.99,8.51c2.08,3.08,3.84,6.37,5.33,9.82c1.52,3.53,2.63,7.16,3.39,10.9 c0.43,2.12,0.74,4.28,0.93,6.48l-5.23-1.39c-0.16-1.38-0.37-2.74-0.64-4.09c-0.69-3.42-1.7-6.71-3.08-9.89 c-0.86-2.04-1.83-3.98-2.91-5.85l0,0H86.38c3,5.13,5.16,10.23,6.47,15.32l-5.68-1.51c-1.48-4.56-3.71-9.16-6.71-13.81H60.19v9.39 c-0.36,0.21-0.72,0.46-1.07,0.74l0,0c-0.28,0.22-0.55,0.46-0.8,0.71c-0.34,0.35-0.66,0.72-0.93,1.12 c-0.44,0.64-0.79,1.35-1.06,2.11c-0.27,0.77-0.43,1.54-0.49,2.29c-0.05,0.64-0.03,1.3,0.07,1.95c0.08,0.54,0.2,1.07,0.38,1.59 l0.05,0.14c0.04,0.11,0.08,0.22,0.12,0.32c0.06,0.17,0.11,0.27,0.13,0.32l0.02-0.01l3.63,8.17h-0.06v23.8h10.62l2.24,5.05H60.19 v17.78c5.65-4.64,10.5-9.32,14.54-14.01L76.98,97.89L76.98,97.89z M115.14,97.97c-0.34,0.34-0.74,0.6-1.16,0.79 c-0.44,0.2-0.91,0.32-1.38,0.36c-0.51,0.04-1.03-0.01-1.53-0.17c-0.48-0.15-0.94-0.4-1.35-0.74l-11.09-9.41l-3.81,9.35 c-0.32,0.78-0.7,1.5-1.13,2.15c-0.44,0.66-0.93,1.23-1.44,1.68c-0.41,0.36-0.86,0.67-1.33,0.9c-0.47,0.23-0.95,0.38-1.45,0.45 c-0.58,0.08-1.16,0.04-1.72-0.12c-0.54-0.16-1.06-0.42-1.56-0.81c-0.4-0.31-0.77-0.71-1.12-1.19c-0.32-0.44-0.61-0.96-0.88-1.56 c-7.22-16.27-15.83-33.78-22.27-50.16c-0.08-0.22-0.14-0.44-0.17-0.67c-0.03-0.23-0.04-0.46-0.02-0.69 c0.02-0.27,0.08-0.53,0.17-0.79c0.09-0.25,0.21-0.5,0.36-0.72c0.08-0.11,0.16-0.22,0.26-0.31c0.08-0.08,0.17-0.16,0.27-0.23 c0.18-0.14,0.37-0.26,0.57-0.36l0.05-0.02c0.19-0.09,0.39-0.16,0.58-0.2l0.09-0.02c0.18-0.04,0.36-0.06,0.54-0.07 c0.21-0.01,0.41,0.01,0.61,0.04c0.07,0.01,0.14,0.02,0.21,0.03c17.64,4.38,35.38,9.38,52.98,14.05c0.63,0.17,1.19,0.38,1.68,0.62 c0.53,0.27,0.98,0.57,1.35,0.91c0.46,0.42,0.81,0.9,1.05,1.41c0.25,0.53,0.38,1.1,0.39,1.69v0.01c0.01,0.5-0.06,1-0.21,1.5 c-0.15,0.5-0.38,0.98-0.68,1.45c-0.37,0.58-0.85,1.16-1.43,1.69c-0.56,0.52-1.22,1.01-1.95,1.46c-2.89,1.7-5.77,3.5-8.64,5.24 l11.05,9.47c0.4,0.35,0.72,0.76,0.94,1.21l0.03,0.08c0.21,0.45,0.34,0.92,0.38,1.41c0.04,0.49-0.01,1-0.16,1.5 c-0.14,0.47-0.37,0.93-0.69,1.34C119.84,92.6,117.01,96.24,115.14,97.97L115.14,97.97z M112.24,94.34l5.35-6.28l-13-11.14 l-0.07-0.07c-0.06-0.06-0.13-0.13-0.18-0.19c-0.08-0.09-0.15-0.19-0.21-0.3c-0.33-0.54-0.4-1.16-0.26-1.73 c0.14-0.57,0.5-1.09,1.04-1.41c3.76-2.07,7.64-4.66,11.35-6.89c0.43-0.26,0.81-0.55,1.13-0.84c0.3-0.28,0.55-0.56,0.72-0.83 c0.07-0.11,0.12-0.2,0.15-0.29c-0.08-0.06-0.17-0.11-0.3-0.17c-0.19-0.09-0.44-0.17-0.73-0.25L67.51,50.77L88.39,97.8 c0.12,0.26,0.24,0.49,0.37,0.68l0.03,0.05c0.07,0.09,0.13,0.17,0.18,0.22c0.08-0.04,0.16-0.11,0.26-0.2 c0.24-0.21,0.48-0.5,0.7-0.84c0.24-0.36,0.46-0.79,0.65-1.27l5-12.28l0.05-0.1c0.04-0.08,0.08-0.16,0.12-0.23l0.03-0.05 c0.05-0.08,0.11-0.16,0.18-0.24c0.41-0.48,0.98-0.76,1.56-0.8c0.58-0.05,1.18,0.13,1.67,0.54L112.24,94.34L112.24,94.34z M50.89,109.83c-8.16-6.85-14.7-13.77-19.54-20.79H15.39c1.52,2.08,3.22,4.01,5.05,5.85c2.39,2.39,4.95,4.5,7.75,6.36 c2.77,1.87,5.78,3.49,9.03,4.88c0.03,0.03,0.07,0.03,0.1,0.07c3.15,1.31,6.4,2.35,9.79,3.01c1.25,0.24,2.53,0.45,3.8,0.62H50.89 L50.89,109.83z M12.07,83.99h16.05c-4.46-7.82-6.88-15.77-7.16-23.8H5.12c0.14,2.77,0.45,5.43,0.97,8.06 c0.69,3.42,1.69,6.71,3.08,9.89C10.03,80.18,11,82.12,12.07,83.99L12.07,83.99z M5.12,55.14h15.95c0.59-7.89,3.22-15.81,7.89-23.8 H12.07c-1.07,1.87-2.04,3.8-2.91,5.85c-0.03,0.03-0.03,0.07-0.07,0.1c-1.31,3.15-2.35,6.4-3.01,9.79 C5.57,49.71,5.22,52.37,5.12,55.14L5.12,55.14z M15.36,26.29h16.85c4.81-6.92,11.14-13.87,19.03-20.86 c-1.42,0.17-2.8,0.38-4.15,0.66c-3.42,0.69-6.71,1.7-9.89,3.08c-3.22,1.38-6.23,3.01-9.03,4.88c-2.8,1.87-5.36,3.98-7.75,6.36 c-1.83,1.83-3.53,3.77-5.05,5.85L15.36,26.29L15.36,26.29z M64.1,5.43c7.92,6.99,14.25,13.94,19.03,20.86h16.85 c-1.52-2.08-3.22-4.01-5.05-5.85c-2.39-2.39-4.95-4.5-7.75-6.37c-2.77-1.87-5.78-3.49-9.03-4.88c-0.03-0.03-0.07-0.03-0.1-0.07 c-3.15-1.31-6.4-2.35-9.79-3.01c-1.38-0.28-2.77-0.48-4.15-0.66V5.43L64.1,5.43z M60.19,8.72v17.57h16.74 C72.54,20.48,66.97,14.63,60.19,8.72L60.19,8.72z M55.14,106.82V89.04H37.53C42.06,94.99,47.94,100.94,55.14,106.82L55.14,106.82z M55.14,83.99v-23.8H26.01c0.31,7.99,3.01,15.91,7.99,23.8H55.14L55.14,83.99z M55.14,55.14v-23.8H34.87 c-5.19,8.06-8.09,15.98-8.75,23.8H55.14L55.14,55.14z M55.14,26.29V8.72c-6.78,5.92-12.35,11.76-16.74,17.57H55.14L55.14,26.29z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.svg
    github: (
        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="25px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640">
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/sword.svg
    sword: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 121.66" enable-background="new 0 0 122.88 121.66" xmlSpace="preserve">
            <g>
                <path d="M7.21,96.55l2.84,2.84l23.32-23.32l-4-4c-3.38-3.38-4.05-8.48-2.01-12.54l7.9,7.9l66.52-66.52 c0.3-0.3,0.71-0.45,1.11-0.42L121.4,0c0.8-0.02,1.46,0.61,1.48,1.41c0,0.03,0,0.06,0,0.09h0l-0.7,18.41 c-0.01,0.38-0.17,0.72-0.42,0.97l0,0L55.24,87.41l7.05,7.05c-4.06,2.04-9.16,1.37-12.54-2.01l-4-4l-23.32,23.32l2.68,2.68 c1.64,1.64,1.64,4.33,0,5.98l0,0c-1.64,1.64-4.33,1.64-5.98,0L1.23,102.52c-1.64-1.64-1.64-4.33,0-5.98h0 C2.88,94.9,5.57,94.9,7.21,96.55L7.21,96.55z M45.22,75.4l60.91-60.91l0,0c0.56-0.56,1.48-0.57,2.05,0 c0.57,0.56,0.57,1.48,0.01,2.05l0,0l0,0L47.27,77.45l6.91,6.91l65.13-65.13l0.62-16.29l-16.49,0.43L38.31,68.49L45.22,75.4 L45.22,75.4z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/gaming-gamepad.svg
    controller: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 95.17" enable-background="new 0 0 122.88 95.17" xmlSpace="preserve">
            <g>
                <path d="M104.42,21.23h0.27c0.78,0,1.47,0.36,1.93,0.91c11.41,11.74,17.4,37.23,16.07,54.29c-0.37,4.73-1.3,8.89-2.83,12.03 c-1.74,3.58-4.25,5.93-7.61,6.55c-4.28,0.79-9.63-1.47-16.06-8.02c-0.83-0.84-1.69-1.69-2.57-2.56c-3-2.95-6.16-6.06-8.83-9.81 H38.08c-2.68,3.78-5.84,6.89-8.85,9.84c-0.87,0.86-1.73,1.7-2.55,2.53c-6.43,6.55-11.78,8.81-16.06,8.02 c-3.36-0.62-5.88-2.97-7.61-6.55c-1.53-3.15-2.46-7.3-2.83-12.03C-1.15,59.29,4.9,33.65,16.4,21.98c0.49-0.5,1.13-0.75,1.78-0.75 v-0.01h0.28c1.41-1.94,3.16-3.5,5.13-4.68c2.99-1.79,6.47-2.68,9.93-2.68c3.47,0,6.95,0.89,9.93,2.68c1.96,1.17,3.71,2.73,5.1,4.67 h7.91C55.85,6.29,60,2.54,66.13,2.12c2.22-0.15,4.57,0.24,7.03,0.65c4.65,0.77,9.79,1.62,13.44-2.03c0.98-0.98,2.56-0.98,3.54,0 c0.98,0.98,0.98,2.56,0,3.54C84.67,9.74,78.2,8.67,72.35,7.7c-2.16-0.36-4.22-0.7-5.89-0.59c-3.31,0.22-5.51,2.98-4.99,14.12h12.87 c1.4-1.94,3.16-3.51,5.12-4.68c2.99-1.79,6.47-2.68,9.92-2.68s6.93,0.9,9.92,2.68C101.26,17.72,103.02,19.28,104.42,21.23 L104.42,21.23z M90.87,51.95c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65 C86.05,50.12,89.03,50.12,90.87,51.95L90.87,51.95z M101.33,42.57c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0 c-1.84-1.84-1.84-4.81,0-6.65C96.52,40.73,99.49,40.73,101.33,42.57L101.33,42.57z M80.4,42.57c1.84,1.84,1.84,4.81,0,6.65 c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65C75.59,40.73,78.57,40.73,80.4,42.57L80.4,42.57z M90.87,34.19 c1.84,1.84,1.84,4.81,0,6.65c-1.84,1.84-4.81,1.84-6.65,0c-1.84-1.84-1.84-4.81,0-6.65C86.05,32.36,89.03,32.36,90.87,34.19 L90.87,34.19z M26.85,35.03h8.17v8.33h8.33v8.17h-8.33v8.33h-8.17v-8.33h-8.33v-8.17h8.33V35.03L26.85,35.03z M103.62,26.24h-0.54 v-0.01c-0.85,0-1.68-0.43-2.14-1.22c-1.07-1.78-2.53-3.18-4.21-4.18c-2.19-1.31-4.76-1.96-7.36-1.96c-2.59,0-5.17,0.65-7.36,1.96 c-1.63,0.97-3.05,2.32-4.11,4.02c-0.41,0.82-1.26,1.38-2.24,1.38H47.22v-0.01c-0.85,0-1.68-0.43-2.14-1.22 c-1.06-1.78-2.52-3.17-4.19-4.17c-2.2-1.32-4.78-1.98-7.37-1.98c-2.59,0-5.17,0.66-7.37,1.98c-1.63,0.98-3.06,2.32-4.12,4.02 c-0.41,0.82-1.26,1.38-2.24,1.38h-0.54C9.19,37.25,3.95,60.38,5.17,76.06c0.32,4.12,1.09,7.67,2.34,10.23 c1.04,2.13,2.37,3.51,4.01,3.81c2.67,0.49,6.47-1.39,11.6-6.61c0.85-0.86,1.72-1.72,2.61-2.59c3.08-3.02,6.33-6.22,8.83-9.96 c0.42-0.79,1.25-1.32,2.21-1.32h49.34v0.01c0.81,0,1.6,0.39,2.08,1.12c2.54,3.84,5.83,7.08,8.94,10.14 c0.9,0.88,1.78,1.75,2.63,2.62c5.12,5.22,8.93,7.1,11.6,6.61c1.64-0.3,2.98-1.68,4.01-3.81c1.25-2.57,2.02-6.11,2.34-10.23 C118.93,60.38,113.69,37.25,103.62,26.24L103.62,26.24z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/08-technology/learning-machine-ai.svg
    ai: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 114.75 122.88" enable-background="new 0 0 114.75 122.88" xmlSpace="preserve">
            <g>
                <path d="M64.94,8.92c2.03,3.52,3.42,12.25,4.15,23.81h12.97V20.46c-0.28-0.13-0.55-0.28-0.81-0.45c-0.49-0.31-0.94-0.67-1.33-1.06 l-0.05-0.05c-0.69-0.69-1.24-1.52-1.62-2.44c-0.38-0.91-0.59-1.91-0.59-2.96c0-1.04,0.21-2.03,0.59-2.95 c0.39-0.95,0.97-1.8,1.67-2.51c0.71-0.71,1.56-1.28,2.51-1.67c0.91-0.38,1.91-0.59,2.95-0.59c1.04,0,2.03,0.21,2.95,0.59 c0.95,0.39,1.8,0.97,2.51,1.67c0.71,0.71,1.28,1.56,1.67,2.5l0.02,0.06c0.36,0.9,0.56,1.88,0.56,2.89c0,1.04-0.21,2.03-0.59,2.95 c-0.39,0.95-0.97,1.8-1.67,2.51l-0.06,0.06c-0.35,0.34-0.74,0.66-1.15,0.93c-0.22,0.15-0.45,0.28-0.69,0.41v15.84 c0,0.95-0.39,1.81-1.01,2.43c-0.62,0.62-1.48,1.01-2.43,1.01H69.43c0.12,3.29,0.2,6.75,0.23,10.32h30.44 c0.13-0.26,0.27-0.51,0.42-0.75l0.04-0.05c0.29-0.45,0.63-0.86,0.99-1.22c0.71-0.71,1.56-1.28,2.51-1.67l0.06-0.02 c0.9-0.36,1.88-0.57,2.89-0.57c1.04,0,2.03,0.21,2.95,0.59c0.95,0.39,1.8,0.97,2.51,1.67c0.71,0.71,1.28,1.56,1.67,2.51 c0.38,0.92,0.59,1.91,0.59,2.95c0,1.04-0.21,2.03-0.59,2.95c-0.39,0.95-0.97,1.8-1.67,2.51c-0.71,0.71-1.56,1.28-2.51,1.67 l-0.06,0.02c-0.9,0.36-1.88,0.56-2.89,0.56c-1.04,0-2.04-0.21-2.95-0.59c-0.94-0.39-1.79-0.96-2.51-1.67 c-0.38-0.38-0.72-0.8-1.02-1.27c-0.16-0.24-0.3-0.49-0.43-0.75H69.67c-0.03,3.9-0.11,7.89-0.24,11.95h37.21 c0.95,0,1.81,0.39,2.43,1.01c0.62,0.62,1.01,1.48,1.01,2.43v25.53c0.33,0.14,0.64,0.3,0.94,0.48c0.54,0.32,1.03,0.71,1.47,1.15 c0.71,0.71,1.28,1.56,1.67,2.51l0.02,0.06c0.36,0.9,0.57,1.88,0.57,2.89c0,1.04-0.21,2.03-0.59,2.95c-0.39,0.95-0.97,1.8-1.67,2.51 c-0.71,0.71-1.56,1.28-2.51,1.67c-0.91,0.38-1.91,0.59-2.95,0.59c-1.04,0-2.03-0.21-2.95-0.59c-0.95-0.39-1.8-0.97-2.51-1.67 c-0.71-0.71-1.28-1.56-1.67-2.51c-0.38-0.91-0.59-1.91-0.59-2.95c0-1.04,0.21-2.04,0.59-2.95c0.39-0.95,0.97-1.8,1.67-2.51 c0.32-0.32,0.68-0.62,1.06-0.89c0.18-0.13,0.37-0.25,0.57-0.36V75.66H69.16c-0.15,3.24-0.33,6.49-0.55,9.73h11.04 c0.95,0,1.81,0.39,2.43,1.01c0.62,0.62,1.01,1.48,1.01,2.43v13.66c0.25,0.13,0.48,0.27,0.72,0.42c0.46,0.3,0.87,0.64,1.24,1.01 l0.06,0.06c0.68,0.7,1.24,1.53,1.62,2.45c0.38,0.91,0.59,1.91,0.59,2.95c0,1.04-0.21,2.04-0.59,2.95l-0.03,0.06 c-0.39,0.93-0.96,1.76-1.65,2.45l-0.05,0.05c-0.7,0.69-1.53,1.25-2.44,1.63c-0.91,0.38-1.92,0.59-2.96,0.59 c-1.04,0-2.03-0.21-2.95-0.59c-0.95-0.39-1.8-0.97-2.51-1.67l-0.06-0.06c-0.68-0.7-1.24-1.53-1.62-2.45 c-0.38-0.92-0.59-1.91-0.59-2.95s0.21-2.03,0.59-2.95c0.39-0.95,0.96-1.8,1.67-2.51l0,0c0.39-0.39,0.83-0.74,1.29-1.04 c0.25-0.16,0.51-0.31,0.78-0.44V92.28H68.1c-0.11,1.37-0.23,2.74-0.35,4.1c-0.16,1.76-0.67,5.01-0.34,6.62 c0.88,4.27-2.97,17.15-14.29,19.52c-5.58,1.16-11.35-0.55-15.7-3.95c-3.48-2.71-6.09-6.52-7.03-10.83 c-1.82-0.07-3.67-0.44-5.47-1.04c-3.98-1.34-7.81-3.95-10.8-7.41c-3.01-3.47-5.19-7.83-5.88-12.68c-0.35-2.53-0.3-5.17,0.26-7.89 c-1.95-1.77-3.63-3.76-4.96-5.93C1.22,69.08-0.05,64.9,0,60.6c0.05-4.33,1.43-8.72,4.42-12.8c1.74-2.37,4.03-4.63,6.93-6.7 c-0.03-0.79-0.03-1.58-0.01-2.36c0.23-6.32,2.56-11.88,5.96-16.03c3.52-4.3,8.23-7.11,13.07-7.8h0.02 c0.17-0.71,0.37-1.41,0.63-2.09c1.56-4.23,4.77-7.83,8.7-10.12c3.96-2.3,8.71-3.32,13.34-2.36C57.51,1.28,61.75,3.94,64.94,8.92 L64.94,8.92L64.94,8.92z M30.77,99.21c1.64-5.16,5.97-10.31,14.14-14.48c2.04-1.03,4.52-0.23,5.57,1.8 c1.03,2.04,0.23,4.52-1.8,5.57c-7.57,3.87-10.42,8.31-10.42,12.18c0,3.02,1.72,5.84,4.22,7.8c2.54,1.97,5.82,3,8.92,2.36 c3.86-0.8,7.58-4.37,9.51-12.15V20.49c-1.93-7.72-5.65-11.27-9.5-12.07c-2.54-0.53-5.24,0.07-7.54,1.42 c-2.33,1.35-4.2,3.43-5.09,5.83c-1.18,3.2-0.48,7.13,3.52,10.83c1.66,1.55,1.77,4.14,0.22,5.8c-1.55,1.66-4.14,1.77-5.8,0.22 c-3.11-2.88-5.03-5.94-5.99-8.99c-2.45,0.59-4.87,2.21-6.83,4.59c-2.29,2.79-3.86,6.57-4.02,10.91c-0.04,1.15,0.02,2.37,0.19,3.62 h-0.01c0.22,1.62-0.5,3.3-1.98,4.21c-3,1.84-5.21,3.87-6.76,5.98c-1.88,2.56-2.74,5.25-2.77,7.84c-0.03,2.63,0.78,5.25,2.23,7.6 c1.23,1.99,2.91,3.81,4.96,5.33c1.54,1.06,2.26,3.04,1.63,4.89c-0.81,2.4-0.99,4.73-0.68,6.9c0.44,3.12,1.89,5.97,3.87,8.26 c1.99,2.3,4.51,4.02,7.09,4.9C28.69,98.96,29.74,99.16,30.77,99.21L30.77,99.21L30.77,99.21z M31.71,41.1 c1.62-1.59,4.22-1.57,5.82,0.05c1.59,1.62,1.57,4.22-0.05,5.82c-3.53,3.48-5.37,7.96-5.57,12.54c-0.19,4.72,1.34,9.58,4.56,13.57 c1.43,1.77,1.14,4.36-0.63,5.79c-1.77,1.43-4.36,1.14-5.79-0.63c-4.51-5.59-6.65-12.39-6.38-19.06 C23.96,52.56,26.62,46.1,31.71,41.1L31.71,41.1L31.71,41.1z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/09-controller-and-music/music.svg
    music: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 104.23 122.88" enable-background="new 0 0 104.23 122.88" xmlSpace="preserve">
            <g>
                <path d="M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03 c0,0,0,0.01,0,0.01c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48 c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,0,0,0,0,0.01 c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04L87.9,78.04L87.9,78.04z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/18-education/read-book.svg
    book: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 101.37" enable-background="new 0 0 122.88 101.37" xmlSpace="preserve">
            <g>
                <path d="M12.64,77.27l0.31-54.92h-6.2v69.88c8.52-2.2,17.07-3.6,25.68-3.66c7.95-0.05,15.9,1.06,23.87,3.76 c-4.95-4.01-10.47-6.96-16.36-8.88c-7.42-2.42-15.44-3.22-23.66-2.52c-1.86,0.15-3.48-1.23-3.64-3.08 C12.62,77.65,12.62,77.46,12.64,77.27L12.64,77.27z M103.62,19.48c-0.02-0.16-0.04-0.33-0.04-0.51c0-0.17,0.01-0.34,0.04-0.51V7.34 c-7.8-0.74-15.84,0.12-22.86,2.78c-6.56,2.49-12.22,6.58-15.9,12.44V85.9c5.72-3.82,11.57-6.96,17.58-9.1 c6.85-2.44,13.89-3.6,21.18-3.02V19.48L103.62,19.48z M110.37,15.6h9.14c1.86,0,3.37,1.51,3.37,3.37v77.66 c0,1.86-1.51,3.37-3.37,3.37c-0.38,0-0.75-0.06-1.09-0.18c-9.4-2.69-18.74-4.48-27.99-4.54c-9.02-0.06-18.03,1.53-27.08,5.52 c-0.56,0.37-1.23,0.57-1.92,0.56c-0.68,0.01-1.35-0.19-1.92-0.56c-9.04-4-18.06-5.58-27.08-5.52c-9.25,0.06-18.58,1.85-27.99,4.54 c-0.34,0.12-0.71,0.18-1.09,0.18C1.51,100.01,0,98.5,0,96.64V18.97c0-1.86,1.51-3.37,3.37-3.37h9.61l0.06-11.26 c0.01-1.62,1.15-2.96,2.68-3.28l0,0c8.87-1.85,19.65-1.39,29.1,2.23c6.53,2.5,12.46,6.49,16.79,12.25 c4.37-5.37,10.21-9.23,16.78-11.72c8.98-3.41,19.34-4.23,29.09-2.8c1.68,0.24,2.88,1.69,2.88,3.33h0V15.6L110.37,15.6z M68.13,91.82c7.45-2.34,14.89-3.3,22.33-3.26c8.61,0.05,17.16,1.46,25.68,3.66V22.35h-5.77v55.22c0,1.86-1.51,3.37-3.37,3.37 c-0.27,0-0.53-0.03-0.78-0.09c-7.38-1.16-14.53-0.2-21.51,2.29C79.09,85.15,73.57,88.15,68.13,91.82L68.13,91.82z M58.12,85.25 V22.46c-3.53-6.23-9.24-10.4-15.69-12.87c-7.31-2.8-15.52-3.43-22.68-2.41l-0.38,66.81c7.81-0.28,15.45,0.71,22.64,3.06 C47.73,78.91,53.15,81.64,58.12,85.25L58.12,85.25z"/>
            </g>
        </svg>
    ),
    // https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/puzzle.svg
    puzzle: (
        <svg className="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.88 112.43" enable-background="new 0 0 122.88 112.43" xmlSpace="preserve">
            <g>
                <path d="M29.96,111.88c5.94,0,10.77-4.32,10.77-9.64c0-1.9-0.62-3.67-1.69-5.17l0.29,0c-4.73-5.17-4.23-9.4,0.78-10.88 h16.57c1.87,0,3.4-1.53,3.4-3.4V68.08c1.16-10.04,5.45-7.06,10.5-3.95c12.2,7.51,20.31-10.28,10.45-16.37 c-7.74-4.78-11.09,3.44-16.76,2.59c-2.19-0.33-3.71-2.7-4.19-6.3V29.51c0-1.87-1.53-3.4-3.4-3.4l-14.51,0 c-6.87-0.87-8.17-5.49-2.85-11.3h-0.29c1.07-1.5,1.69-3.27,1.69-5.17C40.73,4.32,35.91,0,29.96,0C24.02,0,19.2,4.32,19.2,9.64 c0,1.9,0.62,3.67,1.69,5.17l-0.07,0c5.32,5.81,4.03,10.44-2.85,11.3H3.4c-1.87,0-3.4,1.53-3.4,3.4v15.16 c1.09,6.24,5.59,7.26,11.19,2.13v0.07c1.5-1.07,3.27-1.69,5.17-1.69c5.32,0,9.64,4.82,9.64,10.76c0,5.94-4.32,10.76-9.64,10.76 c-1.9,0-3.67-0.62-5.17-1.69v0.29c-5.6-5.13-10.1-4.1-11.19,2.14V82.8c0,1.87,1.53,3.4,3.4,3.4l16.63,0 c5.01,1.48,5.52,5.71,0.78,10.88h0.07c-1.06,1.5-1.69,3.27-1.69,5.17C19.2,107.57,24.02,111.89,29.96,111.88L29.96,111.88 L29.96,111.88z M92.92,112.43H92.9c-5.94,0-10.77-4.32-10.77-9.64c0-1.9,0.62-3.67,1.69-5.17h-0.07c4.73-5.17,4.23-9.4-0.78-10.88 l-16.63,0c-1.87,0-3.4-1.53-3.4-3.4V68.01c0.8-2.32,1.82-3.14,3.02-3.17c0.55-0.01,1.13,0.14,1.75,0.4c1.74,0.72,3.78,2.23,6,3.09 c8.56,3.3,15.91-5.03,15.42-13.59c-0.11-1.91-0.88-3.79-2.02-5.53c-4.37-6.68-10.84-7.31-17.08-3.5c-3.18,1.95-5.71,3.42-7.16-1.17 l0.08-14.49c0.01-1.87,1.53-3.4,3.4-3.4l14.56,0c6.87-0.87,8.17-5.49,2.85-11.3h0.07c-1.07-1.5-1.69-3.27-1.69-5.17 c0-5.32,4.82-9.64,10.77-9.64l0.02,0c5.94,0,10.77,4.32,10.77,9.64c0,1.9-0.62,3.67-1.69,5.17h0.07 c-5.32,5.81-4.03,10.44,2.85,11.3h14.56c1.87,0,3.4,1.53,3.4,3.4v15.16c-1.09,6.24-5.59,7.26-11.19,2.13v0.07 c-1.5-1.07-3.27-1.69-5.17-1.69c-5.32,0-9.64,4.82-9.64,10.76c0,5.94,4.32,10.77,9.64,10.77c1.9,0,3.67-0.62,5.17-1.69v0.29 c5.61-5.13,10.1-4.1,11.19,2.14v15.33c0,1.87-1.53,3.4-3.4,3.4l-16.63,0c-5.01,1.48-5.51,5.71-0.78,10.88H102 c1.07,1.5,1.69,3.27,1.69,5.17C103.68,108.11,98.86,112.43,92.92,112.43L92.92,112.43L92.92,112.43z"/>
            </g>
        </svg>
    )
}

export { PLanguages, PSofts, Flags, Interests, About, Svg };