import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BarberCard from "../components/Cards/BarberCard";
import CardFrame from "../components/UI/CardFrame";
import StandartCheckbox from "../components/UI/Checkboxes/StandartCheckbox";
import Gallery from "../components/UI/Gallery";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import Loader from "../components/UI/Loaders/Loader";
import Map from "../components/UI/Map";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";
import Reviews from "../components/UI/Reviews/Reviews";
import SectionHeader from "../components/UI/section/SectionHeader";
import SectionPartName from "../components/UI/section/SectionPartName";
import { getBarbershopDetails } from "../redux/features/barbershopDetailsSlice";
import { AppDispatch, RootState } from "../redux/store";

const BarbershopDetail = () => {
    const params = useParams();
    const { id } = params;

    const { barbershop, loading } = useSelector(
        (state: RootState) => state.barbershopDetails
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbershopDetails(id));
    }, [dispatch, id]);

    return (
        <section id="barbershopDetail">
            <div className="container">
                <SectionHeader text={barbershop.name} />
                <Gallery images={barbershop.images} />
                <div className="our_barbers">
                    <SectionPartName text="Our Barbers" />
                    <Row>
                        {loading && <Loader />}
                        {!loading && barbershop.barbers.length === 0 && (
                            <NotFoundMessage text="No barbers in this barbershop" />
                        )}
                        {!loading &&
                            barbershop.barbers.length > 0 &&
                            barbershop.barbers.map((barber) => (
                                <Column key={barber.id} md={6} lg={4} xl={4}>
                                    <Link
                                        to={`/barbers/${barber.id}`}
                                        className="card_holder"
                                    >
                                        <BarberCard barber={barber} />
                                    </Link>
                                </Column>
                            ))}
                    </Row>
                </div>
                <div className="our_services">
                    <SectionPartName text="Our Services" />
                    <Row>
                        {loading && <Loader />}
                        {!loading && barbershop.services.length === 0 && (
                            <NotFoundMessage text="No service" />
                        )}
                        {!loading &&
                            barbershop.services.length > 0 &&
                            barbershop.services.map((service) => (
                                <Column key={service.id} md={6} lg={4} xl={3}>
                                    <CardFrame className="services_list_item">
                                        <StandartCheckbox
                                            text={service.name}
                                            isDisabled
                                            isChecked
                                        />
                                    </CardFrame>
                                </Column>
                            ))}
                    </Row>
                </div>
                <div className="our_location">
                    <SectionPartName text="Our Location" />
                    {loading && <Loader />}
                    {!loading && barbershop.locations.length === 0 && (
                        <NotFoundMessage text="Location not found" />
                    )}
                    {!loading && barbershop.locations.length > 0 && (
                        <Map locations={barbershop.locations} />
                    )}
                </div>
                <div className="our_reviews">
                    <SectionPartName text="Comments &amp; Reviews" />
                    <Reviews reviews={barbershop.reviews} />
                </div>
            </div>
        </section>
    );
};

export default BarbershopDetail;
