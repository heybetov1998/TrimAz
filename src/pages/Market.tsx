import Card from "../components/UI/Card";
import FilterCategory from "../components/UI/Filters/FilterCategory";
import FilterPrice from "../components/UI/Filters/FilterPrice";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";

const filteredDUMMYProducts = [
    {
        id: 1,
        title: "HairCutter",
        price: 400,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Product image",
        },
        author: {
            image: {
                src: require("../assets/images/555-500x500.jpg"),
                alt: "Author Image",
            },
            name: "Engin Altan",
        },
    },
    {
        id: 2,
        title: "Fen",
        price: 500,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Product image",
        },
        author: {
            image: {
                src: require("../assets/images/555-500x500.jpg"),
                alt: "Author Image",
            },
            name: "Enner Valencia",
        },
    },
    {
        id: 3,
        title: "Qayçı",
        price: 20,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Product image",
        },
        author: {
            image: {
                src: require("../assets/images/555-500x500.jpg"),
                alt: "Author Image",
            },
            name: "Altay Bayındır",
        },
    },
    {
        id: 4,
        title: "Saç ütüsü",
        price: 100,
        location: "Baku, Azerbaijan",
        afterPrice: null,
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Product image",
        },
        author: {
            image: {
                src: require("../assets/images/555-500x500.jpg"),
                alt: "Author Image",
            },
            name: "Atilla Szalai",
        },
    },
    {
        id: 5,
        title: "Termos",
        price: 80,
        location: "Yasamal, Baku",
        afterPrice: null,
        image: {
            src: require("../assets/images/555-500x500.jpg"),
            alt: "Product image",
        },
        author: {
            image: {
                src: require("../assets/images/555-500x500.jpg"),
                alt: "Author Image",
            },
            name: "Serdar Dursun",
        },
    },
];

const Market = () => {
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
                                {filteredDUMMYProducts.map((product) => {
                                    return (
                                        <Column className="mb-4" md={6} lg={4} xl={4}>
                                            <Card
                                                hasHeart
                                                title={product.title}
                                                price={product.price}
                                                image={product.image}
                                                location={product.location}
                                                author={{
                                                    name: product.author.name,
                                                    image: product.author.image,
                                                }}
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
