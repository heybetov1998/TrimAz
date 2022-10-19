import { NavLink } from "react-router-dom";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import RegisterCard from "../components/UI/RegisterCard";

type PropsType = {
    actionName: string;
};

const Register = (props: PropsType) => {
    return (
        <div id="login_page">
            <div className="container">
                <Row className="justify-content-center">
                    <Column md={7} lg={6} xl={5}>
                        <RegisterCard actionName={props.actionName} />
                    </Column>
                    <Column md={3} lg={3} xl={3}>
                        <ul>
                            <li>
                                <NavLink
                                    to={"/register/barber"}
                                    className="register_selector"
                                >
                                    Register as Barber
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/register/owner"}
                                    className="register_selector"
                                >
                                    Register as Owner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/register/seller"}
                                    className="register_selector"
                                >
                                    Register as Seller
                                </NavLink>
                            </li>
                        </ul>
                    </Column>
                </Row>
            </div>
        </div>
    );
};

export default Register;
