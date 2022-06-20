import React, { useState, useEffect} from 'react';
import "./Weather.css";
import WeatherComponent from "./WeatherComponent";

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = `aad0a4a7e4ef8608884c12de55bea733`
const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'


function Weather({props}) {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [showForecast, setShowForecast] = useState("Pokaż pogodę");
    const [hideForecast, setHideForecast] = useState("Ukryj Pogodę");
    const lat = props.start_latlng[0];
    const long = props.start_latlng[1]


    // useEffect(() => {
    //     setLat(prevLat => props.start_latlng[0]);
    //     setLong(prevLong => props.start_latlng[1]);
    //     console.log(lat);
    //     console.log(long);
    // })
    // https://api.openweathermap.org/data/2.5/forecast?lat=16&lon=15&units=metric&appid=aad0a4a7e4ef8608884c12de55bea733


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
        // setShowForecast(prevState => "Pokaż pogodę");
        // setHideForecast(prevState => "Ukryj Pogodę");
    }

    return (
        <div className="weather_forecast">
            {(data.length !== 0) ?
                <button type="button" className="button_weather"onClick={showWeather}>{!isShown ? showForecast : hideForecast}</button>
                :
                <div></div>
            }
            {isShown && (
                <WeatherComponent weatherData={data} props={props}/>
            )}
            {/*{(data.length !== 0) ?*/}
            {/*    <WeatherComponent weatherData={data} props={props}/>*/}
            {/*:*/}
            {/*    <div></div>*/}
            {/*}*/}
        </div>
    );
}

export default Weather;