import { ReviewState } from "../../../redux/features/barberDetailsSlice";
import NotFoundMessage from "../Messages/NotFoundMessage";
import { isObjectEmpty } from "../Navbar/RightHeader";
import Comments from "./Comments";
import WriteReview from "./WriteReview";

type PropsType = {
    reviews: ReviewState[];
    isWritable: boolean;
    submitter: (ev: any) => void;
};

const Reviews = (props: PropsType) => {
    const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

    return (
        <div className="reviews">
            {props.isWritable && !isObjectEmpty(loggedUser) && (
                <WriteReview submitHandler={props.submitter} />
            )}
            {props.reviews.length > 0 && <Comments reviews={props.reviews} />}
            {props.reviews.length === 0 && <NotFoundMessage text="No review" />}
        </div>
    );
};

export default Reviews;
