import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

// import moment from 'moment';

function WeatherComponent({weatherData, props,}) {
    console.log(weatherData);
    return(
        <>
                <div className="weather">Miasto: {props.city}
                    <p>Aktualna temperatura: {weatherData.main.temp}</p>
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