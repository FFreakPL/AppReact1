import React, { useState, useEffect} from 'react';
import "./out.css";
import WeatherComponent from "./WeatherComponent";

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = `aad0a4a7e4ef8608884c12de55bea733`


function Weather({props}) {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const lat = props.start_latlng[0];
    const long = props.start_latlng[1]


    const callForecast = `${REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&appid=${REACT_APP_API_KEY}`;
    const callWeather = `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
    const callForecastForFourDays = `${REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely&units=metric&appid=${REACT_APP_API_KEY}`
    useEffect(() => {
        fetch(callForecastForFourDays)
                .then(res => res.json())
                .then(result => setData(result))
    }, [lat,long])

    const showWeather = event => {
        setIsShown(current => !current);
    }

    return (
        <div className="weather">
            {(data.length !== 0) ?
                <button type="button" className="weather_button"onClick={showWeather}>{!isShown ? "Pokaż pogodę" : "Ukryj pogodę"}</button>
                :
                <div></div>
            }
            {isShown && (
                <WeatherComponent weatherData={data} props={props}/>
            )}
        </div>
    );
}

export default Weather;