import { ReviewsState } from "../../../redux/features/barberDetailsSlice";
import CardFrame from "../CardFrame";
import Comment from "./Comment";

type PropsType = {
    reviews?: ReviewsState;
};

const Comments = (props: PropsType) => (
    <CardFrame>
        <ul className="comments">
            {props.reviews?.map((review) => (
                <Comment key={review.id} review={review} />
            ))}
        </ul>
    </CardFrame>
);

export default Comments;
