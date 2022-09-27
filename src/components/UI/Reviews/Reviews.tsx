import { ReviewState } from "../../../redux/features/barberDetailsSlice";
import NotFoundMessage from "../Messages/NotFoundMessage";
import Comments from "./Comments";
import WriteReview from "./WriteReview";

type PropsType = {
    reviews: ReviewState[];
};

const Reviews = (props: PropsType) => (
    <div className="reviews">
        <WriteReview />
        {props.reviews.length > 0 && (
            <Comments reviews={props.reviews} />
        )}
        {props.reviews.length === 0 && (
            <NotFoundMessage text="No review" />
        )}
    </div>
);

export default Reviews;
