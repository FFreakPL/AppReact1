import React, { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import "./out.css";

function StravaRedirect() {
 const [code, setCode] = useState("")
 const [accToken, setAccToken] = useState("");
 const [refToken, setRefToken] = useState("");
 const navigate = useNavigate();

 useEffect(() => {
  const windowAdress = JSON.stringify(window.location.href);

  function getCode(str) {
   return str.split("=")[2]
  }

  const authCode = JSON.stringify(getCode(windowAdress)).slice(1, -7);
  setCode(prevCode => authCode);
  localStorage.setItem("authCode", authCode);
 }, [])

 useEffect(() => {
  if (!accToken && !refToken) {
   return;
  }
  else navigate("/dashboard");
 }, [refToken, accToken]);


 let clientID = "87069";
 let clientSecret = "1155a03ba6c770d31356983d5b4710756e90f9e0";

 const currentStarredSegments = `https://www.strava.com/api/v3/segments/`
 const callStarredSegments = `https://www.strava.com/api/v3/segments/starred?page=1&per_page=200&access_token=${accToken}`
 const postAuthToken = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`
 const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refToken}&grant_type=refresh_token`

 useEffect(() => {
  if(!code) return;
  fetch(postAuthToken, {
   method: 'POST'
  })
      .then(res => res.json())
      .then(result => {
       localStorage.setItem("accessToken",result.access_token);
       localStorage.setItem("refreshToken",result.refresh_token);
       setAccToken(result.access_token);
       setRefToken(result.refresh_token);
      })
 }, [postAuthToken]);

 return (
     <>Loading...</>
 )
}

export default StravaRedirect;