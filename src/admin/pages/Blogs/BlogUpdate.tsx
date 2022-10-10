import { useFormik } from "formik";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import * as Yup from "yup";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/UI/Loaders/Loader";
import { useEffect } from "react";

const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

const initialValues = {
    title: "",
    content: "",
    userId: loggedUser.id,
    images: [],
};

const validationSchema = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
});

const BlogUpdate = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getBlogUpdate(id));
        initialState.current = {
            title: product.title,
            content: product.content,
            price: product.price,
        };
    }, [id, dispatch, product.title, product.content, product.price]);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("content", values.content);
            formData.append("userId", values.userId);
            values.images.forEach((image) => {
                formData.append("images", image);
            });

            fetch(`https://localhost:7231/api/Blogs`, {
                method: "POST",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then(() => {
                    navigate("/admin/Blogs");
                });
        },
    });

    return (
        <>
            <SectionPartName className="my-4" text="Update blog" />
            <CardFrame>
                <form onSubmit={formik.handleSubmit}>
                    <InputBlock
                        inputId="title"
                        name="Title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <InputError text={formik.errors.title} />
                    ) : null}
                    <div className="input_block">
                        <label htmlFor="content">Content</label>
                        <textarea
                            style={{
                                minHeight: "10rem",
                                transition: "none",
                                backgroundColor: "#232323",
                                padding: 10,
                                border: "none",
                                color: "#ccc",
                                borderRadius: 20,
                            }}
                            className="d-block w-100"
                            id="content"
                            name="content"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            defaultValue={formik.values.content}
                        />
                    </div>
                    {formik.touched.content && formik.errors.content ? (
                        <InputError text={formik.errors.content} />
                    ) : null}
                    <InputBlock
                        inputId="images"
                        name="Images"
                        inputType="file"
                        onChange={(event: any) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            formik.setFieldValue("images", myFiles);
                        }}
                        onBlur={formik.handleBlur}
                        isMultiple={true}
                        accept="image/*"
                    />
                    <input
                        type="text"
                        className="d-none"
                        name="userId"
                        id="userId"
                        value={formik.values.userId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <SubmitButton className="py-2" text="Submit" />
                    {formik.isSubmitting && <Loader />}
                </form>
            </CardFrame>
        </>
    );
};

export default BlogUpdate;
