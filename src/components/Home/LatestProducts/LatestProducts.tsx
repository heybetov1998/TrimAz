import Card from "../../UI/Card";
import SectionHeader from "../../UI/section/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import image from "../../../assets/images/612-500x500.jpg";
import SwiperPrev from "../../UI/swiper/SwiperPrev";
import SwiperNext from "../../UI/swiper/SwiperNext";

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
                        <SwiperSlide>
                            <Card
                                hasStars
                                imageSrc={image}
                                imageAlt="some image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                hasStars
                                imageSrc={image}
                                imageAlt="some image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                hasStars
                                imageSrc={image}
                                imageAlt="some image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                hasStars
                                imageSrc={image}
                                imageAlt="some image"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                hasStars
                                imageSrc={image}
                                imageAlt="some image"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination-div"></div>
                </div>
            </div>
        </section>
    );
};

export default LatestProducts;
