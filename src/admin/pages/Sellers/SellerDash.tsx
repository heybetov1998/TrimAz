import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SquareImage from "../../../components/UI/Images/SquareImage";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getSellers } from "../../../redux/features/sellersSlice";
import { AppDispatch, RootState } from "../../../redux/store";

import "../../assets/css/AdminLayout.css";

const columns = [
    {
        name: "Avatar",
        selector: (row: any) => (
            <SquareImage className="datatable-image" img={row.avatar} />
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
                <Link to={`${row.id}/delete`} className="btn btn-danger">
                    Delete
                </Link>
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
