type PropsType = {
    type?: string;
    placeholder?: string;
    className?: string;
    id?: string;
};

const ContactInput = (props: PropsType) => (
    <input
        id={props.id ?? ""}
        className={`contact_input ${props.className ?? ""}`}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
    />
);

export default ContactInput;
