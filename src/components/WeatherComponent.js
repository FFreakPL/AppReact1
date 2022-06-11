import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

// import moment from 'moment';

function WeatherComponent({weatherData, props,}) {
    console.log(weatherData.list[0].main.temp);
    return(
        <>
                <div className="weather">
                    <h1>{props.name}</h1>
                    <h2>Prognoza na 5 dni</h2>
                    <p>{weatherData.list[3].dt_txt}: <strong>{weatherData.list[3].main.temp}</strong></p>
                    <p>{weatherData.list[11].dt_txt}: <strong>{weatherData.list[11].main.temp}</strong></p>
                    <p>{weatherData.list[19].dt_txt}: <strong>{weatherData.list[19].main.temp}</strong></p>
                    <p>{weatherData.list[27].dt_txt}: <strong>{weatherData.list[27].main.temp}</strong></p>
                    <p>{weatherData.list[35].dt_txt}: <strong>{weatherData.list[35].main.temp}</strong></p>
                </div>
                {/*// /!*<p>Temprature: {weatherData.main.temp} &deg;C</p>*!/*/}
                {/*// /!*<p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>*!/*/}
                {/*// /!*<p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>*!/*/}
                {/*// /!*<p>Description: {weatherData.weather[0].main}</p>*!/*/}
                {/*// /!*<p>Humidity: {weatherData.main.humidity} %</p>*!/*/}
                {/*// /!*<p>Day: {moment().format('dddd')}</p>*!/*/}
                {/*// /!*<p>Date: {moment().format('LL')}</p>*!/*/}
        </>
    )
}

export default WeatherComponent;