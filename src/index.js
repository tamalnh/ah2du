import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/todo/Todo'

class App extends Component {
    render () {
        return (
            <div className="app">
                <Todo />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));


