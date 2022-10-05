import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SquareImage from "../../../components/UI/Images/SquareImage";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getBarbers } from "../../../redux/features/barbersSlice";
import { AppDispatch, RootState } from "../../../redux/store";

import "../../assets/css/AdminLayout.css";

const columns = [
    {
        name: "Avatar",
        selector: (row: any) => (
            <SquareImage className="datatable-image" img={row.imageName} />
        ),
        sortable: false,
    },
    {
        name: "Firstname",
        selector: (row: any) => row.firstName,
        sortable: true,
    },
    { name: "Lastname", selector: (row: any) => row.lastName, sortable: true },
    { name: "Rating", selector: (row: any) => row.starRating, sortable: true },
];

const BarberDash = () => {
    const { barbers, loading } = useSelector(
        (state: RootState) => state.barbers
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBarbers());
    }, [dispatch]);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Barbers" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                <DataTable columns={columns} data={barbers} pagination />
            </div>
        </>
    );
};

export default BarberDash;
