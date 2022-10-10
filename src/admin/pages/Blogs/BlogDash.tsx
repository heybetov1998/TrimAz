import { Link } from "react-router-dom";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect } from "react";
import SquareImage from "../../../components/UI/Images/SquareImage";
import { getBlogs } from "../../../redux/features/blogsSlice";

import "../../assets/css/AdminLayout.css";
import Loader from "../../../components/UI/Loaders/Loader";

const submitHandler = (id: any) => {
    fetch(`https://localhost:7231/api/Blogs?id=${id}`, {
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
            <SquareImage className="datatable-image" img={row.image.name} />
        ),
        sortable: false,
    },
    { name: "Title", selector: (row: any) => row.title, sortable: true },
    {
        name: "Author",
        selector: (row: any) => (
            <div>
                {row.author.firstName} {row.author.lastName}
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
                {loading && <Loader />}
                {!loading && (
                    <DataTable columns={columns} data={blogs} pagination />
                )}
            </div>
        </>
    );
};

export default BlogDash;
