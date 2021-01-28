import React from "react";

const Article = ({ title, content }) => (
    <article className="article">
        <h3 className="article-title">
            {title}
        </h3>
        <div className="article-content">
            {content}
        </div>
        <h4 className="article-signature">Maxime Ung</h4>
    </article>
);

const Home = () => {
    return (
        <div className="home">
            <Article
                title="A little update - 28 / 01 / 2021"
                content={
                    <p>
                        I updated some pieces of code in order to optimize and use more appropriate features. I also added some of my projects to the Gallery page since it was empty but there are still more projects to add.
                    <br />
                        <ul className="article-list">
                            <p>Resume:</p>
                            <li> - Convert some class Components into const </li>
                            <li> - Add newly learned back-end features</li>
                        </ul>
                        <ul className="article-list">
                            <p>Gallery:</p>
                            <li> - Update Card component and some css for a better harmonization </li>
                            <li> - Add 4 of my projects with corresponding picture and description</li>
                        </ul>
                        <ul className="article-list">
                            <p>Tweaks:</p>
                            <li> - A new tweak to change the tab title (it resets upon refresh) </li>
                        </ul>
                    I plan on a next update to add more of my projects in the Gallery, more Tweaks and revamp some parts of the design of the website.
                    </p>
                }
            />
            <Article
                title="My First Article - 24 / 11 / 2020"
                content={
                    <p>
                        Hello to everyone, you will find on this website a collection of features based on the knowledges I'm making during my journey. What you can actually find in here for now:
                    <br />
                        <ul className="article-list">
                            <li> - Home (you are here) </li>
                            <li> - Resume tab: this is basically my CV </li>
                            <li> - Gallery (in progress): where all my public projects will be detailled </li>
                            <li> - Tweaks (in progress): some usefull or tricky tweaks/widgets </li>
                        </ul>
                    For now, every contents on this site was implemented by my hands in order to learn how things works.
                    </p>
                }
            />
        </div>
    );
}

export default Home;