import CardFrame from "../CardFrame";
import SearchButton from "../Buttons/SearchButton";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

type PropsType = {
    currentPage: string;
};

const FilterSearch = (props: PropsType) => {
    const [inputValue, setInputValue] = useState(null);

    const changeValue = (ev: any) => {
        ev.preventDefault();
        setInputValue(ev.target.value);
    };

    return (
        <CardFrame title="Search">
            {/* <form action=""> */}
            <div className="filter_search position-relative">
                <input
                    onChange={changeValue}
                    className="search_input w-100"
                    placeholder="Search..."
                />
                <Link
                    to={`/${props.currentPage}?search=${inputValue}`}
                    className="search_button text-white"
                >
                    <BiSearch size={"1.2rem"} />
                </Link>
                {/* <SearchButton /> */}
            </div>
            {/* </form> */}
        </CardFrame>
    );
};

export default FilterSearch;
