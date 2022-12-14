import { useDispatch, useSelector } from "react-redux";
import ResultBar from "../components/UI/Bars/ResultBar";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import Card from "../components/UI/Card";
import {
    getBarbershops,
    getBarbershopsByPrice,
    getBarbershopsBySearch,
} from "../redux/features/barbershopsSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";
import { useSearchParams } from "react-router-dom";
import { PriceProps } from "../redux/features/barbersSlice";

const Barbershops = () => {
    const [searchParams] = useSearchParams();

    const { barbershops, loading } = useSelector(
        (state: RootState) => state.barbershops
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (
            (searchParams.get("minPrice") === "0" &&
                searchParams.get("maxPrice") === "0") ||
            (searchParams.get("minPrice") === null &&
                searchParams.get("maxPrice") === null)
        ) {
            if (
                searchParams.get("search") === null ||
                searchParams.get("search") === "null" ||
                searchParams.get("search") === ""
            )
                dispatch(getBarbershops());
            else {
                dispatch(getBarbershopsBySearch(searchParams.get("search")));
            }
        } else {
            const prices: PriceProps = {
                minPrice: searchParams.get("minPrice"),
                maxPrice: searchParams.get("maxPrice"),
            };
            dispatch(getBarbershopsByPrice(prices));
        }
        // dispatch(getServices());
    }, [dispatch, searchParams]);

    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterSearch currentPage="barbershops" />
                        <FilterPrice currentPage="barbershops" />
                        {/* <FilterCheckbox
                            title="Services"
                            checkboxes={services}
                            isLoading={serviceLoading}
                        /> */}
                    </Column>
                    <Column md={8} lg={9} xl={9}>
                        <ResultBar pageName="barbershops" itemCount={barbershops.length} />
                        <div className="results">
                            <Row>
                                {loading && <Loader />}
                                {!loading && barbershops.length === 0 && (
                                    <NotFoundMessage />
                                )}
                                {!loading &&
                                    barbershops.length > 0 &&
                                    barbershops.map((bshop) => {
                                        return (
                                            <Column
                                                key={bshop.id}
                                                className="mb-4"
                                                md={6}
                                                lg={4}
                                                xl={4}
                                            >
                                                <Card
                                                    barbershopId={bshop.id}
                                                    title={bshop.name}
                                                    price={bshop.price}
                                                    image={bshop.image}
                                                    // location={bshop.location}
                                                    afterPrice={
                                                        bshop.afterPrice
                                                    }
                                                />
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

export default Barbershops;
