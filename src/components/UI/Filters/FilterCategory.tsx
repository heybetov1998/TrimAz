import CardFrame from "../CardFrame";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CategoryList";

const FilterCategory = () => {
    return (
        <CardFrame title="Categories">
            <CategoryList>
                <CategoryItem text="Saç qırxan"/>
                <CategoryItem text="Üz qırxan"/>
                <CategoryItem text="Saç ütüsü"/>
            </CategoryList>
        </CardFrame>
    );
};

export default FilterCategory;
