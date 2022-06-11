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

    // const authLink = "https://www.strava.com/oauth/token";
    //
    // function getActivities(res){
    //     console.log(res);
    //     // const activitiesLink = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    //     // fetch(activitiesLink)
    //     //     .then((res) => console.log(res.json()))
    // }
    // getActivities();
    // useEffect(() => {
    //     fetch(authLink,{
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json, text/plain, */*",
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             client_id: "87069",
    //             client_secret: "1155a03ba6c770d31356983d5b4710756e90f9e0",
    //             refresh_token: "49ea1a2d7fe18daf857b7f43c82cf13e539d31b1",
    //             grant_type: "refresh_token"
    //         })
    //     }).then(res => res.json())
    //         .then(res => getActivities(res))
    // },[authLink])
    //
    //
    // // console.log(getActivities());
    // return (
    //     <div className="Activities">
    //         {/*{getActivities()}*/}
    //     </div>
    // )
// }


    //Strava basics
    let clientID = "87069";
    let clientSecret = "1155a03ba6c770d31356983d5b4710756e90f9e0";

    // refresh token
    const refreshToken = "49ea1a2d7fe18daf857b7f43c82cf13e539d31b1";
    const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

    // access token and https
    // const accessToken = "069c016f83dc5fbe270eabad7d47e18056115501"
    const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=069c016f83dc5fbe270eabad7d47e18056115501`
    const currentStarredSegments = `https://www.strava.com/api/v3/segments/`
    const callStarredSegments = `https://www.strava.com/api/v3/segments/starred?page=1&per_page=200&access_token=`

    useEffect(() => {
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            // .then(result => getActivities(result.access_token))
            .then(result => getSegments(result.access_token))
        //     .then(result => currentTokenCode === result.access_token)
        // console.log(currentTokenCode)
    }, [callRefresh])

    useEffect(() => {
        if (!currentSegment) return;
        fetch(`${currentStarredSegments}${currentSegment}?access_token=aeb1d65e2ccd4639453b9d4f38b42bb1d17e0c4a`)
            .then(r => r.json())
            .then(data => setCurrent(data))
    }, [currentSegment])

    //     function getSegmentsId(accessToken) {
    //     fetch(currentActivities + currentSegment + accessToken)
    //         .then(res => res.json())
    //         .then(data => setCurrent(data) & setIsLoading(prev => !prev))
    //         .catch(e => console.log(e))
    // }

    // use current access token to call all segments
    function getSegments(accessToken){
        // console.log(callStarredSegments + accessToken)
        fetch(callStarredSegments + accessToken)
            .then(res => res.json())
            .then(data => setSegments(data) & setIsLoading(prev => !prev))
            .catch(e => console.log(e))
    }

    // function showActivities(){
    //     if(isLoading) return <>LOADING</>
    //     if(!isLoading) {
    //         // console.log(activities)
    //         return activities.length
    //     }
    // }

    // const SegmentsList = ({segments}) => {
    //     return (
    //         <select className="segments_list">
    //             {segments.map((el)=>
    //                 <option key={el.id} className="segments_item">{el.name}</option>
    //             )}
    //         </select>
    //     )
    // }

    function showSegments() {
        if(!segments.length) return <>LOADING</>
        if(segments.length) {
        // console.log(segments)
        return segments.length
        }

        // return (
        //     <>
        //         <h1>Liczba śledzonych segmentów to: <strong>{segments.length}</strong></h1>
        //         <h2>Lista segmentów:</h2>
        //         {/*<SegmentsList segments={segments}/>*/}
        //         <select className="segments_list">
        //         {!isLoading ? `LOADING` : segments.map(segment => <option key={segment.id} className="segments_item">{segment.name}</option>)}
        //         </select>
        //     </>
        // )
    }

    function handleChange({ target: { value }}) {
        setCurrentSegment(value)
    }
    if(current){
        console.log(current)}
        // console.log(current.map.polyline)}
    // console.log(current.map.polyline)
    // console.log(segments)
    return (
        // <div>
        //     <h1>Liczba śledzonych segmentów to: <strong>{segments.length}</strong></h1>
        //     <h2>Lista segmentów:</h2>
        //     {/*<SegmentsList segments={segments}/>*/}
        //     <select className="segments_list">
        //         {segments.map((segment) => <option key={segment.id} className="segments_item">{segment.name}</option>)}
        //     </select>
        // </div>
        <>
            {(current) &&
                // <SegmentContext.Provider value={current}>
                    <Map props={current}/>
                // </SegmentContext.Provider>
            }
            {(current) && <Weather props={current}/>}
        <div className="Segments">
            <h1>Liczba śledzonych segmentów to: <strong>{showSegments()}</strong></h1>
            <h2>Lista segmentów:</h2>
            {/*<SegmentsList segments={segments}/>*/}
            <select className="segments_list" onChange={handleChange}>
                {!segments.length ? `LOADING` : segments.map(segment => <option key={segment.id} value={segment.id} className="segments_item">{segment.name}</option>)}
            </select>
        </div>
        </>
    );
}

export default Strava;