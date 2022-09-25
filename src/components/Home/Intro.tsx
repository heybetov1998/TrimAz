import Select from "react-select";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import SubmitButton from "../UI/Buttons/SubmitButton";
import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getServices } from "../../redux/features/servicesSlice";

import image from "../../assets/images/intro.jpg";

import "react-datepicker/dist/react-datepicker.css";

interface ServicesOption {
    readonly value: number;
    readonly label: string;
}

const Intro = () => {
    const { services, loading } = useSelector(
        (state: RootState) => state.services
    );
    const [reservationDate, setReservationDate] = useState(new Date());

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    const reservationHandler = (date: Date) => {
        setReservationDate(date);
    };

    const serviceOptions: ServicesOption[] = services.map((n) => ({
        value: n.id,
        label: n.name,
    }));

    // const serviceOptions: ServicesOption[] = [
    //     { value: 1, label: "test" },
    //     { value: 2, label: "test" },
    //     { value: 3, label: "test" },
    //     { value: 4, label: "test" },
    // ];

    return (
        <section id="intro" style={{ backgroundImage: `url("${image}")` }}>
            <div className="section_backdrop">
                <div className="container h-100">
                    <div className="section_content">
                        <div className="text_part">
                            <h3>Find your style with us</h3>
                            <p>Get best barber in country just one click</p>
                        </div>
                        <div className="search_part w-100">
                            <form>
                                <Row>
                                    <Column
                                        className="mb-3 m-lg-0"
                                        lg={4}
                                        xl={4}
                                    >
                                        <Select
                                            isMulti
                                            name="services"
                                            options={serviceOptions}
                                            className="service_selection"
                                        />
                                    </Column>
                                    <Column
                                        className="mb-3 m-lg-0"
                                        lg={4}
                                        xl={4}
                                    >
                                        {/* <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            placeholder={"select"}
                                        /> */}
                                        <DatePicker
                                            selected={reservationDate}
                                            onChange={reservationHandler}
                                            className="no_transition"
                                        />
                                    </Column>
                                    <Column lg={4} xl={4}>
                                        <SubmitButton text="Search" />
                                    </Column>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Intro;
