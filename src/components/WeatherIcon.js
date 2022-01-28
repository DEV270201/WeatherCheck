import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmog,faCloud,faCloudShowersHeavy,faSnowflake} from "@fortawesome/free-solid-svg-icons";
import {faSun} from "@fortawesome/free-regular-svg-icons";

const WeatherIcon = ({weather}) => {
  
   const weatherIcon = {
      "Haze" : faSmog,
      "Mist" : faSmog,
      "Clouds" : faCloud,
      "Smoke" : faSmog,
      "Fog" : faSmog,
      "Rain" : faCloudShowersHeavy,
      "Snow" : faSnowflake,
    }

  if(weather in weatherIcon){
    return  <h2 className="text-center icon"> <FontAwesomeIcon icon={weatherIcon[weather]} /></h2>;
  }else{
    return  <h2 className="text-center icon"> <FontAwesomeIcon icon={faSun} /> </h2>
  }
}

export default WeatherIcon;