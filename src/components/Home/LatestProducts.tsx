import Card from "../UI/Card";
import SectionHeader from "../UI/section/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import NavigationAbove from "../UI/swiper/NavigationAbove";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getlatestProducts } from "../../redux/features/latestProductsSlice";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";

const LatestProducts = () => {
    const { latestProducts, loading } = useSelector(
        (state: RootState) => state.latestProducts
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getlatestProducts());
    }, [dispatch]);

    return (
        <section id="latestProducts">
            <div className="container">
                <SectionHeader text="Latest Products" />

                {loading && <Loader />}
                {!loading && latestProducts.length === 0 && <NotFoundMessage />}
                {!loading && latestProducts.length > 0 && (
                    <div className="slider_holder position-relative">
                        <NavigationAbove id="latestProdNav" />
                        <Swiper
                            breakpoints={{
                                576: { slidesPerView: 2, slidesPerGroup: 2 },
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                992: { slidesPerView: 3, slidesPerGroup: 3 },
                                1200: { slidesPerView: 4, slidesPerGroup: 4 },
                            }}
                            spaceBetween={24}
                            navigation={{
                                prevEl: "#latestProdNav .swiper-custom-prev",
                                nextEl: "#latestProdNav .swiper-custom-next",
                            }}
                            loop={false}
                            pagination={{
                                el: ".paginationProduct",
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className}"></span>`;
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {latestProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Card
                                        hasHeart
                                        title={product.title}
                                        price={product.price}
                                        image={product.image}
                                        location={"empty location"}
                                        author={{
                                            id: product.seller.id,
                                            name: `${product.seller.firstName} ${product.seller.lastName}`,
                                            image: product.seller.image,
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-pagination paginationProduct"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestProducts;
