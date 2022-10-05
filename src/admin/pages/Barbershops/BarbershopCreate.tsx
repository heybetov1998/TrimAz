import SectionPartName from "../../../components/UI/section/SectionPartName";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import Loader from "../../../components/UI/Loaders/Loader";

const initialValues = {
    name: "",
};

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Field is required")
        .max(150, "Must be 150 or less characters"),
});

const BarbershopCreate = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch(`https://localhost:7231/api/Barbershops`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    navigate("/admin/barbershops");
                    console.log(data);
                });
        },
    });

    return (
        <div>
            <SectionPartName className="my-4" text="Create new barbershop" />
            <CardFrame>
                <form onSubmit={formik.handleSubmit}>
                    <InputBlock
                        name="Name"
                        inputId="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        inputValue={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <InputError text={formik.errors.name} />
                    ) : null}

                    <SubmitButton text="Submit" />
                    {formik.isSubmitting && <Loader />}
                </form>
            </CardFrame>
        </div>
    );
};

export default BarbershopCreate;
