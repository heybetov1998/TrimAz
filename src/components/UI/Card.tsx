import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from "react-icons/io";

interface Props {
    imageSrc: string;
    imageAlt: string;
    className?: string;
    hasStars?: boolean;
    prePrice?: string;
    afterPrice?: string;
}

const Card = (props: Props) => {
    return (
        <div className={`card ${props.className ?? ""}`}>
            <Link to={"#"} className="image_holder">
                <img
                    src={props.imageSrc}
                    className="card-img-top"
                    alt={props.imageAlt}
                />
            </Link>
            <div className="card-body">
                {props.hasStars && (
                    <ReactStars
                        isHalf={true}
                        size={24}
                        emptyIcon={<IoIosStarOutline />}
                        halfIcon={<IoIosStarHalf />}
                        fullIcon={<IoIosStar />}
                        activeColor="#e4911a"
                        color="#cccccc"
                        edit={false}
                        value={3.7}
                    />
                )}
                <div className="info_holder">
                    <Link to={"#"} className="card-title">
                        Card title
                    </Link>
                    <p className="location-text">Baku, Azerbaijan</p>
                </div>
                <div className="price_holder">
                    {props.prePrice && <span className="pre_price">From:</span>}
                    <span className="price">10 AZN</span>
                    {props.afterPrice && (
                        <span className="after_price">/night</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
