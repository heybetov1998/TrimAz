import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
    getBarbersByPrice,
    getBarbersFiltered,
    PriceProps,
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
            if (
                (searchParams.get("minPrice") === "0" &&
                    searchParams.get("maxPrice") === "0") ||
                (searchParams.get("minPrice") === null &&
                    searchParams.get("maxPrice") === null)
            ) {
                dispatch(getBarbers());
            } else {
                const prices: PriceProps = {
                    minPrice: searchParams.get("minPrice"),
                    maxPrice: searchParams.get("maxPrice"),
                };
                dispatch(getBarbersByPrice(prices));
            }
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
                        <FilterSearch currentPage="barbers" />
                        <FilterPrice currentPage="barbers" />
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
