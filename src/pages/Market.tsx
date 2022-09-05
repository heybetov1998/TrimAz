import FilterPrice from "../components/UI/Filters/FilterPrice";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";

const Market = () => {
    return (
        <section id="market">
            <div className="container">
                <Row>
                    <Column lg={3} xl={3}>
                        <FilterPrice />
                    </Column>
                    <Column lg={9} xl={9}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi ex recusandae amet incidunt quia tempora sint,
                        officia quo corrupti ipsam temporibus ullam quisquam in
                        dolores sapiente voluptate veniam voluptatum ad
                        exercitationem nihil numquam! Cum nobis voluptatum unde
                        veniam sed aut error libero earum, consequatur pariatur
                        voluptatem impedit excepturi, alias quaerat.
                    </Column>
                </Row>
            </div>
        </section>
    );
};

export default Market;
