import React, { useState, useEffect} from 'react';
import "./out.css";
import Map from "./Map";
import Weather from "./Weather";
import HeaderStrava from "./HeaderStrava";

function StravaTest() {
    const [authCode, setAuthCode] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const [segments, setSegments] = useState([])
    const [currentSegment, setCurrentSegment] = useState(null)
    const [current, setCurrent] = useState(null);
    const [display, setDisplay] = useState("")
    const [accToken, setAccToken] = useState("");
    const [refToken, setRefToken] = useState("");

    useEffect(()=> {
        setAuthCode(prevTest => localStorage.getItem("authCode"));
    },[authCode])

    useEffect(()=> {
        setAccToken(prevTest => localStorage.getItem("accessToken"));
    },[accToken])

    useEffect(()=> {
        setRefToken(prevTest => localStorage.getItem("refreshToken"));
    },[refToken])

    const currentStarredSegments = `https://www.strava.com/api/v3/segments/`
    const callStarredSegments = `https://www.strava.com/api/v3/segments/starred?page=1&per_page=200&access_token=${accToken}`

    useEffect(() => {
        if (!currentSegment) return;
        fetch(`${currentStarredSegments}${currentSegment}?access_token=${localStorage.getItem("accessToken")}`)
            .then(r => r.json())
            .then(data => setCurrent(data))
    }, [currentSegment])

    useEffect(() => {
        if (!accToken) return;
        fetch(callStarredSegments, {
            method: `GET`
        })
            .then(res => res.json())
            .then(result => setSegments(result) & setIsLoading(prev => !prev))
    }, [accToken])

    function handleChange({target: {value}}) {
        setCurrentSegment(value);
    }

    const segmentsSorted = segments.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    });

    const segmentsRiding = segmentsSorted.filter(function(a) {
        return a.activity_type === "Ride"
    })
    function showSegments() {
        if(!segmentsRiding.length) return <>LOADING</>
        if(segmentsRiding.length) {
            return segmentsRiding.length
        }
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplay(prevState => "none");
        },3000)
    });

    return (
        <>
            <HeaderStrava accToken={accToken} refToken={refToken} segments={segments} segmentsRiding={segmentsRiding} handleChange={handleChange}/>
            {(current) && <Map props={current} segments={segmentsRiding}/>}
            {<div className="segments">
                <h1 style={{display: display}}>Liczba śledzonych segmentów to: <strong>{showSegments()}</strong></h1>
                <h2 style={{display: display}}>Wybierz segment:</h2>
                <select className="segments_list" onChange={handleChange} style={{display: display}}>
                    {!segments.length ? `LOADING` : segmentsRiding.map(segment => <option key={segment.id} value={segment.id} className="segments_item">{segment.name}</option>)}
                </select>
            </div>}
            {(current) && <Weather props={current} segments={segments} segmentsRiding={segmentsRiding} handleChange={handleChange}/>}
        </>
    );
}

export default StravaTest;