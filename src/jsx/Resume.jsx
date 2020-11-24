import React, { Component } from 'react';

import InterestsLists from "./InterestLists";
import Timeline from "./Timeline"

import { PLanguages, PSofts, Svg } from "./Logos";
import { Article, Logo, Keyid, Icontxt } from "./Format";
import { GeneralInfo, Description, Documentation } from "./Aboutme";

class Resume extends Component {
    state = {
        education: [],
        description: Description.map((elem) =>
        <p key={Keyid.id++}>{ elem }</p> )
    }

    interests = <InterestsLists divname="interestlists"/>;

    plogos = (
        <p className="logos">
            <h2 className="s-title">Languages</h2>
            <Icontxt
                icon={<Logo src={PLanguages.cpp} w="30" h="30" alt="cpp logo"/>}
                txt="C++"
            />
            <Icontxt
                icon={<Logo src={PLanguages.c} w="30" h="30" alt="c logo"/>}
                txt="C"
            />
            <Icontxt
                icon={<Logo src={PLanguages.haskell} w="30" h="30" alt="haskell logo" />}
                txt="Haskell"
            />
            <Icontxt
                icon={<Logo src={PLanguages.js} w="30" h="30" alt="js logo"/>}
                txt="Javascript"
            />
            <Icontxt
                icon={<Logo src={PLanguages.python} w="30" h="30" alt="python logo"/>}
                txt="Python"
            />
        </p>
    );

    front_logos = (
        <p className="logos">
            <h2 className="s-title">Front-end</h2>
            <Icontxt
                icon={<Logo src={PLanguages.html} w="30" h="30" alt="html logo"/>}
                txt="HTML"
            />
            <Icontxt
                icon={<Logo src={PLanguages.css} w="30" h="30" alt="css logo"/>}
                txt="Css"
            />
            <Icontxt
                icon={<Logo src={PLanguages.materialize} w="30" h="30" alt="materialize logo" />}
                txt="Materialize"
            />
            <Icontxt
                icon={<Logo src={PLanguages.jquery} w="30" h="30" alt="jquery logo"/>}
                txt="Jquery"
            />
            <Icontxt
                icon={<Logo src={PLanguages.react} w="30" h="30" alt="react logo"/>}
                txt="React"
            />
        </p>
    );

    slogos = (
        <p className="logos">
            <h2 className="s-title">Softwares / Tools</h2>
            <Icontxt
                icon={<Logo src={PSofts.teams} w="30" h="30" alt="teams logo"/>}
                txt="Teams"
            />
            <Icontxt
                icon={<Logo src={PSofts.visual} w="30" h="30" alt="visual logo"/>}
                txt="Visual Studio Code"
            />
            <Icontxt
                icon={<Logo src={PSofts.excel} w="30" h="30" alt="excel logo"/>}
                txt="Excel"
            />
            <Icontxt
                icon={<Logo src={PSofts.ppt} w="30" h="30" alt="ppt logo"/>}
                txt="PowerPoint"
            />
            <Icontxt
                icon={<Logo src={PSofts.gsheets} w="30" h="30" alt="gsheets logo"/>}
                txt="Google Sheets"
            />
        </p>
    );

    skills = (
        <p className="skills">
            {this.plogos}
            {this.front_logos}
            {this.slogos}
        </p>
    );

    render() {
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
                                        { GeneralInfo.fullname }
                                    </span>
                                </h1>
                                <h4 className="occupation">{ GeneralInfo.occupation }</h4>
                                <h4>Developper actually looking for a work-study contract for January 2021</h4>
                            </article>
                            <article className="right-rheader">
                                <Icontxt
                                    icon={ Svg.mail }
                                    txt={ <a href={"mailto:" + GeneralInfo.email}>{GeneralInfo.email}</a> }
                                />
                                <Icontxt
                                    icon={ Svg.place }
                                    txt={ GeneralInfo.location }
                                />
                                <Icontxt
                                    icon={ Svg.cake }
                                    txt={ GeneralInfo.birthdate }
                                />
                                <Icontxt
                                    icon={ Svg.website }
                                    txt={<a href={GeneralInfo.website}>{GeneralInfo.website}</a>}
                                />
                                <Icontxt
                                    icon={ Svg.github }
                                    txt={<a href={GeneralInfo.github}>{GeneralInfo.github}</a>}
                                />
                            </article>
                        </header>
                        <Article
                            type="Description"
                            label="Personal Profile"
                            content={this.state.description}
                        />
                        <Article
                            type="Education"
                            label="Education"
                            content={<Timeline />}
                        />
                        <Article
                            type="Skills"
                            label="Skills"
                            content={this.skills}
                        />
                        <Article
                            type="Projects"
                            label="Projects"
                            content={
                                <a href="./Gallery">See my projects on the Gallery link</a>
                            }
                        />
                        <Article
                            type="Interest"
                            label="Interests - Hobbies"
                            content={this.interests}
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
}

export default Resume;