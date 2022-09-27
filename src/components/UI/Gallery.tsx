import LightGallery from "lightgallery/react";
import Column from "./grid/Column";
import Row from "./grid/Row";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type PropsType = {
    images: string[];
};

const Gallery = (props: PropsType) => {
    const onInit = () => {
        console.log("lightGallery has been initialized");
    };

    if (props.images.length === 1) {
        return (
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                selector={".gallery_item"}
            >
                <div className="gallery">
                    <Row>
                        <Column>
                            <div className="gallery_item_holder single">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[0]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[0]}`}
                                        alt={props.images[0]}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </LightGallery>
        );
    }

    if (props.images.length === 2) {
        return (
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                selector={".gallery_item"}
            >
                <div className="gallery">
                    <Row>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder single">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[0]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[0]}`}
                                        alt={props.images[0]}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder single">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[1]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[1]}`}
                                        alt={props.images[1]}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </LightGallery>
        );
    }

    if (props.images.length === 3) {
        return (
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                selector={".gallery_item"}
            >
                <div className="gallery">
                    <Row>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[0]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[0]}`}
                                        alt={props.images[0]}
                                    />
                                </div>
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[1]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[1]}`}
                                        alt={props.images[1]}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder single">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[2]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[2]}`}
                                        alt={props.images[2]}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </LightGallery>
        );
    }

    if (props.images.length === 4) {
        return (
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                selector={".gallery_item"}
            >
                <div className="gallery">
                    <Row>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[0]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[0]}`}
                                        alt={props.images[0]}
                                    />
                                </div>
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[1]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[1]}`}
                                        alt={props.images[1]}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column default={6} sm={6} md={6} lg={6} xl={6}>
                            <div className="gallery_item_holder">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[2]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[2]}`}
                                        alt={props.images[2]}
                                    />
                                </div>
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[3]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[3]}`}
                                        alt={props.images[3]}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </LightGallery>
        );
    }

    if (props.images.length >= 5) {
        return (
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                selector={".gallery_item"}
            >
                <div className="gallery">
                    <Row>
                        <Column default={4} sm={4} md={4} lg={4} xl={4}>
                            <div className="gallery_item_holder">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[0]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[0]}`}
                                        alt={props.images[0]}
                                    />
                                </div>
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[1]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[1]}`}
                                        alt={props.images[1]}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column default={4} sm={4} md={4} lg={4} xl={4}>
                            <div className="gallery_item_holder single">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[2]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[2]}`}
                                        alt={props.images[2]}
                                    />
                                </div>
                            </div>
                        </Column>
                        <Column default={4} sm={4} md={4} lg={4} xl={4}>
                            <div className="gallery_item_holder">
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[3]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[3]}`}
                                        alt={props.images[3]}
                                    />
                                </div>
                                <div
                                    className="gallery_item"
                                    data-src={`https://localhost:7231/img/${props.images[4]}`}
                                >
                                    <img
                                        src={`https://localhost:7231/img/${props.images[4]}`}
                                        alt={props.images[4]}
                                    />
                                </div>
                            </div>
                        </Column>
                    </Row>
                </div>
            </LightGallery>
        );
    }

    return <div></div>;
};

export default Gallery;
