import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

function WeatherComponent({weatherData, props,}) {
    // console.log(weatherData.cnt);
    return(
        <>
                <div className="weather">
                    <h1>{props.name}</h1>
                    <h2>Prognoza na 5 dni</h2>
                    <div className="weather_container">
                        <p><strong>{weatherData.list[3].main.temp}</strong></p>
                        <p><strong>{weatherData.list[11].main.temp}</strong></p>
                        <p><strong>{weatherData.list[19].main.temp}</strong></p>
                        <p><strong>{weatherData.list[27].main.temp}</strong></p>
                        <p><strong>{weatherData.list[35].main.temp}</strong></p>
                    </div>

                </div>
        </>
    )
}

export default WeatherComponent;