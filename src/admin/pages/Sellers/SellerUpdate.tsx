import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import CardFrame from "../../../components/UI/CardFrame";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getSellerUpdateDetail } from "../../../redux/features/sellerUpdateDetailSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("Field is required")
        .max(50, "Must be 50 or less characters"),
    lastName: Yup.string()
        .required("Field is required")
        .max(100, "Must be 100 or less characters"),
});

const SellerUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const initialState = useRef({
        id: "",
        firstName: "",
        lastName: "",
    });

    const { seller, loading } = useSelector(
        (state: RootState) => state.sellerUpdateDetail
    );

    console.log(seller);

    useEffect(() => {
        dispatch(getSellerUpdateDetail(id));
        initialState.current = {
            id: seller.id,
            firstName: seller.firstName,
            lastName: seller.lastName,
        };
    }, [id, dispatch, seller.firstName, seller.lastName, seller.id]);

    const formik = useFormik({
        initialValues: initialState.current,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            fetch(`https://localhost:7231/api/Sellers?id=${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    navigate("/admin/sellers");
                });
        },
    });
    return (
        <>
            <SectionPartName className="my-4" text="Update Seller" />
            <CardFrame>
                {loading && <Loader />}
                {!loading && (
                    <form onSubmit={formik.handleSubmit}>
                        <InputBlock
                            inputId="firstName"
                            name="Firstname"
                            inputValue={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <InputError text={formik.errors.firstName} />
                        ) : null}
                        <InputBlock
                            inputId="lastName"
                            name="Lastname"
                            inputValue={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <InputError text={formik.errors.lastName} />
                        ) : null}
                        <SubmitButton text="Save changes" />
                    </form>
                )}
            </CardFrame>
        </>
    );
};

export default SellerUpdate;
