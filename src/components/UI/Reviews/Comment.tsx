import { Link } from "react-router-dom";
import CardFrame from "../CardFrame";

type PropsType = {
    user: {
        id: string | number;
        name: string;
        givenRating: number;
        image?: {
            src?: string;
            alt?: string;
        };
    };
};

const Comment = (props: PropsType) => (
    <li>
        <CardFrame>
            <Link className="" to={`/users/${props.user.id}`}>
                <img
                    src={
                        props.user.image?.src
                            ? require(props.user.image.src)
                            : require("../../../assets/images/profile-picture.png")
                    }
                    alt={props.user.image?.alt ?? "Profile image"}
                />
            </Link>
        </CardFrame>
    </li>
);

export default Comment;
