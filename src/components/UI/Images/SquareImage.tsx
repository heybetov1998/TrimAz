type PropsType = {
    className?: string;
    img: string;
};

const SquareImage = (props: PropsType) => (
    <div className={`square_image ${props.className ?? ""}`}>
        <img src={`https://localhost:7231/img/${props.img}`} alt={props.img} />
    </div>
);

export default SquareImage;
