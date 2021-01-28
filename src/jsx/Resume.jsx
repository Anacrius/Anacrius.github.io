import React from 'react';

import InterestsLists from "./InterestLists";
import Timeline from "./Timeline"

import { PLanguages, PSofts, Svg } from "./Logos";
import { Article, Logo, Icontxt } from "./Format";
import { GeneralInfo, Description, Documentation } from "./Aboutme";

const Resume = () => {

    const interests = <InterestsLists divname="interestlists" />;

    const logos_column = (header, titles, logos) => {
        return (
            <p className="logos">
                <h2 className="s-title">{header}</h2>
                {
                    titles.map((title, index) => {
                        return(
                            <Icontxt
                                icon={<Logo key={index} src={logos[index]} w="30" h="30" alt={title + " logo"} />}
                                txt={title}
                            />
                        );
                    })
                }
            </p>
        );
    } // render a list of logos following its text in a column

    const plogos = () => {
        const languages = ["C++", "C", "Haskell", "Javascript", "Python"];
        const logos = [PLanguages.cpp, PLanguages.c, PLanguages.haskell, PLanguages.js, PLanguages.python];

        return logos_column("Languages", languages, logos);
    }

    const front_logos = () => {
        const front_end = ["HTML", "Css", "Materialize", "Jquery", "React"];
        const logos = [PLanguages.html, PLanguages.css, PLanguages.materialize, PLanguages.jquery, PLanguages.react]

        return logos_column("Front-end", front_end, logos);
    }

    const back_logos = () => {
        const back_end = ["NodeJs", "ExpressJS", "MongoDB"]
        const logos = [PLanguages.node, PLanguages.express, PLanguages.mongo]

        return logos_column("Back-end", back_end, logos);
    }

    const slogos = () => {
        const sofwares_tools = ["Teams", "Visual Studio Code", "Excel", "PowerPoint", "Google Sheets"];
        const logos = [PSofts.teams, PSofts.visual, PSofts.excel, PSofts.ppt, PSofts.gsheets]

        return logos_column("Softwares / Tools", sofwares_tools, logos);
    }

    const skills = (
        <p className="skills">
            {plogos()}
            {front_logos()}
            {back_logos()}
            {slogos()}
        </p>
    );

    const state = GeneralInfo;
    return (
        <div className="container">
            <div className="resume">
                <main className="resume-body">
                    <header className="resume-header">
                        <article className="left-rheader">
                            <h1 className="fullname">
                                <img className="profile-pic"
                                    src={state.avatar}
                                    alt="github profilepic"
                                    width="70"
                                    height="70"
                                />
                                <span>
                                    {GeneralInfo.fullname}
                                </span>
                            </h1>
                            <h4 className="occupation">{GeneralInfo.occupation}</h4>
                            <h4>Developper actually looking for a work-study contract for January 2021</h4>
                        </article>
                        <article className="right-rheader">
                            <Icontxt
                                icon={Svg.mail}
                                txt={<a href={"mailto:" + GeneralInfo.email}>{GeneralInfo.email}</a>}
                            />
                            <Icontxt
                                icon={Svg.place}
                                txt={GeneralInfo.location}
                            />
                            <Icontxt
                                icon={Svg.cake}
                                txt={GeneralInfo.birthdate}
                            />
                            <Icontxt
                                icon={Svg.website}
                                txt={<a href={GeneralInfo.website}>{GeneralInfo.website}</a>}
                            />
                            <Icontxt
                                icon={Svg.github}
                                txt={<a href={GeneralInfo.github}>{GeneralInfo.github}</a>}
                            />
                        </article>
                    </header>
                    <Article
                        type="Description"
                        label="Personal Profile"
                        content={
                            Description.map((elem, index) =>
                                <p key={index}>{elem}</p>
                            )
                        }
                    />
                    <Article
                        type="Education"
                        label="Education"
                        content={<Timeline />}
                    />
                    <Article
                        type="Skills"
                        label="Skills"
                        content={skills}
                    />
                    <Article
                        type="Projects"
                        label="Projects"
                        content={
                            <p>See my projects on the Gallery link</p>
                        }
                    />
                    <Article
                        type="Interest"
                        label="Interests - Hobbies"
                        content={interests}
                    />
                    <Article
                        type="Documentation"
                        label="Documentation"
                        content={
                            <p>
                                <a href={Documentation}> More details about the work-study contract (french) </a>
                            </p>
                        }
                    />
                </main>

            </div>
        </div>
    );
}

export default Resume;