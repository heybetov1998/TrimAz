import React from "react";
import LightGallery from "lightgallery/react";
import Loader from "../UI/Loaders/Loader";
import { ImageMainState } from "../../redux/features/blogDetailsSlice";
import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

type PropsType = {
    isLoading?: boolean;
    images: ImageMainState[];
};

const GridGallery = (props: PropsType) => {
    const initHandler = () => {
        console.log("Light Gallery is initialized");
    };

    return (
        <div className="portfolio mt-5">
            {props.isLoading && <Loader />}
            {!props.isLoading && props.images.length === 0 && <></>}
            {!props.isLoading && props.images.length > 0 && (
                <LightGallery
                    onInit={initHandler}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    selector={".portfolio_item"}
                >
                    <div className="portfolio_images">
                        <Row>
                            {props.images.map((image, index) => {
                                if (!image.isMain)
                                    return (
                                        <Column
                                            key={index}
                                            default={6}
                                            sm={4}
                                            md={4}
                                            lg={3}
                                            xl={3}
                                        >
                                            <div className="d-flex justify-content-center">
                                                <div
                                                    className="portfolio_item"
                                                    data-src={`https://localhost:7231/img/${image.name}`}
                                                >
                                                    <img
                                                        src={`https://localhost:7231/img/${image.name}`}
                                                        alt={image.name}
                                                    />
                                                </div>
                                            </div>
                                        </Column>
                                    );
                                return (
                                    <React.Fragment
                                        key={index}
                                    ></React.Fragment>
                                );
                            })}
                        </Row>
                    </div>
                </LightGallery>
            )}
        </div>
    );
};

export default GridGallery;
