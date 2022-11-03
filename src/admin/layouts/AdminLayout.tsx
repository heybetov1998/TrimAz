import { Link, NavLink, Outlet } from "react-router-dom";
import Column from "../../components/UI/grid/Column";
import ContainerFluid from "../../components/UI/grid/ContainerFluid";
import Row from "../../components/UI/grid/Row";
import NotFound from "../../pages/NotFound";
import "../assets/css/AdminLayout.css";

const AdminLayout = () => {
    const logged_user = JSON.parse(localStorage.getItem("logged_user") || "{}");

    if (
        !localStorage.getItem("logged_user") ||
        logged_user.roleNames.includes("Member")
    ) {
        return <NotFound />;
    }

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
                            {logged_user.roleNames.includes("Admin") && (
                                <>
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
                                            to={"sellers"}
                                            className="nav-link text-white"
                                        >
                                            Sellers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={"owners"}
                                            className="nav-link text-white"
                                        >
                                            Owners
                                        </NavLink>
                                    </li>
                                </>
                            )}
                            {(logged_user.roleNames.includes("Admin") ||
                                logged_user.roleNames.includes("Owner")) && (
                                <li>
                                    <NavLink
                                        to={"barbershops"}
                                        className="nav-link text-white"
                                    >
                                        Barbershops
                                    </NavLink>
                                </li>
                            )}
                            {(logged_user.roleNames.includes("Admin") ||
                                logged_user.roleNames.includes("Seller")) && (
                                <li>
                                    <NavLink
                                        to={"products"}
                                        className="nav-link text-white"
                                    >
                                        Products
                                    </NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink
                                    to={"blogs"}
                                    className="nav-link text-white"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            {logged_user.roleNames.includes("Admin") && (
                                <li>
                                    <NavLink
                                        to={"feedbacks"}
                                        className="nav-link text-white"
                                    >
                                        Feedbacks
                                    </NavLink>
                                </li>
                            )}
                            {logged_user.roleNames.includes("Barber") && (
                                <li>
                                    <NavLink
                                        to={"services"}
                                        className="nav-link text-white"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                        <hr />
                        <div className="dropdown d-flex justify-content-between w-100">
                            <Link
                                to="/users/:id/username"
                                className="d-flex align-items-center text-white text-decoration-none"
                            >
                                <img
                                    src={`https://localhost:7231/img/${logged_user.avatar}`}
                                    alt=""
                                    width="32"
                                    height="32"
                                    className="rounded-circle me-2"
                                />
                                <strong>{logged_user.userName}</strong>
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
