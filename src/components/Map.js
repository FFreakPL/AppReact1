import React, { Component } from "react";
// import OlMap from "ol/Map";
// import OlView from "ol/View";
// import OlLayerTile from "ol/layer/Tile";
// import OlSourceOSM from "ol/source/OSM";
import "./Map.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Polyline, InfoWindow } from '@react-google-maps/api';
import { BicyclingLayer } from '@react-google-maps/api';
import { decode, encode } from "@googlemaps/polyline-codec";


const center = {
    lat: 51.43513,
    lng: 16.09784
}

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAQ9NEuKCSS3vgmEDZLGxMfmBZUgSJN4mw"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, []);
    // const onLoad = bicyclingLayer => {
    //     console.log('bicyclingLayer: ', bicyclingLayer)
    // }


    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const onInfo = infoWindow => {
        // console.log('infoWindow: ', infoWindow)
    }
    const encoded = "oq|xHyfgaBRw@To@bAuB^m@z@gAp@q@`@]fBoA~BwApD}B|AeAdC_Bj@a@dDmBzCsBx@c@tGaE~EkDhBgAjGeEpAaA`BcAn@k@zAwAzA}AvAiB~AsC|@gBrAwClA}Cz@kCbAcErAqHr@qFf@oH\\}JFoE@qEFyENkKJaETuOT_Dd@_DbA_Ij@qF@@";
    const decoded = decode(encoded, 5);

    const segmentTest = decoded.map(function(row) {
        return {
            lat: row[0],
            lng: row[1]
        }
    })
    // const hawkHillSegment = decoded.map(([lat,lng])=> ({[lat] : lng}));


// NAPISAC FUNKCJE KTÓRA BEDZIE TWORZYLA OBIEKT SEGMENTU [{lat: xxx, lng: -xxx},...]
        // {lat: 25.774, lng: -80.190},
        // {lat: 18.466, lng: -66.118},
        // {lat: 32.321, lng: -64.757},
        // {lat: 25.774, lng: -80.190}
    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 5
    }

    return isLoaded ? (
        <GoogleMap
            id="map"
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <Polyline
                path={segmentTest}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2} />
            <InfoWindow
                onLoad={onInfo}
                position={segmentTest[0]}
                >
                <div style={divStyle}>
                    <h3>gaz podłoga ze Szklar do Obory</h3>
                </div>
            </InfoWindow>
            {/*<BicyclingLayer*/}
            {/*    onLoad={onLoad}*/}
            {/*/>*/}
            <></>
        </GoogleMap>
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