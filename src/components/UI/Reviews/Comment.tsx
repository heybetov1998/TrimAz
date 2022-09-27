import { Link } from "react-router-dom";
import { ReviewState } from "../../../redux/features/barberDetailsSlice";
import { convertDate } from "../Author/AuthorInfo";
import Stars from "../Stars";

type PropsType = {
    review: ReviewState;
};

const Comment = (props: PropsType) => (
    <li className="comment">
        <div className="comment_author d-flex">
            <Link
                className="profile_image"
                to={`/users/${props.review.userId}`}
            >
                <img
                    src={`https://localhost:7231/img/${props.review.userAvatar}`}
                    alt={props.review.userAvatar}
                />
            </Link>
            <div className="info">
                <Link className="name" to={`/users/${props.review.userId}`}>
                    {props.review.userFirstName} {props.review.userLastName}
                </Link>
                <p className="date">{convertDate(props.review.createdDate)}</p>
                <Stars edit={false} value={props.review.givenRating} />
            </div>
        </div>
        <div className="comment_text">{props.review.comment}</div>
    </li>
);

export default Comment;
