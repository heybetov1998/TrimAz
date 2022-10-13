import { Link } from "react-router-dom";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { getBarbershops } from "../../../redux/features/barbershopsSlice";
import Loader from "../../../components/UI/Loaders/Loader";

import "../../assets/css/AdminLayout.css";
import SquareOld from "../../../components/UI/Images/SquareOld";

const submitHandler = (id: any) => {
    fetch(`https://localhost:7231/api/Barbershops?id=${id}`, {
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
    { name: "Name", selector: (row: any) => row.name, sortable: true },
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

const BarbershopDash = () => {
    const { barbershops, loading } = useSelector(
        (state: RootState) => state.barbershops
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbershops());
    }, [dispatch]);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Barbershops" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                {loading && <Loader />}
                {!loading && (
                    <DataTable
                        columns={columns}
                        data={barbershops}
                        pagination
                    />
                )}
            </div>
        </>
    );
};

export default BarbershopDash;
