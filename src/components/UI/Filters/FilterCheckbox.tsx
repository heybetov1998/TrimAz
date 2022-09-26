import CardFrame from "../CardFrame";
import Loader from "../Loaders/Loader";
import NotFoundMessage from "../Messages/NotFoundMessage";
import CategoryItem from "./CategoryItem";
import CategoryList from "./CategoryList";

type ItemType = {
    id: string | number;
    name: string;
};

type PropsType = {
    title: string;
    checkboxes: ItemType[];
    isLoading: boolean;
};

const FilterCheckbox = (props: PropsType) => {
    return (
        <CardFrame title={props.title}>
            <CategoryList>
                {props.isLoading && <Loader />}
                {!props.isLoading && props.checkboxes.length === 0 && (
                    <NotFoundMessage />
                )}
                {!props.isLoading &&
                    props.checkboxes.length > 0 &&
                    props.checkboxes.map((item) => (
                        <CategoryItem key={item.id} text={item.name} />
                    ))}
            </CategoryList>
        </CardFrame>
    );
};

export default FilterCheckbox;
