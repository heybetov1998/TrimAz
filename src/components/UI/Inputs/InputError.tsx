type PropsType = {
    text?: any;
};

const InputError = (props: PropsType) => (
    <div
        className="text-danger"
        style={{ marginTop: "-1.5rem", marginBottom: "1.5rem" }}
    >
        {props.text ?? ""}
    </div>
);

export default InputError;
