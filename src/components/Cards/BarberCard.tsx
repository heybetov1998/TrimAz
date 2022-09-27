import { BarberLessDataState } from "../../redux/features/barbershopDetailsSlice";
import CardFrame from "../UI/CardFrame";
import Stars from "../UI/Stars";

type PropsType = {
    barber: BarberLessDataState;
};

const BarberCard = (props: PropsType) => {
    return (
        <CardFrame className="barber_card d-flex">
            <div className="profile_image">
                <img
                    src={`https://localhost:7231/img/${props.barber.imageName}`}
                    alt={props.barber.imageName}
                />
            </div>
            <div className="info">
                <div className="name">{props.barber.firstName} {props.barber.lastName}</div>
                <Stars edit={false} value={props.barber.starRating} />
            </div>
        </CardFrame>
    );
};

export default BarberCard;
