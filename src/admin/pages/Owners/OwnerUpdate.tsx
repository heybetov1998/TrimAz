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
import { getOwnerUpdateDetail } from "../../../redux/features/ownerUpdateDetailSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("Field is required")
        .max(50, "Must be 50 or less characters"),
    lastName: Yup.string()
        .required("Field is required")
        .max(100, "Must be 100 or less characters"),
});

const OwnerUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const initialState = useRef({
        id: "",
        firstName: "",
        lastName: "",
        avatarImage: [],
    });

    const { owner, loading } = useSelector(
        (state: RootState) => state.ownerUpdateDetail
    );

    useEffect(() => {
        dispatch(getOwnerUpdateDetail(id));
        initialState.current = {
            id: owner.id,
            firstName: owner.firstName,
            lastName: owner.lastName,
            avatarImage: [],
        };
    }, [id, dispatch, owner.firstName, owner.lastName, owner.id]);

    const formik = useFormik({
        initialValues: initialState.current,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("id", id!);
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            if (values.avatarImage.length > 0) {
                values.avatarImage.forEach((image) => {
                    formData.append("avatarImage", image);
                });
            }

            console.log(
                formData.getAll("id"),
                formData.getAll("firstName"),
                formData.getAll("lastName"),
                formData.getAll("avatarImage")
            );

            fetch(`https://localhost:7231/api/Owners`, {
                method: "PUT",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    navigate("/admin");
                });
        },
    });
    return (
        <>
            <SectionPartName className="my-4" text="Update Owner" />
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

                        <InputBlock
                            inputId="avatarImage"
                            name="Profile Picture"
                            inputType="file"
                            onChange={(event: any) => {
                                const files = event.target.files;
                                let myFiles = Array.from(files);
                                formik.setFieldValue("avatarImage", myFiles);
                            }}
                            onBlur={formik.handleBlur}
                            isMultiple={false}
                            accept="image/*"
                        />
                        <SubmitButton text="Save changes" />
                    </form>
                )}
            </CardFrame>
        </>
    );
};

export default OwnerUpdate;
