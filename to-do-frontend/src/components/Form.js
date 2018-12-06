import React, { Component } from 'react';

class Form extends Component {
    state = {
        newToDo: {}
    }
    handleSubmit(e) {
        // validates that the new Todo form being added is not blank.
        if (this.refs.title.value === '') {
            alert('Please enter a valid To Do Item')
        }
        // changing the state, adding newToDo item with the title as the name
        // and the status as false.
        else {
            this.setState({
                newToDo: {
                    title: this.refs.title.value,
                    status: false,
                }
            },
                function () {
                    // passing the newToDo item as props to addToDo to App.js
                    this.props.addToDo(this.state.newToDo);
                });
        }
        // prevents the page from refreshing upon click of submit button
        e.preventDefault();
        // clears the submit input field
        e.target.reset();
    }
    render() {
        return (
            <div className="container">
            <div className="inputform">
                {/* beginning of form for submitting new Todo Item */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-group">
                        <input id="inputtext" type="text" ref="title" placeholder="Add another item" />
                    </div>
                <div className="input-group-btn">
                            {/* Button for adding a new Todo Item */}
                            <button className="btn-lg btn-primary" type="submit">Add</button>                </div>
                </form>
            </div>    
            </div>
        )
    }
}

export default Form;


