import Card from "../../UI/Card";
import SectionHeader from "../../UI/section/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import image from "../../../assets/images/612-500x500.jpg";
import SwiperPrev from "../../UI/swiper/SwiperPrev";
import SwiperNext from "../../UI/swiper/SwiperNext";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        title: "HairCutter",
        price: 400,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: { src: image, alt: "Product image" },
        author: {
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
            image: {
                src: image,
                alt: "Author Image",
            },
            name: "Atilla Szalai",
        },
    },
];

const LatestProducts = () => {
    return (
        <section id="latestProducts">
            <div className="container">
                <SectionHeader text="Latest Products" />
                <div className="slider_holder position-relative">
                    <div className="custom-navigation-div d-flex justify-content-end">
                        <SwiperPrev />
                        <SwiperNext />
                    </div>
                    <Swiper
                        breakpoints={{
                            576: { slidesPerView: 2, slidesPerGroup: 2 },
                            768: { slidesPerView: 2, slidesPerGroup: 2 },
                            992: { slidesPerView: 3, slidesPerGroup: 3 },
                            1200: { slidesPerView: 4, slidesPerGroup: 4 },
                        }}
                        spaceBetween={24}
                        navigation={{
                            prevEl: ".custom-navigation-div>.swiper-custom-prev",
                            nextEl: ".custom-navigation-div>.swiper-custom-next",
                        }}
                        loop={true}
                        pagination={{
                            el: ".custom-pagination-div",
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}"></span>`;
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {DUMMY_PRODUCTS.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Card
                                    hasHeart
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    location={product.location}
                                    author={{
                                        name: product.author.name,
                                        image: product.author.image,
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-pagination-div"></div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
