import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

type PropsType = {
    edit: boolean;
    value: number;
    isHalf?: boolean;
    onChange?: (newValue: number) => void;
};

const Stars = (props: PropsType) => (
    <ReactStars
        isHalf={props.isHalf ?? true}
        size={24}
        emptyIcon={<IoIosStarOutline />}
        halfIcon={<IoIosStarHalf />}
        fullIcon={<IoIosStar />}
        activeColor="#e4911a"
        color="#cccccc"
        edit={props.edit}
        value={props.value}
        onChange={props.onChange ?? null}
    />
);

export default Stars;
