import React from 'react';
import { auth, db, logout } from "./firebase";


function Header2() {
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
                        <li className="nav__element"><a href="./strava" className="nav__link">Powrót</a></li>
                        <li className="nav__element"><a href="#" className="nav__link" onClick={logout}>Wyloguj</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header2;