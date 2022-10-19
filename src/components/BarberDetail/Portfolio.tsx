import LightGallery from "lightgallery/react";
import SectionPartName from "../UI/section/SectionPartName";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";
import React from "react";

type PropsType = {
    isLoading?: boolean;
    images: {
        name: string;
        alt: string;
    }[];
};

const Portfolio = (props: PropsType) => {
    const initHandler = () => {
        console.log("Light Gallery is initialized");
    };

    return (
        <div className="portfolio">
            <SectionPartName text="My Portfolio" className="mt-0" />
            {props.isLoading && <Loader />}
            {!props.isLoading && props.images.length === 0 && (
                <NotFoundMessage text="No image was uploaded" />
            )}
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
                                if (index < 16)
                                    return (
                                        <Column
                                            key={index}
                                            default={6}
                                            sm={4}
                                            md={4}
                                            lg={3}
                                            xl={3}
                                        >
                                            <div
                                                className="portfolio_item"
                                                data-src={`https://localhost:7231/img/${image.name}`}
                                            >
                                                <img
                                                    src={`https://localhost:7231/img/${image.name}`}
                                                    alt={image.alt}
                                                />
                                            </div>
                                        </Column>
                                    );
                                return <></>;
                            })}
                        </Row>
                    </div>
                </LightGallery>
            )}
        </div>
    );
};

export const PortfolioMemo=React.memo(Portfolio)
