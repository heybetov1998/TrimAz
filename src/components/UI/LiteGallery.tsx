import LightGallery from "lightgallery/react";
import React from "react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Loader from "../../components/UI/Loaders/Loader";
import NotFoundMessage from "../../components/UI/Messages/NotFoundMessage";
import Row from "./grid/Row";
import Column from "./grid/Column";
import SquareImage from "./Images/SquareImage";
import { ProductInfoState } from "../../redux/features/productDetailSlice";

type PropsType = {
    product: ProductInfoState;
    loading: boolean;
};

const LiteGallery = (props: PropsType) => (
    <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector={".product_image"}
    >
        <Row>
            {props.loading && <Loader />}
            {!props.loading &&
                props.product.images.length === 0 &&
                !props.product.mainImage && (
                    <NotFoundMessage text="Product has no image" />
                )}
            {!props.loading && props.product.mainImage && (
                <Column>
                    <div
                        className="product_image"
                        data-src={`https://localhost:7231/img/${props.product.mainImage}`}
                    >
                        <SquareImage img={props.product.mainImage} />
                    </div>
                </Column>
            )}
            {!props.loading &&
                props.product.images.length > 0 &&
                props.product.images.map((image, index) => (
                    <Column key={index} default={4} sm={4} md={4} lg={4} xl={4}>
                        <div
                            className="product_image"
                            data-src={`https://localhost:7231/img/${image}`}
                        >
                            <SquareImage img={image} />
                        </div>
                    </Column>
                ))}
        </Row>
    </LightGallery>
);

export const LiteGalleryMemo = React.memo(LiteGallery);
