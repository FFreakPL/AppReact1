import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

function WeatherComponent({weatherData, props,}) {
    // console.log(weatherData.cnt);
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
        </>
    )
}

export default WeatherComponent;