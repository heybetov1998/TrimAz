import { useFormik } from "formik";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import * as Yup from "yup";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../components/UI/Loaders/Loader";
import { useEffect, useRef } from "react";
import { getBlogUpdate } from "../../../redux/features/blogUpdateSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import Row from "../../../components/UI/grid/Row";
import Column from "../../../components/UI/grid/Column";
import { getBlogDetails } from "../../../redux/features/blogDetailsSlice";
import SquareImage from "../../../components/UI/Images/SquareImage";

const initialValues = {
    title: "",
    content: "",
    images: [],
};

const validationSchema = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
});

const BlogUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const initialState = useRef({
        title: "",
        content: "",
        images: [],
    });

    const { blog, loading } = useSelector(
        (state: RootState) => state.blogUpdate
    );

    const { blog: blogDetail, loading: blogDetailLoading } = useSelector(
        (state: RootState) => state.blogDetails
    );

    console.log(blog);

    useEffect(() => {
        dispatch(getBlogUpdate(id));
        dispatch(getBlogDetails(id));
        initialState.current = {
            title: blog.title,
            content: blog.content,
            images: [],
        };
    }, [id, dispatch, blog.title, blog.content]);

    const formik = useFormik({
        initialValues: initialState?.current,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("content", values.content);
            values.images.forEach((image) => {
                formData.append("images", image);
            });

            console.log(
                formData.get("title"),
                formData.get("content"),
                formData.getAll("images")
            );
            fetch(`https://localhost:7231/api/Blogs/${id}`, {
                method: "PUT",
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
                {loading && <Loader />}
                {!loading && (
                    <>
                        <form onSubmit={formik.handleSubmit}>
                            <InputBlock
                                inputId="title"
                                name="Title"
                                onChange={formik.handleChange}
                                inputValue={formik.values.title}
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
                            <SubmitButton className="py-2" text="Submit" />
                            {formik.isSubmitting && <Loader />}
                        </form>
                        <br />
                        <Row>
                            {blogDetail.images.map((image) => (
                                <Column
                                    key={image.name}
                                    default={6}
                                    sm={4}
                                    md={2}
                                    lg={2}
                                    xl={2}
                                >
                                    <SquareImage img={image.name} />
                                </Column>
                            ))}
                        </Row>
                    </>
                )}
            </CardFrame>
        </>
    );
};

export default BlogUpdate;
