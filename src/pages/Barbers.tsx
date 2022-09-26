import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import BarberCard from "../components/Cards/BarberCard";
import ResultBar from "../components/UI/Bars/ResultBar";
import FilterCheckbox from "../components/UI/Filters/FilterCheckbox";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import { AppDispatch, RootState } from "../redux/store";
import { getBarbers } from "../redux/features/barbersSlice";
import { getServices } from "../redux/features/servicesSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";

const Barbers = () => {
    const { barbers, loading } = useSelector(
        (state: RootState) => state.barbers
    );
    const { services, loading: serviceLoading } = useSelector(
        (state: RootState) => state.services
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbers());
        dispatch(getServices());
    }, [dispatch]);

    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterSearch />
                        <FilterPrice />
                        <FilterCheckbox
                            title="Services"
                            checkboxes={services}
                            isLoading={serviceLoading}
                        />
                    </Column>
                    <Column md={8} lg={9} xl={9}>
                        <ResultBar itemCount={barbers.length} />
                        <div className="results">
                            <Row>
                                {loading && <Loader />}
                                {!loading && barbers.length === 0 && (
                                    <NotFoundMessage />
                                )}
                                {!loading &&
                                    barbers.length > 0 &&
                                    barbers.map((barber) => {
                                        return (
                                            <Column
                                                key={barber.id}
                                                className="mb-4"
                                                md={6}
                                                lg={6}
                                                xl={6}
                                            >
                                                <Link
                                                    className="card_holder"
                                                    to={`${barber.id}`}
                                                >
                                                    <BarberCard
                                                        barber={barber}
                                                    />
                                                </Link>
                                            </Column>
                                        );
                                    })}
                            </Row>
                        </div>
                    </Column>
                </Row>
            </div>
        </section>
    );
};

export default Barbers;
