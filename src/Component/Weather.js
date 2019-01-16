 import React from 'react'

class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info">
	 {	
	 	this.props.city && this.props.country && <p> Location: { this.props.city }, { this.props.country }
	 	</p> 
	 }
	 { 	
	 	this.props.Temperature && <p> Temperature: { this.props.Temperature }
	 	</p> 
	 }
	 
    </div>
        );


    }



};

export default Weather;