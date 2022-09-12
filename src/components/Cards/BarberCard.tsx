import { Link } from "react-router-dom";
import CardFrame from "../UI/CardFrame";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

type PropsType = {
    barber: {
        name: string;
        image?: {
            src?: any;
            alt?: string;
        };
        link?: string;
        rating: number;
    };
};

const BarberCard = (props: PropsType) => {
    return (
        <CardFrame className="barber_card d-flex">
            <Link className="profile_image" to={props.barber.link ?? "#"}>
                <img
                    src={
                        props.barber.image?.src ??
                        require("../../assets/images/profile-picture.png")
                    }
                    alt={props.barber.image?.alt ?? "Barber profile picture"}
                />
            </Link>
            <div className="info">
                <Link className="name" to={props.barber.link ?? "#"}>
                    {props.barber.name}
                </Link>
                <ReactStars
                    isHalf={true}
                    size={24}
                    emptyIcon={<IoIosStarOutline />}
                    halfIcon={<IoIosStarHalf />}
                    fullIcon={<IoIosStar />}
                    activeColor="#e4911a"
                    color="#cccccc"
                    edit={false}
                    value={props.barber.rating}
                />
            </div>
        </CardFrame>
    );
};

export default BarberCard;
