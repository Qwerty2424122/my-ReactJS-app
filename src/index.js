import React from 'react';
import ReactDOM from 'react-dom';
class Hello extends React.Component{
    render(){
        return(
            <h1>Hello</h1>
        )
    }
}

class World extends React.Component{
    render(){
        return(
            <h1>orld </h1>
        )
    }
}

class HelloWorld extends React.Component{
    render(){
        return(
            <section>
                <Hello></Hello>
                <World></World>
            </section>
        )
    }


}


ReactDOM.render(<HelloWorld/>, document.getElementById('root'))