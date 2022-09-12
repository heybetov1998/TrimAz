import { Link } from "react-router-dom";

type PropsType = {
    user: {
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
        <Link to={"#"} />
    </li>
);

export default Comment;
