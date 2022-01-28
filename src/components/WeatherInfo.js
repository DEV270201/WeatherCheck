import React from "react";
import WeatherIcon from "./WeatherIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {faSadTear} from "@fortawesome/free-regular-svg-icons";

class WeatherInfo extends React.Component{

   render(){
    if(this.props.weather === null){
      return <h5 className="hf1h5"><FontAwesomeIcon icon={faSadTear} className="myani"/> Sorry! No Data Found !! </h5>
    }else{
      return (
        <div className="info">
            <WeatherIcon weather={this.props.weather.weather[0].main}/>
            <h3 className="weather_desc"><FontAwesomeIcon icon={faMapMarkedAlt} /> {this.props.weather.name} </h3>
            <h3 className="weather_desc"> {this.props.weather.weather[0].description} </h3>
            <h3 className="weather_desc"> CurrentTemp: {this.props.weather.main.temp} *C </h3>
            <h3 className="weather_desc">Min: {this.props.weather.main.temp_min} *C | Max: {this.props.weather.main.temp_max} *C</h3>
        </div>
      );
    }
   }
}

export default WeatherInfo;