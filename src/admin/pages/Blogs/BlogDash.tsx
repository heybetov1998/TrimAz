import { Link } from "react-router-dom";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import SquareImage from "../../../components/UI/Images/SquareImage";

import "../../assets/css/AdminLayout.css";
import { getBlogs } from "../../../redux/features/blogsSlice";

const columns = [
    {
        name: "Image",
        selector: (row: any) => (
            <SquareImage className="datatable-image" img={row.image.name} />
        ),
        sortable: false,
    },
    { name: "Title", selector: (row: any) => row.title, sortable: true },
    { name: "Author", selector: (row: any) => row.firstName, sortable: true },
];

const BlogDash = () => {
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    return (
        <>
            <div>
                <SectionPartName className="my-4" text="Blogs" />
                <Link to="create" className="btn btn-primary mb-5">
                    Create new
                </Link>
            </div>
            <div>
                <DataTable columns={columns} data={blogs} pagination />
            </div>
        </>
    );
};

export default BlogDash;
