import { NavLink } from "react-router-dom";
import { BiBasket, BiUser, BiMenu } from "react-icons/bi";

const RightHeader = () => {
    return (
        <div className="h-100 right_header">
            <ul className="h-100 d-flex justify-content-end align-items-center">
                <li>
                    <NavLink
                        className="right_item d-flex justify-content-center align-items-center"
                        to={"#"}
                    >
                        <BiBasket size={"1.4rem"} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="right_item d-flex justify-content-center align-items-center"
                        to={"#"}
                    >
                        <BiUser size={"1.4rem"} />
                    </NavLink>
                </li>
                <li className="d-md-none">
                    <NavLink
                        className="right_item d-flex justify-content-center align-items-center"
                        to={"#"}
                    >
                        <BiMenu size={"1.4rem"} />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default RightHeader;
