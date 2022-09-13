import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const MyGallery = () => {
    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={require("../../assets/images/1077-500x500.jpg")}>
                    <img
                        alt="img1"
                        src={require("../../assets/images/1077-500x500.jpg")}
                    />
                </a>
                <a href={require("../../assets/images/555-500x500.jpg")}>
                    <img
                        alt="img2"
                        src={require("../../assets/images/555-500x500.jpg")}
                    />
                </a>
                ...
            </LightGallery>
        </div>
    );
};

export default MyGallery;
