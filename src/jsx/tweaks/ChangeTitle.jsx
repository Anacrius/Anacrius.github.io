import React, { Component } from 'react'

class ChangeTitle extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const input = formData.get("item");
        document.title = input;
    }

    render() {
        return (
            <div className="box">
                <header>
                    Change the title of the tab (max length 20 characters)
                </header>
                <article>
                    <form onSubmit={this.handleSubmit} className="eform">
                        <input
                            placeholder="Enter a tab title"
                            id="item"
                            name="item"
                            type="text"
                            maxLength="20"
                            required
                        />
                        <button className={"btn"} type="submit" name="action">
                            Change
                        </button>
                    </form>
                </article>
            </div>
        );
    }
}

export default ChangeTitle;