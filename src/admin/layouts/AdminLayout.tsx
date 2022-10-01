import { Link, NavLink, Outlet } from "react-router-dom";
import Column from "../../components/UI/grid/Column";
import ContainerFluid from "../../components/UI/grid/ContainerFluid";
import Row from "../../components/UI/grid/Row";
import "../assets/css/AdminLayout.css";

const AdminLayout = () => {
    return (
        <ContainerFluid>
            <Row>
                <Column md={4} lg={3} xl={3}>
                    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
                        <a
                            href="/"
                            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                        >
                            <span className="fs-4">Manager panel</span>
                        </a>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">
                                    Go to Website
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <NavLink
                                    to={"barbers"}
                                    className="nav-link text-white"
                                >
                                    Barbers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"barbershops"}
                                    className="nav-link text-white"
                                >
                                    Barbershops
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"products"}
                                    className="nav-link text-white"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"blogs"}
                                    className="nav-link text-white"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"feedbacks"}
                                    className="nav-link text-white"
                                >
                                    Feedbacks
                                </NavLink>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown d-flex justify-content-between w-100">
                            <Link
                                to="/users/:id/username"
                                className="d-flex align-items-center text-white text-decoration-none"
                            >
                                <img
                                    src="https://github.com/mdo.png"
                                    alt=""
                                    width="32"
                                    height="32"
                                    className="rounded-circle me-2"
                                />
                                <strong>heybetov1998</strong>
                            </Link>
                            <Link to="/logout" className="btn btn-danger">
                                Sign out
                            </Link>
                        </div>
                    </div>
                </Column>
                <Column md={8} lg={9} xl={9}>
                    <Outlet />
                </Column>
            </Row>
        </ContainerFluid>
    );
};

export default AdminLayout;
