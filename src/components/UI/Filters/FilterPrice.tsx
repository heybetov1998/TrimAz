import { useState } from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../Buttons/SubmitButton";
import CardFrame from "../CardFrame";
import PriceInput from "../Inputs/PriceInput";

type PropsType = {
    currentPage: string;
};

const FilterPrice = (props: PropsType) => {
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    const changeMinValue = (ev: any) => {
        ev.preventDefault();
        setMinPrice(ev.target.value);
    };

    const changeMaxValue = (ev: any) => {
        ev.preventDefault();
        setMaxPrice(ev.target.value);
    };

    return (
        <CardFrame title={"Filter Price"}>
            <PriceInput
                id="minPrice"
                name="Min Price"
                onChange={changeMinValue}
            />
            <PriceInput
                id="maxPrice"
                name="Max Price"
                onChange={changeMaxValue}
            />
            {minPrice &&
                maxPrice &&
                +maxPrice >= +minPrice &&
                +minPrice >= 0 &&
                +maxPrice >= 0 && (
                    <Link
                        to={`/${
                            props.currentPage
                        }?minPrice=${+minPrice}&maxPrice=${+maxPrice}`}
                        className="submit_button text-white d-flex justify-content-center align-items-center"
                    >
                        Search
                    </Link>
                )}
            {(!minPrice ||
                !maxPrice ||
                +minPrice < 0 ||
                +maxPrice < 0 ||
                +maxPrice < +minPrice) && (
                <SubmitButton
                    type="button"
                    text="Search"
                    isDisabled={true}
                    className="search_price"
                />
            )}
        </CardFrame>
    );
};

export default FilterPrice;
