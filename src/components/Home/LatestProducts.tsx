import Card from "../UI/Card";
import SectionHeader from "../UI/section/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import NavigationAbove from "../UI/swiper/NavigationAbove";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/images/612-500x500.jpg";
import { AppDispatch, RootState } from "../../redux/store";
import { getlatestProducts } from "../../redux/features/latestProductsSlice";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        title: "HairCutter",
        price: 400,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
            id: "auth1",
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Engin Altan",
        },
    },
    {
        id: 2,
        title: "Fen",
        price: 500,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
            id: "aut2",
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Enner Valencia",
        },
    },
    {
        id: 3,
        title: "Qayçı",
        price: 20,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
            id: "aut3",
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Altay Bayındır",
        },
    },
    {
        id: 4,
        title: "Saç ütüsü",
        price: 100,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
            id: "aut4",
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Atilla Szalai",
        },
    },
    {
        id: 5,
        title: "Termos",
        price: 80,
        location: "Yasamal, Baku",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
            id: "aut5",
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Serdar Dursun",
        },
    },
];

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
                        {latestProducts.length > 4 && (
                            <NavigationAbove id="latestProdNav" />
                        )}
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
