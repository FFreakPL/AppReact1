import React from 'react';
import { useState, createContext, useContext } from "react";
import { auth, db, logout } from "./firebase";
import WeatherComponent from "./WeatherComponent";

function Header() {
    const [isShown, setIsShown] = useState(false);
    const [current, setCurrent] = useState(null);
    const showWeather = event => {
        setIsShown(current => !current);
        // setShowForecast(prevState => "Pokaż pogodę");
        // setHideForecast(prevState => "Ukryj Pogodę");
    }
    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__logo"></div>
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="header__nav">
                            <li className="nav__element"><a href="#" className="nav__link" onClick={showWeather}>Pogoda</a></li>
                            {/*<li className="nav__element"><a href="#why-us" className="nav__link">Pogoda</a></li>*/}
                            <li className="nav__element"><a href="#" className="nav__link">Segmenty</a></li>
                            <li className="nav__element"><a href="#" className="nav__link">Zaplanuj Wyjazd</a></li>
                            <li className="nav__element"><a href="./contact" className="nav__link">Kontakt</a></li>
                            <li className="nav__element"><a href="#" className="nav__link" onClick={logout}>Wyloguj</a></li>
                            {/*<button className="nav__link" onClick={logout}>*/}
                            {/*    Wyloguj</button>*/}
                            {/*</li>*/}
                        </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;
    // <header className="header">
    //     <div className="header_logo">PlanYourRide</div>
    //     <div className="header_container">
    //         <input type="checkbox" name="menu" id="menu" className="hidden"/>
    //         <label className="menu_burger" htmlFor="menu">
    //             <span></span>
    //             <span></span>
    //             <span></span>
    //         </label>
    //         <nav className="menu">
    //             <ul className="menu_list">
    //                 <li className="menu_item">Pogoda</li>
    //                 <li className="menu_item">Segment</li>
    //                 <li className="menu_item">Kontakt</li>
    //             </ul>
    //         </nav>
    //     </div>
    // </header>