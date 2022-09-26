import CardFrame from "../CardFrame";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CategoryList";

type ItemType = {
    id: string | number;
    name: string;
};

type PropsType = {
    title: string;
    checkboxes: ItemType[];
};

const FilterCheckbox = (props: PropsType) => {
    return (
        <CardFrame title={props.title}>
            <CategoryList>
                {props.checkboxes.map((item) => (
                    <CategoryItem key={item.id} text={item.name} />
                ))}
            </CategoryList>
        </CardFrame>
    );
};

export default FilterCheckbox;
