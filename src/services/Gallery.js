import React from "react";

import Card from "../jsx/Card"
import zshell from "../img/Zsh.png"
import imageComp from "../img/imageComp.png"
import wolfram from "../img/wolfram.png"
import calculator from "../img/calculator.png"

const Gallery = () => {
    return (
        <div className="gallery">
            <Card
                title="Zsh shell"
                shortDesc="A program in C to reproduce a Unix shell "
                longDesc="Implementation based on a Z shell with the following builtins: cd, setenv, unsetenv, env, exit. This command interpreter also handle redirections: |, >, < and <<"
                image={
                    <img src={zshell} alt="Picture of the Zsh shell implementation" />
                }
            />
            <Card
                title="Image Compressor"
                shortDesc="Haskell program to compress the size of an image"
                longDesc="Image Compression based on K-means Clustering. It groups all similar colors into a common one (i.e a dark-red pixel and light-red pixel will both be converted into the same red color)."
                image={
                    <img src={imageComp} alt="Picture of the Zsh shell implementation" />
                }
            />
            <Card
                title="Wolfram"
                shortDesc="Haskell implementation of Wolfram's classification scheme"
                longDesc="Simulation of a two-dimensional cellular automaton. With some similarities with Canway's Game of life, the program simulate on an elementary level the cellular propagation of cells according to a specified rule."
                image={
                    <img src={wolfram} alt="Picture of the Zsh shell implementation" />
                }
            />
            <Card
                title="Basic Calculator"
                shortDesc="Simple Calculator in Java"
                longDesc="As an introduction to Java, I trained by creating this Calculator with a POO orientation. This calculator handles +, -, *, / and %; calculations can also be made without interruption (e.g you can press the following sequence: 3 + 3 + 5 = to get a result without having to use the equal sign between 3 + 3)"
                image={
                    <img src={calculator} alt="Picture of the Zsh shell implementation" />
                }
            />
        </div>
    );
}

export default Gallery;