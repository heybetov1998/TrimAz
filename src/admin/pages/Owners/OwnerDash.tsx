import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SquareOld from "../../../components/UI/Images/SquareOld";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getOwners } from "../../../redux/features/ownersSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const submitHandler = (id: any) => {
    fetch(`https://localhost:7231/api/Owners?id=${id}`, {
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

const OwnerDash = () => {
    const { owners, loading } = useSelector(
        (state: RootState) => state.owners
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getOwners());
    }, [dispatch]);

    console.log(owners);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Owners" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                {loading && <Loader />}
                {!loading && (
                    <DataTable columns={columns} data={owners} pagination />
                )}
            </div>
        </>
    );
};

export default OwnerDash;
