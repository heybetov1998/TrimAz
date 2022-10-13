import SectionPartName from "../../../components/UI/section/SectionPartName";
import { useNavigate } from "react-router-dom";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import PickLocation from "../../../components/PickLocation";
import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputError from "../../../components/UI/Inputs/InputError";
import Loader from "../../../components/UI/Loaders/Loader";

const BarbershopCreate = () => {
    const navigate = useNavigate();

    const location = useSelector(
        (state: any) => state.location.location.defaultLocation
    );

    const formik = useFormik({
        initialValues: {
            name: "",
            images: [],
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
        }),
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("latitude", location.lat);
            formData.append("longtitude", location.lng);
            values.images.forEach((image) => {
                formData.append("images", image);
            });

            fetch(`https://localhost:7231/api/Barbershops`, {
                method: "POST",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then(() => {
                    navigate("/admin/Barbershops");
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
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <InputError text={formik.errors.name} />
                    ) : null}

                    <InputBlock
                        name="Images"
                        accept="image/*"
                        inputId="images"
                        inputType="file"
                        onChange={(event: any) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            formik.setFieldValue("images", myFiles);
                        }}
                        onBlur={formik.handleBlur}
                        isMultiple={true}
                    />

                    <PickLocation />

                    <SubmitButton text="Submit" />
                    {formik.isSubmitting && <Loader />}
                </form>
            </CardFrame>
        </div>
    );
};

export default BarbershopCreate;
