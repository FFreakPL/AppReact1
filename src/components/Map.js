import React, { Component,  useState, useCallback } from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Polyline, InfoWindow } from '@react-google-maps/api';
import { BicyclingLayer } from '@react-google-maps/api';
import { decode, encode } from "@googlemaps/polyline-codec";
// import Strava from "./Strava";

function Map({props}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAQ9NEuKCSS3vgmEDZLGxMfmBZUgSJN4mw"
    })

    const center =
        {
        lat: props.start_latlng[0],
        lng: props.start_latlng[1]
    }

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, []);
    // const onLoad = bicyclingLayer => {
    //     console.log('bicyclingLayer: ', bicyclingLayer)
    // }


    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onInfo = infoWindow => {

    }
    const encoded = props.map.polyline;
    const decoded = decode(encoded, 5);

    const segmentRoute = decoded.map(function(row) {
        return {
            lat: row[0],
            lng: row[1]
        }
    })

    const divStyle = {
        background: `white`,
        fontSize: `1rem`,
    }
    const polylineStyle = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
    }
    return isLoaded ? (
        <div className="map">
        <GoogleMap
            id="map"
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <Polyline
                onLoad={onInfo}
                path={segmentRoute}
                options={polylineStyle}
                onClick={onInfo}
            />
            <InfoWindow
                // onLoad={onInfo}
                position={segmentRoute[0]}
                >
                <div style={divStyle}>
                    <p>{props.name}</p>
                    <p>Distance: {props.distance}m</p>
                    <p>Elevation gain: {props.total_elevation_gain}</p>
                </div>
            </InfoWindow>
            {/*<BicyclingLayer*/}
            {/*    onLoad={onLoad}*/}
            {/*/>*/}
            <></>
        </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(Map)

// class Map extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = { center: [0, 0], zoom: 1 };
//
//         this.olmap = new OlMap({
//             target: null,
//             layers: [
//                 new OlLayerTile({
//                     source: new OlSourceOSM()
//                 })
//             ],
//             view: new OlView({
//                 center: this.state.center,
//                 zoom: this.state.zoom
//             })
//         });
//     }
//
//     updateMap() {
//         this.olmap.getView().setCenter(this.state.center);
//         this.olmap.getView().setZoom(this.state.zoom);
//     }
//
//     componentDidMount() {
//         this.olmap.setTarget("map");
//
//         // Listen to map changes
//         this.olmap.on("moveend", () => {
//             let center = this.olmap.getView().getCenter();
//             let zoom = this.olmap.getView().getZoom();
//             this.setState({ center, zoom });
//         });
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         let center = this.olmap.getView().getCenter();
//         let zoom = this.olmap.getView().getZoom();
//         if (center === nextState.center && zoom === nextState.zoom) return false;
//         return true;
//     }
//
//     // userAction() {
//     //     this.setState({ center: [546000, 6868000], zoom: 5 });
//     // }
//
//     render() {
//         this.updateMap(); // Update map on render?
//         return (
//             <div id="map">
//                 {/*<button onClick={e => this.userAction()}>setState on click</button>*/}
//             </div>
//         );
//     }
// }
//
// export default Map;