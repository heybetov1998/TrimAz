import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import CardFrame from "../../../components/UI/CardFrame";
import Column from "../../../components/UI/grid/Column";
import Row from "../../../components/UI/grid/Row";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getBarberServices } from "../../../redux/features/servicesSlice";
import { AppDispatch, RootState } from "../../../redux/store";

interface serviceType {
    name: string;
    price: number;
}

const BarberServices = () => {
    const { id } = useParams();

    const { services, loading } = useSelector(
        (state: RootState) => state.services
    );

    const submitHandler = (ev: any) => {
        ev.preventDefault();
        const formData = new FormData();

        formData.append("barberId", id!);

        const serviceForm: any = document.getElementById("serviceForm");
        const entries: any = new FormData(serviceForm).entries();

        for (const service of services) {
            const serviceObj: serviceType = {
                name: service.name,
                price: service.price,
            };

            for (const [key, val] of entries) {
                if (service.name === key) {
                    serviceObj.price = +val;
                    formData.append("services", JSON.stringify(serviceObj));
                    break;
                }
            }
        }

        console.log(formData.get("barberId"), formData.getAll("services"));

        fetch(`https://localhost:7231/api/Services`, {
            method: "PUT",
            headers: { Accept: "*/*" },
            // headers:{
            // "Content-Type": "application/json;",
            // },
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // navigate("/admin");
            });
    };

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarberServices(id));
    }, [dispatch, id]);

    return (
        <>
            <SectionPartName className="my-4" text="Barber Services" />
            <p className="mb-4">
                Note: Make the price{" "}
                <span className="text-white">0 (zero)</span> or{" "}
                <span className="text-white">empty</span> to not show the
                service.
            </p>
            <Row className="justify-content-center">
                <Column sm={10} md={10} lg={9} xl={9}>
                    <CardFrame>
                        {loading && <Loader />}
                        {!loading && (
                            <form id="serviceForm" onSubmit={submitHandler}>
                                <ul>
                                    <li>
                                        <Row>
                                            <Column lg={6} xl={6}>
                                                <div>Name</div>
                                            </Column>
                                            <Column lg={6} xl={6}>
                                                <div>Price (AZN)</div>
                                            </Column>
                                        </Row>
                                    </li>
                                    <hr />
                                    {services.map((service) => (
                                        <li key={service.name}>
                                            <Row>
                                                <Column lg={6} xl={6}>
                                                    <div>{service.name}</div>
                                                </Column>
                                                <Column lg={6} xl={6}>
                                                    <input
                                                        name={service.name}
                                                        className="mb-1"
                                                        type="number"
                                                        min={0}
                                                        max={10000}
                                                        defaultValue={
                                                            service.price
                                                        }
                                                    />
                                                </Column>
                                            </Row>
                                        </li>
                                    ))}
                                </ul>
                                <SubmitButton
                                    text="Save changes"
                                    className="mt-3"
                                />
                            </form>
                        )}
                    </CardFrame>
                </Column>
            </Row>
        </>
    );
};

export default BarberServices;
