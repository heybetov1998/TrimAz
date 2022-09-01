import BrandLogo from "./Navbar/BrandLogo";
import HeaderNavigation from "./Navbar/HeaderNavigation";
import NavList from "./Navbar/NavList";
import RightHeader from "./Navbar/RightHeader";
import Column from "./UI/grid/Column";
import ContainerFluid from "./UI/grid/ContainerFluid";
import Row from "./UI/grid/Row";

const Header = () => {
    return (
        <header className="main_header">
            <ContainerFluid>
                <Row>
                    <Column size={2}>
                        <BrandLogo />
                    </Column>
                    <Column size={8}>
                        <HeaderNavigation>
                            <NavList />
                        </HeaderNavigation>
                    </Column>
                    <Column size={2}>
                        <RightHeader />
                    </Column>
                </Row>
            </ContainerFluid>
        </header>
    );
};

export default Header;
