import React from "react";

type Props = {
    size?: number;
    children?: React.ReactNode;
};

const Column: React.FC<Props> = (props) => {
    return <div className={`col-md-${props.size ?? 12}`}>{props.children}</div>;
};

export default Column;
