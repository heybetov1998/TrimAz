import LightGallery from "lightgallery/react";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import SquareImage from "../components/UI/Images/SquareImage";
import CardFrame from "../components/UI/CardFrame";
import AuthorInfo from "../components/UI/Author/AuthorInfo";
import Reviews from "../components/UI/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../redux/features/productDetailSlice";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";

const ProductDetail = () => {
    const { id } = useParams();

    const { product, loading } = useSelector(
        (state: RootState) => state.productDetails
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    return (
        <div id="product_detail">
            <div className="container">
                <Row>
                    <Column md={4} lg={4} xl={4}>
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            selector={".product_image"}
                        >
                            <Row>
                                {loading && <Loader />}
                                {!loading &&
                                    product.images.length === 0 &&
                                    !product.mainImage && (
                                        <NotFoundMessage text="Product has no image" />
                                    )}
                                {!loading && product.mainImage && (
                                    <Column>
                                        <div
                                            className="product_image"
                                            data-src={`https://localhost:7231/img/${product.mainImage}`}
                                        >
                                            <SquareImage
                                                img={product.mainImage}
                                            />
                                        </div>
                                    </Column>
                                )}
                                {!loading &&
                                    product.images.length > 0 &&
                                    product.images.map((image, index) => (
                                        <Column
                                            key={index}
                                            default={4}
                                            sm={4}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                        >
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
                    </Column>
                    <Column md={8} lg={8} xl={8}>
                        <CardFrame>
                            <div className="name_holder mb-4 d-flex justify-content-between align-items-center">
                                <p className="product_name">{product.title}</p>
                                <span className="product_price">
                                    {product.price} AZN
                                </span>
                            </div>
                            <p className="product_description">
                                {product.content}
                            </p>
                            {!loading && product.seller && (
                                <AuthorInfo
                                    className="mt-4 product_seller"
                                    author={product.seller}
                                />
                            )}
                        </CardFrame>
                        <Reviews reviews={product.reviews} />
                    </Column>
                </Row>
            </div>
        </div>
    );
};

export default ProductDetail;
