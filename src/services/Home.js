import React, { Component } from "react";

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

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Article
                    title="My First Article - 24 / 11 / 2020"
                    content= {
                    <p>
                    Hello to everyone, you will find on this website a collection of features based on the knowloedges I'm making during my journey. Want you can actually find here for now:
                    <br/>
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
}

export default Home;