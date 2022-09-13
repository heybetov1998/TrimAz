import LightGallery from "lightgallery/react";
import Column from "./grid/Column";
import Row from "./grid/Row";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type ImageType = {
    id: string | number;
    src: any;
    alt?: string;
};

type PropsType = {
    images: ImageType[];
};

const Gallery = (props: PropsType) => {
    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    return (
        <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            selector={".gallery_item"}
        >
            <div className="gallery">
                <Row>
                    <Column lg={4} xl={4}>
                        <div className="gallery_item_holder">
                            <div
                                className="gallery_item"
                                data-src={props.images[0].src}
                            >
                                <img
                                    src={props.images[0].src}
                                    alt={props.images[0].alt ?? "Gallery image"}
                                />
                            </div>
                            <div
                                className="gallery_item"
                                data-src={props.images[0].src}
                            >
                                <img
                                    src={props.images[0].src}
                                    alt={props.images[0].alt ?? "Gallery image"}
                                />
                            </div>
                        </div>
                    </Column>
                    <Column lg={4} xl={4}>
                        <div className="gallery_item_holder single">
                            <div
                                className="gallery_item"
                                data-src={props.images[0].src}
                            >
                                <img
                                    src={props.images[0].src}
                                    alt={props.images[0].alt ?? "Gallery image"}
                                />
                            </div>
                        </div>
                    </Column>
                    <Column lg={4} xl={4}>
                        <div className="gallery_item_holder">
                            <div
                                className="gallery_item"
                                data-src={props.images[0].src}
                            >
                                <img
                                    src={props.images[0].src}
                                    alt={props.images[0].alt ?? "Gallery image"}
                                />
                            </div>
                            <div
                                className="gallery_item"
                                data-src={props.images[0].src}
                            >
                                <img
                                    src={props.images[0].src}
                                    alt={props.images[0].alt ?? "Gallery image"}
                                />
                            </div>
                        </div>
                    </Column>
                </Row>
            </div>
        </LightGallery>
    );
};

export default Gallery;
