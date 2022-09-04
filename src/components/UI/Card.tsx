import { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
    IoIosStarHalf,
    IoIosStarOutline,
    IoIosStar,
    IoIosHeartEmpty,
    IoIosHeart,
} from "react-icons/io";

interface Props {
    image: {
        src: string;
        alt: string;
    };
    className?: string;
    hasStars?: boolean;
    prePrice?: string;
    afterPrice?: string;
    price: number;
    title: string;
    location?: string;
    author?: {
        image: {
            src: string;
            alt: string;
        };
        name: string;
    };
    hasHeart?: boolean;
}

const Card = (props: Props) => {
    const [isWished, setIsWished] = useState(false);

    const wishHandler = (event: React.MouseEvent) => {
        event.preventDefault();

        setIsWished((prevState) => !prevState);
    };

    return (
        <div className={`card ${props.className ?? ""}`}>
            <Link to={"#"} className="image_holder position-relative">
                <img
                    src={props.image.src}
                    className="card-img-top"
                    alt={props.image.alt}
                />
                {props.hasHeart && (
                    <div
                        className="position-absolute heart_holder"
                        onClick={wishHandler}
                    >
                        {isWished ? (
                            <IoIosHeart size={"1.5rem"} />
                        ) : (
                            <IoIosHeartEmpty size={"1.5rem"} />
                        )}
                    </div>
                )}
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
                        {props.title}
                    </Link>
                    {props.location && (
                        <p className="location-text">{props.location}</p>
                    )}
                </div>

                <div className="price_holder">
                    {props.prePrice && <span className="pre_price">From:</span>}
                    <span className="price">{props.price} AZN</span>
                    {props.afterPrice && (
                        <span className="after_price">/night</span>
                    )}
                </div>

                {props.author && (
                    <div className="author_info">
                        <Link to={"#"} className="author_pp">
                            <img
                                src={props.author.image.src}
                                alt={props.author.image.alt}
                            />
                        </Link>
                        <Link to={"#"} className="author_name">
                            {props.author.name}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;