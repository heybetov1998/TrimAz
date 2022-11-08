import { Link } from "react-router-dom";

type PropsType = {
    itemCount: number;
    pageName: string;
};

const ResultBar = (props: PropsType) => (
    <div className="resultsBar">
        <div className="leftBar d-flex align-items-center">
            <span>
                {props.itemCount !== 0 ? props.itemCount : "No"} items found
            </span>
            <Link to={`/${props.pageName}`} className="clear_filter">
                Clear filter
            </Link>
            <button></button>
        </div>
    </div>
);

export default ResultBar;
