import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BarberCard from "../components/Cards/BarberCard";
import ResultBar from "../components/UI/Bars/ResultBar";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import { AppDispatch, RootState } from "../redux/store";
import {
    FilterProps,
    getBarbers,
    getBarbersFiltered,
} from "../redux/features/barbersSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";

const Barbers = () => {
    const [searchParams] = useSearchParams();

    const { barbers, loading } = useSelector(
        (state: RootState) => state.barbers
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (
            (searchParams.get("serviceId") === "0" &&
                searchParams.get("timeId") === "0") ||
            (searchParams.get("serviceId") === null &&
                searchParams.get("timeId") === null)
        ) {
            console.log(
                searchParams.get("serviceId"),
                searchParams.get("timeId")
            );

            dispatch(getBarbers());
        } else {
            const filters: FilterProps = {
                serviceId: searchParams.get("serviceId"),
                timeId: searchParams.get("timeId"),
            };
            dispatch(getBarbersFiltered(filters));
        }
        // dispatch(getServices());
    }, [dispatch, searchParams]);

    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterSearch />
                        <FilterPrice />
                        {/* <FilterCheckbox
                            title="Services"
                            checkboxes={services}
                            isLoading={serviceLoading}
                        /> */}
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
