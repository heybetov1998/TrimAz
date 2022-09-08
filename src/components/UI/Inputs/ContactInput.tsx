type PropsType = {
    type?: string;
    placeholder?: string;
    className?: string;
};

const ContactInput = (props: PropsType) => (
    <input
        className={`contact_input ${props.className ?? ""}`}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
    />
);

export default ContactInput;
