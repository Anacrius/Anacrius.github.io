import React, { Component } from 'react'
import "../styles/lightfm.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          full: false,
          logo: this.props.logo,
          title: this.props.title,
          shortDesc: this.props.shortDesc,
          longDesc: this.props.longDesc
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /*const extend = !(this.state.full);
        this.setState({full: extend});*/
    }

    render() {
        return (
            <div className="card">
                <h3>{ this.state.title }</h3>
                <p>{ this.state.shortDesc }</p>
                <p>{ this.state.full === true ? this.state.longDesc : "" }</p>
                <div id="cardfooter">
                    <button onClick={() => this.handleClick()} className="btn">Learn more</button>
                </div>
            </div>
        );
    }
}

export default Card;