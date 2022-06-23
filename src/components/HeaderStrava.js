import React from 'react';
import { useState, createContext, useContext } from "react";
import { auth, db, logout } from "./firebase";
import WeatherComponent from "./WeatherComponent";

function HeaderStrava({segments, segmentsRiding,handleChange }) {

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
                        <li className="nav__element">
                            {/*<label htmlFor="segments">Wybierz segment:</label>*/}
                            <select className="segments_list_nav" onChange={handleChange}>
                                {/*<option className="segments_item">Wybierz segment</option>*/}
                                {!segments.length ? `LOADING` : segmentsRiding.map(segment => <option key={segment.id} value={segment.id} className="segments_item">{segment.name}</option>)}
                            </select>
                        </li>
                        {/*<li className="nav__element"><select className="segments_list_nav" onChange={handleChange}>*/}
                        {/*    {!segments.length ? `LOADING` : segmentsRiding.map(segment => <option key={segment.id} value={segment.id} className="segments_item">{segment.name}</option>)}*/}
                        {/*</select></li>*/}
                        <li className="nav__element"><a href="#" className="nav__link">Zaplanuj Wyjazd</a></li>
                        <li className="nav__element"><a href="./contact" className="nav__link">Kontakt</a></li>
                        <li className="nav__element"><a href="#" className="nav__link" onClick={logout}>Wyloguj</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default HeaderStrava;