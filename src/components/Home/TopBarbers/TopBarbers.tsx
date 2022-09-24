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
import Loader from "../../UI/Loaders/Loader";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NotFoundMessage from "../../UI/Messages/NotFoundMessage";

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
                {loading && <Loader />}
                {!loading && topBarbers.length === 0 && <NotFoundMessage />}
                {!loading && topBarbers.length > 0 && (
                    <div className="slider_holder position-relative">
                        {topBarbers.length > 5 && (
                            <div className="on_slider_nav">
                                <SwiperPrev className="absolute-nav" />
                                <SwiperNext className="absolute-nav" />
                            </div>
                        )}
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
                            loop={false}
                            modules={[Pagination, Navigation]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {topBarbers.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <BarberSlide
                                        imageSrc={`https://localhost:7231/img/${item.imageName}`}
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
