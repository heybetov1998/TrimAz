type PropsType = {
    type?: string;
    placeholder?: string;
    className?: string;
    id?: string;
    value?: string | number;
    onChange?: any;
    onBlur?: any;
    isDisabled?: boolean;
    accept?: string;
    isMultiple?: boolean;
};

const ContactInput = (props: PropsType) => (
    <input
        id={props.id ?? ""}
        className={`contact_input ${props.className ?? ""}`}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
        defaultValue={props.value ?? ""}
        onChange={props.onChange ?? null}
        onBlur={props.onBlur ?? null}
        disabled={props.isDisabled ?? false}
        accept={props.accept ?? "*"}
        multiple={props.isMultiple ?? false}
    />
);

export default ContactInput;
