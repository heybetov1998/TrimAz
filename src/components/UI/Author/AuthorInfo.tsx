import { Link } from "react-router-dom";

export type UserGetState = {
    firstName: string;
    lastName: string;
    id: string;
    image: {
        name: string;
        alt: string;
    };
};

type PropsType = {
    author: UserGetState;
    createdDate?: string;
    className?: string;
};

export const convertDate = (enteredDate: string | undefined) => {
    const str: string | number | Date = enteredDate!;
    const date = new Date(str);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const year = date.getFullYear();
    const day = date.getDate();
    const month = months[date.getMonth()];

    const dateStr = `${day} ${month} ${year}`;

    return dateStr;
};

const AuthorInfo = (props: PropsType) => {
    const createdDate = convertDate(props.createdDate);

    return (
        <div className={`author_info ${props.className ?? ""}`}>
            <Link to={`/users/${props.author.id}`} className="author_pp">
                <img
                    src={`https://localhost:7231/img/${props.author.image.name}`}
                    alt={props.author.image.alt}
                />
            </Link>
            <div className="d-flex align-items-center">
                <Link to={`/users/${props.author.id}`} className="author_name">
                    {props.author.firstName} {props.author.lastName}
                </Link>
                {props.createdDate && (
                    <span className="dateHolder">{createdDate}</span>
                )}
            </div>
        </div>
    );
};

export default AuthorInfo;
