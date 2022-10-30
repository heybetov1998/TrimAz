import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultBar from "../components/UI/Bars/ResultBar";
import Card from "../components/UI/Card";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import { AppDispatch, RootState } from "../redux/store";
import {
    getProducts,
    getProductsByPrice,
    getProductsBySearch,
} from "../redux/features/productsSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";
import { useSearchParams } from "react-router-dom";
import { PriceProps } from "../redux/features/barbersSlice";

const Market = () => {
    const [searchParams] = useSearchParams();

    const { products, loading } = useSelector(
        (state: RootState) => state.products
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
                dispatch(getProducts());
            else {
                dispatch(getProductsBySearch(searchParams.get("search")));
            }
        } else {
            const prices: PriceProps = {
                minPrice: searchParams.get("minPrice"),
                maxPrice: searchParams.get("maxPrice"),
            };
            dispatch(getProductsByPrice(prices));
        }
    }, [dispatch, searchParams]);

    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterSearch currentPage="market" />
                        <FilterPrice currentPage="market" />
                    </Column>
                    <Column md={8} lg={9} xl={9}>
                        <ResultBar itemCount={products.length} />
                        <div className="results">
                            <Row>
                                {loading && <Loader />}
                                {!loading && products.length === 0 && (
                                    <NotFoundMessage />
                                )}
                                {!loading &&
                                    products.length > 0 &&
                                    products.map((product) => {
                                        return (
                                            <Column
                                                key={product.id}
                                                className="mb-4"
                                                md={6}
                                                lg={4}
                                                xl={4}
                                            >
                                                <Card
                                                    productId={product.id}
                                                    title={product.title}
                                                    price={product.price}
                                                    image={product.image}
                                                    author={product.seller}
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

export default Market;
