import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/UI/Loaders/Loader";
import { getFeedbacks } from "../../../redux/features/feedbacksSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const columns = [
    {
        name: "Full name",
        selector: (row: any) => row.fullName,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row: any) => row.email,
        sortable: true,
    },
    { name: "Message", selector: (row: any) => row.message, sortable: true },
];

const FeedbackDash = () => {
    const { feedbacks, loading } = useSelector(
        (state: RootState) => state.feedbacks
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getFeedbacks());
    }, [dispatch]);

    return (
        <>
            <div className="mt-4">
                {loading && <Loader />}
                {!loading && (
                    <DataTable columns={columns} data={feedbacks} pagination />
                )}
            </div>
        </>
    );
};

export default FeedbackDash;
