import React from 'react';
import { useState, createContext, useContext } from "react";
import Header2 from './Header2'

function Contact() {

    return (
        <>
            <Header2 />
            <div className="contact">
                <p>Email: ffreak.pl@gmail.com</p>
                <p>Tel.: +48 796 58 24 25</p>
            </div>
        </>
    )
}

export default Contact;