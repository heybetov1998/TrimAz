type PropsType = {
    text: string;
    className?: string;
};

const SubmitButton = (props: PropsType) => (
    <button type="submit" className={`submit_button ${props.className ?? ""}`}>
        {props.text}
    </button>
);

export default SubmitButton;
