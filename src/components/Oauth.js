import React, { useState, useEffect} from 'react';
import axios from "axios";
import "./out.css";
import "./.env";

const REACT_APP_CLIENT_ID = "87069";
const REACT_APP_CLIENT_SECRET = "1155a03ba6c770d31356983d5b4710756e90f9e0"

const Oauth = () => {
    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
    };

    const redirectUrl = "http://localhost:3000/redirect";
    const scope = "read_all";


    // const stravaAuthToken = cleanUpAuthToken(location.search);
// d99baa365aca85faf5691b5df90f49e9a8ce663c
    // http://www.strava.com/oauth/authorize?client_id=87069&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read

    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogin}>Connect with Strava</button>
        </>
    )
}

export default Oauth;