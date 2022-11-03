import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SquareOld from "../../../components/UI/Images/SquareOld";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import {
    getProducts,
    getSellerProducts,
} from "../../../redux/features/productsSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const submitHandler = (id: any) => {
    fetch(`https://localhost:7231/api/Products?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;",
        },
        body: JSON.stringify(id),
    }).then((response) => response.json());
};

const columns = [
    {
        name: "Image",
        selector: (row: any) => (
            <SquareOld className="datatable-image" img={row.image.name} />
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
    {
        name: "Seller",
        selector: (row: any) => (
            <div>
                {row.seller.firstName} {row.seller.lastName}
            </div>
        ),
        sortable: true,
    },
    {
        name: "Actions",
        selector: (row: any) => (
            <>
                <Link to={`${row.id}/update`} className="btn btn-primary me-1">
                    Update
                </Link>
                <form
                    className="d-inline-block"
                    onSubmit={(e: any) => {
                        e.preventDefault();
                        return submitHandler(row.id);
                    }}
                >
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </>
        ),
        sortable: false,
    },
];

const logged_user = JSON.parse(localStorage.getItem("logged_user") || "{}");

const ProductDash = () => {
    const { products, loading } = useSelector(
        (state: RootState) => state.products
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (
            logged_user.roleNames.includes("Seller") &&
            !logged_user.roleNames.includes("Admin")
        ) {
            dispatch(getSellerProducts(logged_user.id));
        } else {
            dispatch(getProducts());
        }
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
                {loading && <Loader />}
                {!loading && (
                    <DataTable columns={columns} data={products} pagination />
                )}
            </div>
        </>
    );
};

export default ProductDash;
