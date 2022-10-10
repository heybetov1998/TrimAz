import { useFormik } from "formik";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import * as Yup from "yup";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useEffect, useRef } from "react";
import { getProductUpdate } from "../../../redux/features/productUpdateSlice";
import Loader from "../../../components/UI/Loaders/Loader";

const initialValues = {
    id: 0,
    title: "",
    content: "",
    price: 0,
};

const validationSchema = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
    price: Yup.number().required(),
});

const ProductUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const initialState = useRef({
        id: id,
        title: "",
        content: "",
        price: 0,
    });

    const { product, loading } = useSelector(
        (state: RootState) => state.productUpdate
    );

    useEffect(() => {
        dispatch(getProductUpdate(id));
        initialState.current = {
            id: id,
            title: product.title,
            content: product.content,
            price: product.price,
        };
    }, [id, dispatch, product.title, product.content, product.price]);

    console.log(initialState.current);

    const formik = useFormik({
        initialValues: initialState?.current,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            fetch(`https://localhost:7231/api/Products?id=${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then(() => {
                    navigate("/admin/products");
                });
        },
    });

    return (
        <>
            <SectionPartName className="my-4" text="Update product" />
            <CardFrame>
                {loading && <Loader />}
                {!loading && (
                    <form onSubmit={formik.handleSubmit}>
                        <InputBlock
                            inputId="title"
                            name="Title"
                            inputValue={formik.values.title}
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
                                    overflow:"hidden"
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
                            inputId="price"
                            name="Price"
                            inputType="number"
                            inputValue={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <InputError text={formik.errors.price} />
                        ) : null}
                        <SubmitButton className="py-2" text="Submit" />
                    </form>
                )}
            </CardFrame>
        </>
    );
};

export default ProductUpdate;
