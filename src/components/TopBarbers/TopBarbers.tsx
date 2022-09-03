import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import SectionHeader from "../UI/section/SectionHeader";
import BarberSlide from "./BarberSlide";

import image1 from "../../assets/images/1077-500x500.jpg";
import image2 from "../../assets/images/555-500x500.jpg";
import image3 from "../../assets/images/612-500x500.jpg";
import image4 from "../../assets/images/685-500x500.jpg";

const TopBarbers = () => {
    return (
        <section id="topBarbers" className="container">
            <SectionHeader text="Top barbers" />
            <Swiper
                spaceBetween={24}
                slidesPerView={6}
                // pagination={{ clickable: true }}
                modules={[Pagination]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <BarberSlide imageSrc={image1} name="Sinan Engin" rating={4.0} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image2} name="Ahmet Çakar" rating={4.5} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image3} name="Abdülkerim Durmaz" rating={5.0} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image4} name="Rasim Ozan Kütahyalı" rating={4.5} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image1} name="Sinan Engin" rating={4.0} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image2} name="Ahmet Çakar" rating={4.5} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image3} name="Abdülkerim Durmaz" rating={5.0} />
                </SwiperSlide>
                <SwiperSlide>
                    <BarberSlide imageSrc={image4} name="Rasim Ozan Kütahyalı" rating={4.5} />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default TopBarbers;
