import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
class TodoList extends React.Component{
    constructor (){
        super();
        this.state = {
           firstname : 'Bharat'
        }
    }
    
    render(){
        return(
            <ul>
            {this.state.firstname}
            </ul>
        )
    }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'))