import React from "react";

type Props = {
    children?: React.ReactNode;
    className?: string;
};

const Row: React.FC<Props> = (props: Props) => {
    return (
        <div className={`row ${props.className ?? ""}`}>{props.children}</div>
    );
};

export default Row;
