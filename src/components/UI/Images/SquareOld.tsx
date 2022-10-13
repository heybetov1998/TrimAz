type PropsType = {
    className?: string;
    img: string;
};

const SquareOld = (props: PropsType) => (
    <div className={`old_square ${props.className ?? ""}`}>
        <img src={`https://localhost:7231/img/${props.img}`} alt={props.img} />
    </div>
);

export default SquareOld;
