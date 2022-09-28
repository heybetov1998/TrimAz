type PropsType = {
    type?: string;
    placeholder?: string;
    className?: string;
    id?: string;
    value?: string | number;
    onChange?: any;
};

const ContactInput = (props: PropsType) => (
    <input
        id={props.id ?? ""}
        className={`contact_input ${props.className ?? ""}`}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
        defaultValue={props.value ?? ""}
        onChange={props.onChange}
    />
);

export default ContactInput;
