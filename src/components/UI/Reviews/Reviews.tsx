import { BarberState } from "../../../redux/features/barberDetailsSlice";
import Comments from "./Comments";
import WriteReview from "./WriteReview";

type PropsType = {
    barber?: BarberState;
};

const Reviews = (props: PropsType) => (
    <div className="reviews">
        <WriteReview />
        <Comments reviews={props.barber?.reviews} />
    </div>
);

export default Reviews;
