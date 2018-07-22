import React, {Component} from 'react';

class TodoList extends Component {
    render(){
        console.log(this.props);
        
        return(
            <div className="todo-items">
                <h1>{this.props.item}</h1>
                <p> {this.props.time} | {this.props.date}</p>
            </div>
        )
    }
}

export default TodoList;

