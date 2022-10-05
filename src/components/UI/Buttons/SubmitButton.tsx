type PropsType = {
    text: string;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    isDisabled?:boolean;
};

const SubmitButton = (props: PropsType) => (
    <button
        disabled={props.isDisabled ?? false}
        type={props.type ?? "submit"}
        className={`submit_button ${props.className ?? ""}`}
    >
        {props.text}
    </button>
);

export default SubmitButton;
