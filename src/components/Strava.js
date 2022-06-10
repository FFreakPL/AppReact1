import React, { useState, useEffect } from 'react';
import "./Strava.css";

function Strava() {
    const [isLoading, setIsLoading] = useState(true)
    // const [activities, setActivities] = useState({})
    const [segments, setSegments] = useState({})

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

    //2 Sposób
    //Strava basics
    let clientID = "87069";
    let clientSecret = "1155a03ba6c770d31356983d5b4710756e90f9e0";

    // refresh token
    const refreshToken = "49ea1a2d7fe18daf857b7f43c82cf13e539d31b1";
    const callRefresh = `https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

    // access token and https
    // const accessToken = "069c016f83dc5fbe270eabad7d47e18056115501"
    const callActivities = `https://www.strava.com/api/v3/athlete/activities?access_token=069c016f83dc5fbe270eabad7d47e18056115501`
    const callStarredSegments = `https://www.strava.com/api/v3/segments/starred?page=1&per_page=200&access_token=`

    useEffect(() => {
        fetch(callRefresh, {
            method: 'POST'
        })
            .then(res => res.json())
            // .then(result => getActivities(result.access_token))
            .then(result => getSegments(result.access_token))
    }, [callRefresh])

    // use current access token to call all activities
    // function getActivities(){
    //     console.log(callActivities)
    //     fetch(callActivities)
    //         .then(res => res.json())
    //         .then(data => setActivities(data), setIsLoading(prev => !prev))
    //         .catch(e => console.log(e))
    // }

    function getSegments(accessToken){
        console.log(callStarredSegments + accessToken)
        fetch(callStarredSegments + accessToken)
            .then(res => res.json())
            .then(data => setSegments(data))
            .catch(e => console.log(e))
    }

    // function showActivities(){
    //     if(isLoading) return <>LOADING</>
    //     if(!isLoading) {
    //         // console.log(activities)
    //         return activities.length
    //     }
    // }
    function handleSegment() {

    }
    function showSegments() {
        // if(isLoading) return <>LOADING</>
        // if(!isLoading) {
        // let array = segments;
        // array.forEach( segments => segments.name)
        // console.log(array)
        // console.log(segments[0].name)
        return (
            <div>
                <h1>Liczba śledzonych segmentów to: <strong>{segments.length}</strong></h1>
                <h2>Lista segmentów:</h2>
                <select className="segments_list">
                {segments.map(segment => <option key={segment.id} className="segments_item">{segment.name}</option>)}
                </select>
            </div>
        )
    }

    return (
        <div className="Segments">
            {/*{showActivities()}*/}
            {showSegments()}
        </div>
    );
}

export default Strava;