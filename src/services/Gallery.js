import React from "react";

import Card from "../jsx/Card"
import zshell from "../img/Zsh.png"
import imageComp from "../img/imageComp.png"
import wolfram from "../img/wolfram.png"
import calculator from "../img/calculator.png"
import arcade from "../img/Arcade.png"
import ygosheet from "../img/YGO_French_DList.png"
import reactpage from "../img/ReactPage.png"

const Gallery = () => {
    return (
        <div className="gallery">
            <Card
                title="Image Compressor"
                shortDesc="Haskell program to compress the size of an image"
                longDesc="Image Compression based on K-means Clustering. It groups all similar colors into a common one (i.e a dark-red pixel and light-red pixel will both be converted into the same red color)."
                credits="Benjamin F (@Aubi0ne). Maxime U (@Anacrius)"
                github="https://github.com/Anacrius/Image-Compressor"
                image={imageComp}
            />
            <Card
                title="Resume react page"
                shortDesc="Website made in react hosted by github-page"
                longDesc="Every features was made by hand (without external install except for react-router-dom)"
                credits="Maxime U (@Anacrius). Svg clouds in the background from flaticon.com (check /src/img/svg/credits.md)"
                github="https://github.com/Anacrius/Anacrius.github.io"
                image={reactpage}
            />
            <Card
                title="Zsh shell"
                shortDesc="A program in C to reproduce a Unix shell "
                longDesc="Implementation based on a Z shell with the following builtins: cd, setenv, unsetenv, env, exit. This command interpreter also handle redirections: |, >, < and <<"
                credits="Benjamin F (@Aubi0ne). Maxime U (@Anacrius)"
                image={zshell}
            />
            <Card
                title="Multi-Lib Arcade"
                shortDesc="C++ Arcade machine"
                longDesc="Virtual arcade machine with 3 graphical libs (ncurses, sfml, sdl) which can be switched during running time. This program lets you play Pacman and Nibbler."
                credits="Benjamin F (@Aubi0ne). Chase L (@Kirvlawc). Maxime U (@Anacrius)"
                github="https://github.com/Anacrius/Multi-Lib_Arcade"
                image={arcade}
            />
            <Card
                title="Wolfram"
                shortDesc="Haskell implementation of Wolfram's classification scheme"
                longDesc="Simulation of a two-dimensional cellular automaton. With some similarities with Canway's Game of life, the program simulate on an elementary level the cellular propagation of cells according to a specified rule."
                credits="Maxime U (@Anacrius)"
                image={wolfram}
            />
            <Card
                title="Basic Calculator"
                shortDesc="Simple Calculator in Java"
                longDesc="As an introduction to Java, I trained by creating this Calculator with a POO orientation. This calculator handles +, -, *, / and %; calculations can also be made without interruption (e.g you can press the following sequence: 3 + 3 + 5 = to get a result without having to use the equal sign between 3 + 3)"
                credits="Maxime U (@Anacrius)"
                image={calculator}
            />
            <Card
                title="Yu-Gi-Oh Sheet French Collection"
                shortDesc="Google Sheet with automated field for recording card collection (french language)"
                longDesc="List of all french Yu-Gi-Oh cards since the first release, if the card doesn't exist in french then it's listed in its former language. Liste: list of 25K+ unique reference cards. Progression: Automated tab displaying advanced stats about the collection owned"
                credits="William W (Doc7). Maxime U (@Anacrius)"
                yt="https://www.youtube.com/watch?v=fqDkm9E4dMg"
                gsheet="https://docs.google.com/spreadsheets/d/1WDC5QZTJ4H3oJ5pjnyStb3xKty0vkvvMCREOFCxbOdg/edit#gid=1100632234"
                image={ygosheet}
            />
        </div>
    );
}

export default Gallery;