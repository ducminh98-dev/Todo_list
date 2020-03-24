import React, { Component } from 'react'

class TodoItem extends Component {

    render(){
        return (
            <div className="TodoItem">
                <h3>{this.props.title}</h3>
            </div>
        );
    };
}



export default TodoItem