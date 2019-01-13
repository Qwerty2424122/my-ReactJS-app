import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
class HelloWorld extends React.Component{
    getname(){
        return "Bharat Bhushan Sharma"

    }
    
    render(){
        return(
            <div>
            <h1>Hello</h1>
            <input type="text"></input>
            <section className="foo" >
                Hello I am Bharat
                <br></br>
                {2+2}<br/>
                {this.getname()}
            </section>

            </div>

            
        )
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'))