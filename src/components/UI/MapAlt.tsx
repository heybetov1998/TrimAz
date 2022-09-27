import { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const markers = [
    {
        id: 1,
        name: "Chicago, Illinois",
        position: { lat: 41.881832, lng: -87.623177 },
    },
    {
        id: 4,
        name: "New York, New York",
        position: { lat: 40.712776, lng: -74.005974 },
    },
];

function MapAlt() {
    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker: any) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };

    return (
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerClassName="map"
        >
            {markers.map(({ id, name, position }) => (
                <Marker
                    key={id}
                    position={position}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
        </GoogleMap>
    );
}

export default MapAlt;
