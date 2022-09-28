import ContactInput from "./ContactInput";

type PropsType = {
    name?: string;
    inputId?: string;
    inputType?: string;
    inputValue?: string | number;
    onChange?: any;
};

const InputBlock = (props: PropsType) => (
    <div className="input_block">
        {props.name && (
            <label htmlFor={props.inputId ?? ""}>{props.name}</label>
        )}
        <ContactInput
            id={props.inputId ?? ""}
            type={props.inputType ?? "text"}
            value={props.inputValue ?? ""}
            onChange={props.onChange}
        />
    </div>
);

export default InputBlock;
