import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
class HelloWorld extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello</h1>
            <input type="text"></input>
            <section className="foo" >
                Hello I am Bhaart
            </section>

            </div>

            
        )
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'))