import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import CardFrame from "../components/UI/CardFrame";
import AuthorInfo from "../components/UI/Author/AuthorInfo";
import Reviews from "../components/UI/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetails } from "../redux/features/productDetailSlice";
import { LiteGalleryMemo } from "../components/UI/LiteGallery";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";


const ProductDetail = () => {
    const { id } = useParams();
    const review = useSelector((state: RootState) => state.review);
    const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

    const { product, loading } = useSelector(
        (state: RootState) => state.productDetails
    );

    const commentHandler = (ev: any) => {
        ev.preventDefault();

        if (review.starValue !== 0 && review.commentValue !== "") {
            console.log(review.starValue, review.commentValue);

            fetch("https://localhost:7231/api/Reviews/product", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: id,
                    userId: loggedUser.id,
                    rating: review.starValue,
                    comment: review.commentValue,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    return (
        <div id="product_detail">
            <div className="container">
                <Row>
                    <Column md={4} lg={4} xl={4}>
                        <LiteGalleryMemo product={product} loading={loading} />
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
                            {product.seller.phoneNumber !== null && (
                                <a
                                    className="btn btn-warning mt-4"
                                    href={`https://wa.me/994${product.seller.phoneNumber}`}
                                >
                                    Buy
                                </a>
                            )}
                        </CardFrame>
                        <Reviews
                            submitter={commentHandler}
                            reviews={product.reviews}
                            isWritable={true}
                        />
                    </Column>
                </Row>
            </div>
        </div>
    );
};

export default ProductDetail;
