import React, {Component} from 'react';
import TodoList from './todo_items';
class Todo extends Component {
    

    state = {
        addTodo: false,
        textValue: '',
        todoName: [],
        date: null,
        time: null

    }

    addTodohandler = () => {
        this.setState({
            addTodo: true
        })
    }



    todoNameHandler = (event) => {
        this.setState({
            textValue: event.target.value
        })

    }

    saveTodoHandler = () => {
        this.state.todoName.push(this.state.textValue)

        this.setState(
            this.state
        )
    }

    dateSelectHandler = (event) => {
        this.setState({
            date: event.target.value
        })
        
    }
    timeSelectHandler = (event) => {
        this.setState({
            time: event.target.value
        })
        
    }




    getController () {
        let output = null;

        if(this.state.addTodo === true){
            output = (
                <div>
                    <input type="text" placeholder="type to do" onChange={this.todoNameHandler}/>
                    <input type="date" onChange={this.dateSelectHandler}/>
                    <input type="time" onChange={this.timeSelectHandler}/>
                    <button onClick={this.saveTodoHandler}>+</button>


                    {this.state.todoName.reverse().map((todoItem, index) => {
                        return <TodoList key={index} item={todoItem} date={this.state.date} time={this.state.time}/>
                    })}
                </div>
            )
        }else{
            output = (
                <div>
                    <span>add todo </span>
                <button onClick={this.addTodohandler}>+ </button>
                </div>
            )
        }

        return output;
    }


    render(){
        return (
            <div className="todo">
                {this.getController()}
            </div>
        )
    }
}

export default Todo;