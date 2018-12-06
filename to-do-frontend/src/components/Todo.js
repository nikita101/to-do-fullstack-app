import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
            <div className="eachtodo">
                        {/* check box input, connected to changeHandler */}
                        <input type="checkbox" 
                        id={this.props.id} 
                        key={this.props.id}
                        checked={this.props.status}
                        onChange={(e) => {this.props.changeHandler(e)}}
                         />
                         {/* space between checkbox and label */}
                         <span> </span>
                         {/* label for actual to do item */}
                        <label
                        class= {this.props.status == true ? 'done': ''}
                        >{this.props.title}</label>
                        <label>{this.props.status}</label>
                        {/* hover message */}
                        <span className="hovermsg"> You can do it. </span>
            </div>
        )
    }
}

export default Todo;