import ServiceCard from "../Cards/ServiceCard";
import Column from "../UI/grid/Column";
import Row from "../UI/grid/Row";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";
import SectionPartName from "../UI/section/SectionPartName";

type PropsType = {
    isLoading?: boolean;
    services: {
        id: number;
        name: string;
        price: number;
        time: string;
    }[];
};

const MyServices = (props: PropsType) => (
    <div className="my_services">
        <SectionPartName text="My Services" />
        {props.isLoading && <Loader />}
        {!props.isLoading && props.services.length === 0 && (
            <NotFoundMessage text="No service" />
        )}
        {!props.isLoading && props.services.length > 0 && (
            <div className="service_holder">
                <Row>
                    {props.services.map((service) => (
                        <Column key={service.id} md={6} lg={6} xl={6}>
                            <ServiceCard
                                name={service.name}
                                price={service.price}
                                time={service.time}
                            />
                        </Column>
                    ))}
                </Row>
            </div>
        )}
    </div>
);

export default MyServices;
