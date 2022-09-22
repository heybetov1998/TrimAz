import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SectionHeader from "../../UI/section/SectionHeader";
import BarberSlide from "./BarberSlide";
import SwiperPrev from "../../UI/swiper/SwiperPrev";
import SwiperNext from "../../UI/swiper/SwiperNext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopBarbers } from "../../../redux/features/topBarbersSlice";
import { AppDispatch, RootState } from "../../../redux/store";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import image1 from "../../../assets/images/1077-500x500.jpg";
import image2 from "../../../assets/images/555-500x500.jpg";
import image3 from "../../../assets/images/612-500x500.jpg";
import image4 from "../../../assets/images/685-500x500.jpg";
import Loader from "../../UI/Loaders/Loader";

const TopBarbers = () => {
    const { topBarbers, loading } = useSelector(
        (state: RootState) => state.topBarbers
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getTopBarbers());
    }, [dispatch]);

    return (
        <section id="topBarbers">
            <div className="container">
                <SectionHeader text="Top barbers" />
                {loading ? (
                    <Loader />
                ) : (
                    <div className="slider_holder position-relative">
                        <div className="on_slider_nav">
                            <SwiperPrev className="absolute-nav" />
                            <SwiperNext className="absolute-nav" />
                        </div>
                        <Swiper
                            breakpoints={{
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                            spaceBetween={24}
                            navigation={{
                                prevEl: ".on_slider_nav .swiper-custom-prev",
                                nextEl: ".on_slider_nav .swiper-custom-next",
                            }}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {topBarbers.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <BarberSlide
                                        imageSrc={item.imageSrc}
                                        name={`${item.firstName} ${item.lastName}`}
                                        rating={item.starRating}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TopBarbers;
