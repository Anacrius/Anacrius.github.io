import React, { Component } from 'react';

import InterestsLists from "./InterestLists";
import Timeline from "./Timeline"

import { PLanguages, PSofts, Flags, Svg } from "./Logos";
import { Article, BiBox, Logo, Interestpoint, Keyid, Icontxt } from "./Format";
import { GeneralInfo, Education, Description, Documentation } from "./Aboutme";

class Resume extends Component {
    state = {
        education: [],
        description: Description.map((elem) =>
        <p key={Keyid.id++}>{ elem }</p> )
    }

    componentDidMount() {
        let education = [];
        let content = [];
        for (const property in Education) {
            content = Education[property].map((elem) =>
                (<p key={Keyid.id++} className="line">{elem}</p>)
            );
            education.push(
                <article key={Keyid.id++}>
                    <h4 className="e-title">{property}</h4>
                    {content}
                </article>
            )
            content = [];
        }
        this.setState({education});
    }

    languages = (
        <div>
            <h4>Languages</h4>
            <Interestpoint
                label="French"
                src={Flags.french}
                alt="french flag logo"
                desc="Native"
            />
            <Interestpoint
                label="English (UK/US)"
                src={Flags.english}
                alt="english flag logo"
                desc="B2-C1"
            />
        </div>
    );

    interests = <InterestsLists divname="interestlists"/>;

    about = (
        <div id="about">
            <BiBox left="Birth date: " right={GeneralInfo.birthdate}/>
            <BiBox left="Location: " right={GeneralInfo.location} />
            <BiBox left="Mail: " right={<a href={"mailto:" + GeneralInfo.email}>{GeneralInfo.email}</a>} />
            <BiBox left="GitHub:" right={<a href={GeneralInfo.github}>{"www.github.com/" + GeneralInfo.pseudo}</a>} />
            {this.languages}
            {this.interests}
        </div>
    );

    plogos = (
        <p className="logos">
            <Logo src={PLanguages.haskell} alt="haskell logo" />
            <Logo src={PLanguages.cpp} alt="cpp logo"/>
            <Logo src={PLanguages.c} alt="c logo"/>
            <Logo src={PLanguages.js} alt="js logo"/>
            <Logo src={PLanguages.python} alt="python logo"/>
        </p>
    );

    front_logos = (
        <p className="logos">
            <Logo src={PLanguages.html} alt="html logo"/>
            <Logo src={PLanguages.css} alt="css logo"/>
            <Logo src={PLanguages.materialize} alt="materialize logo" />
            <Logo src={PLanguages.jquery} alt="jquery logo"/>
            <Logo src={PLanguages.react} alt="react logo"/>
        </p>
    );

    slogos = (
        <p className="logos">
            <Logo src={PSofts.github} alt="github logo" />
            <Logo src={PSofts.teams} alt="teams logo"/>
            <Logo src={PSofts.visual} alt="visual logo"/>
            <Logo src={PSofts.excel} alt="excel logo"/>
            <Logo src={PSofts.ppt} alt="ppt logo"/>
            <Logo src={PSofts.gsheets} alt="gsheets logo"/>
            <Logo src={PSofts.filezilla} alt="filezilla logo"/>
        </p>
    );

    skills = (
        <p className="skills">
            <h4 className="s-title">Computation / Video Games</h4>
            {this.plogos}
            <h4 className="s-title">Front-end web</h4>
            {this.front_logos}
            <h4 className="s-title">Softwares / Tools</h4>
            {this.slogos}
        </p>
    );

    contact = (
        <article className="right-side">
            <span id="contact">Contact:</span>
            <a href={"mailto:" + GeneralInfo.email}><p id="email">{GeneralInfo.email}</p></a>
            <a href={GeneralInfo.github}><p id="website">My public projects</p></a>
        </article>
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
                                    icon={Svg.website}
                                    txt={<a href={GeneralInfo.website}>{GeneralInfo.website}</a>}
                                />
                                <Icontxt
                                    icon={Svg.github}
                                    txt={<a href={GeneralInfo.github}>{"www.github.com/" + GeneralInfo.pseudo}</a>}
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

    /*
    render() {
        const state = GeneralInfo;
        return (
            <div className="container">
                <div className="resume">

                    <div className="leftBar">
                        <div className="aboutme">
                            <img className="profile-pic"
                                src={state.avatar}
                                alt="github profilepic"
                                width="70"
                                height="70"
                            />
                            <div className="textcontent">
                                <p id="fullname">{state.fullname}</p>
                                <p id="jobtitle">{state.job}</p>
                            </div>
                        </div>
                        {this.about}
                    </div>

                    <div className="resume-body">
                        <main className="maincontent">
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
            </div>
        );
    }
    */
}

export default Resume;