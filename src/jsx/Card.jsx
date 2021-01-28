import React, { Component } from 'react'
import "../styles/lightfm.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          full: false,
          title: this.props.title,
          shortDesc: this.props.shortDesc,
          image: this.props.image,
          longDesc: this.props.longDesc
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const extend = !(this.state.full);
        this.setState({full: extend});
    }

    render() {
        return (
            <div className="card">
                {this.props.image}
                <h3 className="card-title">{ this.state.title }</h3>
                <p>{ this.state.shortDesc }</p>
                <p>{ this.state.full === true ? this.state.longDesc : "" }</p>
                <div id="cardfooter">
                    <button onClick={() => this.handleClick()} className="btn">
                        {this.state.full === false ? "Learn more" : "Close desc"}
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;