import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { LocationState } from "../../redux/features/barbershopDetailsSlice";

type PropsType = {
    locations: LocationState[];
};

const getAverage = (locations: LocationState[]) => {
    let count = 0;
    const average = {
        lat: 0,
        lng: 0,
    };

    for (const location of locations) {
        average.lat += location.latitude;
        average.lng += location.longtitude;
        count++;
    }

    average.lat/=count;
    average.lng/=count;
    return average;
};

const Map = (props: PropsType) => {
    const center = useMemo(
        () => ({
            lat: getAverage(props.locations).lat,
            lng: getAverage(props.locations).lng,
        }),
        [props.locations]
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDDy4oCPjx23wQeEJpV3D2uITVu5N3eFIs",
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap zoom={16} center={center} mapContainerClassName="map">
            {props.locations.map((location) => (
                <Marker
                    key={location.latitude}
                    position={{
                        lat: location.latitude,
                        lng: location.longtitude,
                    }}
                />
            ))}
        </GoogleMap>
    );
};

export default Map;
