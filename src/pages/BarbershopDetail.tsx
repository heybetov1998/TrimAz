import { Link, useParams } from "react-router-dom";
import BarberCard from "../components/Cards/BarberCard";
import CardFrame from "../components/UI/CardFrame";
import StandartCheckbox from "../components/UI/Checkboxes/StandartCheckbox";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import Map from "../components/UI/Map";
import Reviews from "../components/UI/Reviews/Reviews";
import SectionHeader from "../components/UI/section/SectionHeader";
import SectionPartName from "../components/UI/section/SectionPartName";

const custBarber = {
    name: "Teymur badirbayli",
    image: {
        src: require("../assets/images/685-500x500.jpg"),
    },
    rating: 4.5,
};

const BarbershopDetail = () => {
    const params = useParams();
    const { id } = params;

    return (
        <section id="barbershopDetail">
            <div className="container">
                <SectionHeader text="Barbershop name here" />
                <div className="our_barbers">
                    <SectionPartName text="Our Barbers" />
                    <Row>
                        <Column lg={4} xl={4}>
                            <Link to="#" className="card_holder">
                                <BarberCard barber={custBarber} />
                            </Link>
                        </Column>
                        <Column lg={4} xl={4}>
                            <Link to="#" className="card_holder">
                                <BarberCard barber={custBarber} />
                            </Link>
                        </Column>
                        <Column lg={4} xl={4}>
                            <Link to="#" className="card_holder">
                                <BarberCard barber={custBarber} />
                            </Link>
                        </Column>
                        <Column lg={4} xl={4}>
                            <Link to="#" className="card_holder">
                                <BarberCard barber={custBarber} />
                            </Link>
                        </Column>
                        <Column lg={4} xl={4}>
                            <Link to="#" className="card_holder">
                                <BarberCard barber={custBarber} />
                            </Link>
                        </Column>
                    </Row>
                </div>
                <div className="our_services">
                    <SectionPartName text="Our Services" />
                    <Row>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                        <Column lg={3} xl={3}>
                            <CardFrame className="services_list_item">
                                <StandartCheckbox
                                    text="test"
                                    isDisabled
                                    isChecked
                                />
                            </CardFrame>
                        </Column>
                    </Row>
                </div>
                <div className="our_location">
                    <SectionPartName text="Our Location" />
                    <Map lat={40.3773237} lng={49.8540028} />
                </div>
                <div className="our_reviews">
                    <SectionPartName text="Comments &amp; Reviews" />
                    <Reviews />
                </div>
            </div>
        </section>
    );
};

export default BarbershopDetail;
