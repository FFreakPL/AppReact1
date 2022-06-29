import React, { useState, useEffect} from 'react';
import "./out.css";

const REACT_APP_CLIENT_ID = "87069";
const REACT_APP_CLIENT_SECRET = "1155a03ba6c770d31356983d5b4710756e90f9e0"

const Oauth = () => {
    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`;
    };

    const redirectUrl = "http://planyourride.vercel.app/redirect";
    const scope = "read_all";

    return (
        <div className="oauth">

            <div className="oauth_container">
                <div id="strava"></div>
                <button type="button" className="oauth_button" onClick={handleLogin}>Connect with Strava</button>
            </div>
        </div>
    )
}

export default Oauth;