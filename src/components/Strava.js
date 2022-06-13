import React, { useState, useEffect} from 'react';
import "./Strava.css";
import Map from "./Map";
import Weather from "./Weather";
//


function Strava() {
    const [isLoading, setIsLoading] = useState(true)
    // const [activities, setActivities] = useState({})
    const [segments, setSegments] = useState([])
    const [currentSegment, setCurrentSegment] = useState(null)
    const [current, setCurrent] = useState(null);
    const [token, setToken] = useState()

    // const authLink = "https://www.strava.com/oauth/token";

    //Strava basics
    let clientID = "87069";
    let clientSecret = "1155a03ba6c770d31356983d5b4710756e90f9e0";

    // refresh token
    const refreshToken = "49ea1a2d7fe18daf857b7f43c82cf13e539d31b1";
    const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

    // const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=069c016f83dc5fbe270eabad7d47e18056115501`
    const currentStarredSegments = `https://www.strava.com/api/v3/segments/`
    const callStarredSegments = `https://www.strava.com/api/v3/segments/starred?page=1&per_page=200&access_token=`

    useEffect(() => {
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(result => getSegments(result.access_token) && localStorage.setItem(token, result.access_token))
            // .then(result => localStorage.setItem(token, result.access_token))
            // .then(result => setToken(prevToken => result.access_token))

    }, [callRefresh])

    useEffect(() => {
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(result => localStorage.setItem(token, result.access_token))
    }, [callRefresh])

//sprobowac uzyc localstorage
    useEffect(() => {
        if (!currentSegment) return;
        fetch(`${currentStarredSegments}${currentSegment}?access_token=${localStorage.getItem(token)}`)
            .then(r => r.json())
            .then(data => setCurrent(data))
    }, [currentSegment])

    // use current access token to call all segments
    function getSegments(accessToken){
        // console.log(callStarredSegments + accessToken)
        fetch(callStarredSegments + accessToken)
            .then(res => res.json())
            .then(data => setSegments(data) & setIsLoading(prev => !prev))
            .catch(e => console.log(e))
    }

    function showSegments() {
        if(!segments.length) return <>LOADING</>
        if(segments.length) {
        // console.log(segments)
        return segments.length
        }
    }

    function handleChange({ target: { value }}) {
        setCurrentSegment(value)
    }
    if(current){
        console.log(current)}

    // const segmentsSorted = segments.sort((a,b) => a.name - b.name);

    const segmentsSorted = segments.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    });

    return (
        <>
            {(current) && <Map props={current}/>}
            {(current) && <Weather props={current}/>}
        <div className="Segments">
            <h1>Liczba śledzonych segmentów to: <strong>{showSegments()}</strong></h1>
            <h2>Lista segmentów:</h2>
            <select className="segments_list" onChange={handleChange}>
                {!segments.length ? `LOADING` : segmentsSorted.map(segment => <option key={segment.id} value={segment.id} className="segments_item">{segment.name}</option>)}
            </select>
        </div>
        </>
    );
}

export default Strava;