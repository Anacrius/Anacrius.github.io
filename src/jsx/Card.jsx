import React, { Component } from 'react'
import "../styles/lightfm.css"

import CustomBtn from "./CustomBtn";
import { PSofts, Svg } from "./Logos";

const prettyParagraph = (text, classname) => {
    const lines = text.split('. ');

    return (<article className={classname}>
        {lines.map((line, index) => <p key={index}>{line + '.'}<br/></p> )}
    </article>);
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full: false,
            title: this.props.title,
            shortDesc: this.props.shortDesc,
            image: this.props.image,
            longDesc: this.props.longDesc,
            credits: this.props.credits,
            github: this.props.github,
            yt: this.props.yt,
            gsheet: this.props.gsheet
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const extend = !(this.state.full);
        this.setState({ full: extend });
    }

    render() {
        const state = this.state;
        return (
            <div className="card">
                <div className="cardimage-c">
                    <img className="cardimage" src={state.image} alt={state.title} />
                </div>
                <article className="cardarticle">
                    <h3 className="card-title">{state.title}</h3>
                    <p>{state.shortDesc}</p>
                    {state.full === true ? prettyParagraph(state.longDesc, "card-longdesc") : null }
                    {state.full === true ? <article>Credits: <br/>{prettyParagraph(state.credits, "card-credits")}</article> : null }
                    <div id="cardfooter">
                        <button onClick={() => this.handleClick()} className="btn">
                            {state.full === false ? "Learn more" : "Close desc"}
                        </button>
                    </div>
                </article>
                <div className="cardlinks">
                    {state.github ? CustomBtn(Svg.github, state.github) : null}
                    {state.gsheet ? CustomBtn(PSofts.gsheets, state.gsheet) : null}
                    {state.yt ? CustomBtn(PSofts.yt, state.yt) : null}
                </div>
            </div>
        );
    }
}

export default Card;