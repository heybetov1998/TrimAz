import SectionPartName from "../../../components/UI/section/SectionPartName";
import { useNavigate, useParams } from "react-router-dom";
import CardFrame from "../../../components/UI/CardFrame";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputError from "../../../components/UI/Inputs/InputError";
import Loader from "../../../components/UI/Loaders/Loader";
import { AppDispatch, RootState } from "../../../redux/store";
import { getBarbershopDetails } from "../../../redux/features/barbershopDetailsSlice";
import Row from "../../../components/UI/grid/Row";
import Column from "../../../components/UI/grid/Column";
import SquareImage from "../../../components/UI/Images/SquareImage";

const BarbershopUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { barbershop, loading } = useSelector(
        (state: RootState) => state.barbershopDetails
    );

    const initialState = useRef({
        id: id,
        name: "",
        images: [],
    });

    useEffect(() => {
        dispatch(getBarbershopDetails(id));
        initialState.current = {
            id: id,
            name: barbershop.name,
            images: [],
        };
    }, [id, dispatch, barbershop.name]);

    console.log(initialState.current);

    const formik = useFormik({
        initialValues: initialState.current,
        validationSchema: Yup.object({
            name: Yup.string().required(),
        }),
        enableReinitialize: true,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("id", id!);
            formData.append("name", values.name);
            values.images.forEach((image) => {
                formData.append("images", image);
            });

            fetch(`https://localhost:7231/api/Barbershops`, {
                method: "PUT",
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
                {loading && <Loader />}
                {!loading && (
                    <>
                        <form onSubmit={formik.handleSubmit}>
                            <InputBlock
                                name="Name"
                                inputId="name"
                                inputValue={formik.values.name}
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

                            <SubmitButton text="Submit" />
                            {formik.isSubmitting && <Loader />}
                        </form>
                        <br />
                        <Row>
                            {barbershop.images.map((image) => (
                                <Column
                                    key={image}
                                    default={6}
                                    sm={4}
                                    md={2}
                                    lg={2}
                                    xl={2}
                                >
                                    <SquareImage img={image} />
                                </Column>
                            ))}
                        </Row>
                    </>
                )}
            </CardFrame>
        </div>
    );
};

export default BarbershopUpdate;
