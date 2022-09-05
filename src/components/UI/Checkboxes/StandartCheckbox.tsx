import { useState } from "react";
import { BiCheck } from "react-icons/bi";

type PropsType = {
    text: string;
};

const StandartCheckbox = (props: PropsType) => {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => setIsChecked((prevState) => !prevState);

    return (
        <label>
            <input type="checkbox" onChange={checkHandler} />
            <span
                className={`standart_checkbox ${
                    isChecked ? "checkbox-active" : ""
                }`}
                aria-hidden="true"
            >
                {isChecked && <BiCheck size={"2rem"} />}
            </span>
            {props.text}
        </label>
    );
};

export default StandartCheckbox;
