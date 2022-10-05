import { Link } from "react-router-dom";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import { getBarbershops } from "../../../redux/features/barbershopsSlice";
import SquareImage from "../../../components/UI/Images/SquareImage";

import "../../assets/css/AdminLayout.css";

const columns = [
    {
        name: "Image",
        selector: (row: any) => (
            <SquareImage className="datatable-image" img={row.image.name} />
        ),
        sortable: false,
    },
    { name: "Name", selector: (row: any) => row.name, sortable: true },
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
                <DataTable columns={columns} data={barbershops} pagination />
            </div>
        </>
    );
};

export default BarbershopDash;