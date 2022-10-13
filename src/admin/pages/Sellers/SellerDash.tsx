import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SquareOld from "../../../components/UI/Images/SquareOld";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getSellers } from "../../../redux/features/sellersSlice";
import { AppDispatch, RootState } from "../../../redux/store";

import "../../assets/css/AdminLayout.css";

const submitHandler = (id: any) => {
    fetch(`https://localhost:7231/api/Sellers?id=${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;",
        },
        body: JSON.stringify(id),
    }).then((response) => response.json());
};

const columns = [
    {
        name: "Avatar",
        selector: (row: any) => (
            <SquareOld className="datatable-image" img={row.avatar} />
        ),
        sortable: false,
    },
    {
        name: "Firstname",
        selector: (row: any) => row.firstName,
        sortable: true,
    },
    { name: "Lastname", selector: (row: any) => row.lastName, sortable: true },
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

const SellerDash = () => {
    const { sellers, loading } = useSelector(
        (state: RootState) => state.sellers
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getSellers());
    }, [dispatch]);

    console.log(sellers);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Sellers" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                {loading && <Loader />}
                {!loading && (
                    <DataTable columns={columns} data={sellers} pagination />
                )}
            </div>
        </>
    );
};

export default SellerDash;
