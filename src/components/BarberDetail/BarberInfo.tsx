import { BarberState } from "../../redux/features/barberDetailsSlice";
import CardFrame from "../UI/CardFrame";
import SquareImage from "../UI/Images/SquareImage";
import Loader from "../UI/Loaders/Loader";
import NotFoundMessage from "../UI/Messages/NotFoundMessage";
import Stars from "../UI/Stars";

type PropsType = {
    barber: BarberState;
    isLoading?: boolean;
};

const BarberInfo = (props: PropsType) => (
    <CardFrame className="barber_info">
        {props.isLoading && <Loader />}
        {!props.isLoading && !props.barber && <NotFoundMessage />}
        {!props.isLoading && props.barber && (
            <>
                <SquareImage img={props.barber.avatar} />
                <div>
                    <div>
                        <h2 className="name">
                            {props.barber.firstName} {props.barber.lastName}
                        </h2>
                        <div className="star_holder d-flex justify-content-center">
                            <Stars
                                edit={false}
                                value={props.barber.starRating}
                            />
                        </div>
                    </div>
                    {/* <div>
                        <SubmitButton
                            className="mt-3"
                            text="Reserve"
                            type="button"
                        />
                    </div> */}
                </div>
            </>
        )}
    </CardFrame>
);

export default BarberInfo;
