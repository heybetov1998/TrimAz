import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section
            id="notFound"
            className="d-flex flex-column justify-content-center align-items-center vh-100"
        >
            <p className="mb-3 text">It is time to go home</p>
            <Link className="text-white" to="/">
                Go Home
            </Link>
        </section>
    );
};

export default NotFound;
