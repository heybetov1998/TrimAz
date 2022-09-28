import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import RegisterCard from "../components/UI/RegisterCard";

const Register = () => {
    return (
        <div id="login_page">
            <div className="container">
                <Row className="justify-content-center">
                    <Column md={7} lg={6} xl={5}>
                        <RegisterCard />
                    </Column>
                </Row>
            </div>
        </div>
    );
};

export default Register;
