import SectionHeader from "../../UI/section/SectionHeader";
import NavigationAbove from "../../UI/swiper/NavigationAbove";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Card from "../../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { getBarbershops } from "../../../redux/features/barbershopsSlice";
import Loader from "../../UI/Loaders/Loader";
import NotFoundMessage from "../../UI/Messages/NotFoundMessage";

const BestBarbershops = () => {
    const { barbershops, loading } = useSelector(
        (state: RootState) => state.barbershops
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbershops(12));
    }, [dispatch]);

    return (
        <section id="bestBarbershops">
            <div className="container">
                <SectionHeader text="Best Barbershops" />

                {loading && <Loader />}
                {!loading && barbershops.length === 0 && <NotFoundMessage />}
                {!loading && barbershops.length > 0 && (
                    <div className="slider_holder position-relative">
                        <NavigationAbove id="bestBarbershopNav" />
                        <Swiper
                            breakpoints={{
                                576: { slidesPerView: 2, slidesPerGroup: 2 },
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                992: { slidesPerView: 3, slidesPerGroup: 3 },
                                1200: { slidesPerView: 4, slidesPerGroup: 4 },
                            }}
                            spaceBetween={24}
                            navigation={{
                                prevEl: "#bestBarbershopNav .swiper-custom-prev",
                                nextEl: "#bestBarbershopNav .swiper-custom-next",
                            }}
                            loop={false}
                            pagination={{
                                el: ".paginationBarbershop",
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span class="${className}"></span>`;
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {barbershops.map((bshop) => (
                                <SwiperSlide key={bshop.id}>
                                    <Card
                                        barbershopId={bshop.id}
                                        title={bshop.name}
                                        price={bshop.price}
                                        afterPrice={bshop.afterPrice}
                                        image={bshop.image}
                                        location={bshop.location}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-pagination paginationBarbershop"></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BestBarbershops;
