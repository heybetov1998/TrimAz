type PropsType = {
    id: string;
    name: string;
    placeholder?: string;
    onChange?: (ev: any) => void;
};

const PriceInput = (props: PropsType) => {
    return (
        <div className="price_holder d-flex align-items-center">
            <label htmlFor={props.id}>{props.name}</label>
            <input
                min="0"
                type="number"
                id={props.id}
                name={props.name}
                placeholder={props.placeholder ?? "0 AZN"}
                className="price_input"
                onChange={props.onChange}
            />
        </div>
    );
};

export default PriceInput;
