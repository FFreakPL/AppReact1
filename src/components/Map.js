import React, { Component,  useState, useCallback } from "react";
import "./out.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Polyline, InfoWindow, InfoBox } from '@react-google-maps/api';
import { decode, encode } from "@googlemaps/polyline-codec";

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
    const [isShown, setIsShown] = useState(false)
    // const [zoom, setZoom] = useState();

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const options = { closeBoxURL: '', enableEventPropagation: true };

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onInfo = event => {
        setIsShown(current => !current)
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
            zoom={3}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Polyline
                onLoad={onInfo}
                path={segmentRoute}
                options={polylineStyle}
                onClick={onInfo}
            />
            {isShown &&
                <InfoWindow
                    position={segmentRoute[0]}
                >
                    <div style={divStyle}>
                        <p>{props.name}</p>
                        <p>Distance: {props.distance}m</p>
                        <p>Elevation gain: {props.total_elevation_gain}</p>
                    </div>
                </InfoWindow>}
            <InfoWindow
                position={segmentRoute[0]}
                >
                <div style={divStyle}>
                    <p>{props.name}</p>
                    <p>Distance: {props.distance}m</p>
                    <p>Elevation gain: {props.total_elevation_gain}</p>
                </div>
            </InfoWindow>
        </GoogleMap>
        </div>
    ) : <></>
}

export default React.memo(Map)