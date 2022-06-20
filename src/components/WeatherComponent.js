import React, { useState, useEffect} from 'react';
import "./WeatherComponent.css";

function WeatherComponent({weatherData, props,}) {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setDate(date => new Date())
    },[])

    const month = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    //
    // const secondDay = new Date();
    // secondDay.setDate(today.getDate() + 2)
    //
    // const thirdDay = new Date();
    // thirdDay.setDate(today.getDate() + 3)
    //
    // const fourthDay = new Date();
    // fourthDay.setDate(today.getDate() + 4)
    //
    // const fifthDay = new Date();
    // fourthDay.setDate(today.getDate() + 5)




    const imgDayOne = require(`.././assets/icons/${weatherData.daily[1].weather[0].icon}.png`)
    const imgDayOneAlt = weatherData.daily[1].weather[0].main;
    const imgDayTwo = require(`.././assets/icons/${weatherData.daily[2].weather[0].icon}.png`)
    const imgDayTwoAlt = weatherData.daily[2].weather[0].main;
    const imgDayThree = require(`.././assets/icons/${weatherData.daily[3].weather[0].icon}.png`)
    const imgDayThreeAlt = weatherData.daily[3].weather[0].main;
    const imgDayFour = require(`.././assets/icons/${weatherData.daily[4].weather[0].icon}.png`)
    const imgDayFourAlt = weatherData.daily[4].weather[0].main;
    const imgDayFive = require(`.././assets/icons/${weatherData.daily[5].weather[0].icon}.png`)
    const imgDayFiveAlt = weatherData.daily[5].weather[0].main;

    return(
        <>
                <div className="weather">
                    {/*<p>{props.name}</p>*/}
                    <div className="weather_container">
                        <div className="weather_item">
                            <p>{tomorrow.getDate()} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayOne} alt={imgDayOneAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[1].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 1} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayTwo} alt={imgDayTwoAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[2].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 2} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayThree} alt={imgDayThreeAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[3].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 3} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayFour} alt={imgDayFourAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[4].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 4} {month[tomorrow.getMonth()]}</p>
                            <img src={imgDayFive} alt={imgDayFiveAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[5].temp.day).toFixed(0)}°C</strong></p>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default WeatherComponent;