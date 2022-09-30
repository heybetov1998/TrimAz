import { Link } from "react-router-dom";
import SectionPartName from "../../../components/UI/section/SectionPartName";

const FeedbackDash = () => {
    return (
        <div>
            <SectionPartName className="my-4" text="Feedbacks" />
            <Link to="create" className="btn btn-primary mb-5">
                Create new
            </Link>
        </div>
    );
};

export default FeedbackDash;
