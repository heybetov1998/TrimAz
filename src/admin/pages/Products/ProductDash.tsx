import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SquareImage from "../../../components/UI/Images/SquareImage";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getProducts } from "../../../redux/features/productsSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const columns = [
    {
        name: "Image",
        selector: (row: any) => (
            <SquareImage className="datatable-image" img={row.image.name} />
        ),
        sortable: false,
    },
    {
        name: "Title",
        selector: (row: any) => row.title,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row: any) => row.price,
        sortable: true,
    },
];

const ProductDash = () => {
    const { products, loading } = useSelector(
        (state: RootState) => state.products
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Products" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                <DataTable columns={columns} data={products} pagination />
            </div>
        </>
    );
};

export default ProductDash;
