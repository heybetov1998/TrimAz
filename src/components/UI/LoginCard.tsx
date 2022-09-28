import { Link } from "react-router-dom";
import SubmitButton from "./Buttons/SubmitButton";
import CardFrame from "./CardFrame";
import InputBlock from "./Inputs/InputBlock";
import SectionHeader from "./section/SectionHeader";

const LoginCard = () => (
    <CardFrame>
        <SectionHeader text="Login" />
        <form>
            <InputBlock name="Username" inputId="userName" />
            <InputBlock
                name="Password"
                inputId="password"
                inputType="password"
            />
            <Link to={"/forgotPassword"} className="forgot_password">
                Forgot Password?
            </Link>
            <SubmitButton text="Submit" className="py-2" />
        </form>
    </CardFrame>
);

export default LoginCard;
