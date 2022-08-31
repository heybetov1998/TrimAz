import Column from "./UI/grid/Column";
import ContainerFluid from "./UI/grid/ContainerFluid";
import Row from "./UI/grid/Row";

const Header = () => {
    return (
        <header>
            <nav>
                <ContainerFluid>
                    <Row>
                        <Column size={2}>left</Column>
                        <Column size={8}>center</Column>
                        <Column size={2}>right</Column>
                    </Row>
                </ContainerFluid>
            </nav>
        </header>
    );
};

export default Header;
