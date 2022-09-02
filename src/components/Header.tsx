import BrandLogo from "./Navbar/BrandLogo";
import HeaderNavigation from "./Navbar/HeaderNavigation";
import NavList from "./Navbar/NavList";
import RightHeader from "./Navbar/RightHeader";
import Column from "./UI/grid/Column";
import ContainerFluid from "./UI/grid/ContainerFluid";
import Row from "./UI/grid/Row";

const Header = () => {
    return (
        <header className="main_header position-fixed top-0 start-0 end-0">
            <ContainerFluid>
                <Row>
                    <Column default={4} sm={2} md={2} lg={2} xl={2}>
                        <BrandLogo />
                    </Column>
                    <Column
                        className="d-none d-sm-none d-md-block"
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <HeaderNavigation>
                            <NavList />
                        </HeaderNavigation>
                    </Column>
                    <Column default={8} sm={10} md={2} lg={2} xl={2}>
                        <RightHeader />
                    </Column>
                </Row>
            </ContainerFluid>
        </header>
    );
};

export default Header;
