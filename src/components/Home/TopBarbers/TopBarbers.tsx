import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SectionHeader from "../../UI/section/SectionHeader";
import BarberSlide from "./BarberSlide";
import SwiperPrev from "../../UI/swiper/SwiperPrev";
import SwiperNext from "../../UI/swiper/SwiperNext";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBarbers } from "../../../redux/features/barbersSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import Loader from "../../UI/Loaders/Loader";
import NotFoundMessage from "../../UI/Messages/NotFoundMessage";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopBarbers = () => {
    const { barbers, loading } = useSelector(
        (state: RootState) => state.barbers
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbers());
    }, [dispatch]);

    return (
        <section id="topBarbers">
            <div className="container">
                <SectionHeader text="Top barbers" />
                {loading && <Loader />}
                {!loading && barbers.length === 0 && <NotFoundMessage />}
                {!loading && barbers.length > 0 && (
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
                            loop={false}
                            modules={[Pagination, Navigation]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {barbers.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <BarberSlide
                                        barberId={item.id}
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
