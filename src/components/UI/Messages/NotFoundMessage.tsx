type PropsType = {
    className?: string;
    text?: string;
};

const NotFoundMessage = (props: PropsType) => (
    <h2 className={`text-center text-white-50 ${props.className ?? ""}`}>
        {props.text ?? "Not Found"}
    </h2>
);

export default NotFoundMessage;
