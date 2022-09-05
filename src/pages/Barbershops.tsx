import Card from "../components/UI/Card";
import FilterCategory from "../components/UI/Filters/FilterCategory";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";

const DUMMY_BARBERSHOPS = [
    {
        id: 1,
        title: "Balaeli barber",
        price: 15,
        afterPrice: "-dan başlayaraq",
        location: "Sovetski, Baku",
        image: {
            src: require("../assets/images/1077-500x500.jpg"),
            alt: "Barbershop image",
        },
    },
    {
        id: 2,
        title: "Boycut",
        price: 25,
        afterPrice: "-dan başlayaraq",
        location: "28 May, Baku",
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Barbershop image",
        },
    },
    {
        id: 3,
        title: "Teymurun yeri",
        price: 15,
        afterPrice: "-dan başlayaraq",
        location: "Çin səfirliyinin arxası",
        image: {
            src: require("../assets/images/612-500x500.jpg"),
            alt: "Barbershop image",
        },
    },
    {
        id: 4,
        title: "Öz bərbərim",
        price: 5,
        afterPrice: "-dan başlayaraq",
        location: "Tarqovu",
        image: {
            src: require("../assets/images/685-500x500.jpg"),
            alt: "Barbershop image",
        },
    },
    {
        id: 5,
        title: "Figaro",
        price: 10,
        afterPrice: "-dan başlayaraq",
        location: "Azadlıq metrosu, Baku",
        image: {
            src: require("../assets/images/intro.jpg"),
            alt: "Barbershop image",
        },
    },
];

const Barbershops = () => {
    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column md={4} lg={3} xl={3}>
                        <FilterPrice />
                        <FilterCategory />
                    </Column>
                    <Column md={8} lg={9} xl={9}>
                        <div className="resultsBar">
                            <div className="leftBar d-flex align-items-center">
                                <span>24 items found</span>
                                <button className="clear_filter btn btn-link">
                                    Clear filter
                                </button>
                            </div>
                            <div className="rightBar"></div>
                        </div>
                        <div className="results">
                            <Row>
                                {DUMMY_BARBERSHOPS.map((bshop) => {
                                    return (
                                        <Column
                                            className="mb-4"
                                            md={6}
                                            lg={4}
                                            xl={4}
                                        >
                                            <Card
                                                title={bshop.title}
                                                price={bshop.price}
                                                image={bshop.image}
                                                location={bshop.location}
                                                afterPrice={bshop.afterPrice}
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
