import { useEffect } from "react";
import Loader from "../components/UI/Loaders/Loader";

const Logout = () => {
    window.addEventListener("localStorage", () => {
        localStorage.removeItem("logged_user");
        window.location.replace("/");
    });

    useEffect(() => {
        dispatchEvent(new Event("localStorage"));
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Loader />
        </div>
    );
};
export default Logout;
