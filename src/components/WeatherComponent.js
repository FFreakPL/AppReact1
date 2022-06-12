import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

function WeatherComponent({weatherData, props,}) {
    const [date, setDate] = useState(new Date());
    // console.log(weatherData.cnt);
    useEffect(() => {
        setDate(date => new Date())
    },[])
    console.log(date)
    const dates = [];
    const month = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    // console.log(weatherData.list[0].dt_txt);
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const secondDay = new Date();
    secondDay.setDate(today.getDate() + 2)

    const thirdDay = new Date();
    thirdDay.setDate(today.getDate() + 3)

    const fourthDay = new Date();
    fourthDay.setDate(today.getDate() + 3)


    const imgDayOne = require(`.././assets/icons/${weatherData.daily[1].weather[0].icon}.png`)
    const imgDayOneAlt = weatherData.daily[1].weather[0].main;
    const imgDayTwo = require(`.././assets/icons/${weatherData.daily[2].weather[0].icon}.png`)
    const imgDayTwoAlt = weatherData.daily[2].weather[0].main;
    const imgDayThree = require(`.././assets/icons/${weatherData.daily[3].weather[0].icon}.png`)
    const imgDayThreeAlt = weatherData.daily[3].weather[0].main;
    const imgDayFour = require(`.././assets/icons/${weatherData.daily[4].weather[0].icon}.png`)
    const imgDayFourAlt = weatherData.daily[4].weather[0].main;

    return(
        <>
                <div className="weather">
                    <h1>{props.name}</h1>
                    <h2>Prognoza na 5 dni</h2>
                    <div className="weather_container">
                        <div className="weather_item">
                            <p>{tomorrow.getDate()} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayOne} alt={imgDayOneAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[1].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{secondDay.getDate()} {month[secondDay.getMonth()]}</p>
                            <img src={imgDayTwo} alt={imgDayTwoAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[2].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{thirdDay.getDate()} {month[thirdDay.getMonth()]}</p>
                            <img src={imgDayThree} alt={imgDayThreeAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[3].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{fourthDay.getDate()} {month[fourthDay.getMonth()]}</p>
                            <img src={imgDayFour} alt={imgDayFourAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[4].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        {/*<div className="weather_item">*/}
                        {/*    <p>{weatherData.list[33].dt_txt}</p>*/}
                        {/*    <img src={imgDayFive} alt={imgDayFiveAlt} width={100} height={100}/>*/}
                        {/*    <p><strong>{(weatherData.list[35].main.temp).toFixed(0)}°C</strong></p>*/}
                        {/*</div>*/}
                    </div>

                </div>
        </>
    )
}

export default WeatherComponent;