import React, { useEffect, useState } from "react";
import SubmitButton from "../UI/Buttons/SubmitButton";
import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getServices } from "../../redux/features/servicesSlice";

import image from "../../assets/images/intro.jpg";

import "react-datepicker/dist/react-datepicker.css";
import { getTimes } from "../../redux/features/timeSlice";
import { Link } from "react-router-dom";

export interface ServicesOption {
    readonly value: number;
    readonly label: string;
}

const Intro = () => {
    const [selectedService, setSelectedService] = useState(0);
    const [selectedTime, setSelectedTime] = useState(0);
    const { services } = useSelector((state: RootState) => state.services);
    const { times } = useSelector((state: RootState) => state.times);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getServices());
        dispatch(getTimes());
    }, [dispatch]);

    const selectServiceHandler = (event: any) => {
        event.preventDefault();
        setSelectedService(event.target.value);
    };

    const selectTimeHandler = (event: any) => {
        event.preventDefault();
        setSelectedTime(event.target.value);
    };

    // const submitHandler = (event: any) => {
    //     event.preventDefault();
    //     if (selectedService !== 0 && selectedTime !== 0) {
    //         // sessionStorage.setItem(
    //         //     "selected_service",
    //         //     selectedService.toString()
    //         // );
    //         // sessionStorage.setItem("selected_time", selectedTime.toString());
    //         // console.log(
    //         //     sessionStorage.getItem("selected_service"),
    //         //     sessionStorage.getItem("selected_time")
    //         // );
    //     }
    // };

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
                                        <select
                                            className="custom_select"
                                            name="services"
                                            id="services"
                                            onChange={selectServiceHandler}
                                        >
                                            <option value={0}>
                                                Select service
                                            </option>
                                            {services.map((service) => (
                                                <option
                                                    key={service.id}
                                                    value={service.id}
                                                >
                                                    {service.name}
                                                </option>
                                            ))}
                                        </select>
                                    </Column>
                                    <Column
                                        className="mb-3 m-lg-0"
                                        lg={4}
                                        xl={4}
                                    >
                                        <select
                                            className="custom_select"
                                            id="times"
                                            name="times"
                                            onChange={selectTimeHandler}
                                        >
                                            <option value={0}>
                                                Select time range
                                            </option>
                                            {times.map((time) => (
                                                <option
                                                    key={time.id}
                                                    value={time.id}
                                                >
                                                    {time.range}
                                                </option>
                                            ))}
                                        </select>
                                    </Column>
                                    <Column lg={4} xl={4}>
                                        {selectedTime !== 0 &&
                                            selectedService !== 0 && (
                                                <Link
                                                    className="submit_button text-white d-flex justify-content-center align-items-center"
                                                    to={`/barbers?serviceId=${selectedService}&timeId=${selectedTime}`}
                                                >
                                                    Search
                                                </Link>
                                            )}
                                        {(selectedTime === 0 ||
                                            selectedService === 0) && (
                                            <SubmitButton
                                                type="button"
                                                text="Search"
                                                isDisabled={true}
                                            />
                                        )}
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
