import { Link } from "react-router-dom";

interface Props {
    imageSrc: string;
    name: string;
    rating: number;
    barberId:string;
}

const BarberSlide = (props: Props) => {
    return (
        <div className="barber_slide">
            <Link to={`/barbers/${props.barberId}`} className="image_container">
                <img src={props.imageSrc} alt="barber profile" />
            </Link>
            <div>
                <Link to={`/barbers/${props.barberId}`} className="barber_name">
                    {props.name}
                </Link>
                <p>Rating: {props.rating}</p>
            </div>
        </div>
    );
};

export default BarberSlide;
