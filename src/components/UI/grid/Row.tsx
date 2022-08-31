import React from "react";

type Props = {
    children?: React.ReactNode;
};

const Row: React.FC<Props> = (props) => {
    return <div className="row">{props.children}</div>;
};

export default Row;
