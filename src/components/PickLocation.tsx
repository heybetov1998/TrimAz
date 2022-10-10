import MapPicker from "react-google-map-picker";
import { useDispatch, useSelector } from "react-redux";
import {
    changeZoom,
    pickLocation,
    PickLocationState,
} from "../redux/features/locationSlice";

const PickLocation = () => {
    const location = useSelector((state: PickLocationState) => state.location);
    const dispatch = useDispatch();

    function handleChangeLocation(lat: number, lng: number) {
        dispatch(pickLocation({ lat, lng }));
    }

    function handleChangeZoom(newZoom: number) {
        dispatch(changeZoom(newZoom))
    }

    return (
        <MapPicker
            className="map mb-4"
            defaultLocation={location.defaultLocation}
            zoom={location.zoom}
            style={{ height: 400 }}
            onChangeLocation={handleChangeLocation}
            onChangeZoom={handleChangeZoom}
            apiKey="AIzaSyDDy4oCPjx23wQeEJpV3D2uITVu5N3eFIs"
        />
    );
};

export default PickLocation;
