import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultBar from "../components/UI/Bars/ResultBar";
import Card from "../components/UI/Card";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import FilterSearch from "../components/UI/Filters/FilterSearch";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import { AppDispatch, RootState } from "../redux/store";
import { getProducts } from "../redux/features/productsSlice";
import Loader from "../components/UI/Loaders/Loader";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";

const Market = () => {
    const { products, loading } = useSelector(
        (state: RootState) => state.products
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterSearch />
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
