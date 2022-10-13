import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import { ServicesOption } from "../../../components/Home/Intro";
import SubmitButton from "../../../components/UI/Buttons/SubmitButton";
import CardFrame from "../../../components/UI/CardFrame";
import Column from "../../../components/UI/grid/Column";
import Row from "../../../components/UI/grid/Row";
import SquareImage from "../../../components/UI/Images/SquareImage";
import InputBlock from "../../../components/UI/Inputs/InputBlock";
import InputError from "../../../components/UI/Inputs/InputError";
import Loader from "../../../components/UI/Loaders/Loader";
import SectionPartName from "../../../components/UI/section/SectionPartName";
import { getBarbershops } from "../../../redux/features/barbershopsSlice";
import { getBarberUpdateDetail } from "../../../redux/features/barberUpdateDetailSlice";
import { AppDispatch, RootState } from "../../../redux/store";

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("Field is required")
        .max(50, "Must be 50 or less characters"),
    lastName: Yup.string()
        .required("Field is required")
        .max(100, "Must be 100 or less characters"),
});

const BarberUpdate = () => {
    const [selectedBarbershop,setSelectedBarbershop]=useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const initialState = useRef({
        id: id!,
        firstName: "",
        lastName: "",
        avatarImage: [],
        portfolioImages: [],
    });

    const { barber, loading } = useSelector(
        (state: RootState) => state.barberUpdateDetail
    );

    const { barbershops, loading: barbershopLoading } = useSelector(
        (state: RootState) => state.barbershops
    );

    const barbershopOptions: ServicesOption[] = barbershops.map((n) => ({
        value: n.id,
        label: n.name,
    }));

    useEffect(() => {
        dispatch(getBarberUpdateDetail(id));
        dispatch(getBarbershops());
        initialState.current = {
            id: id!,
            firstName: barber.firstName,
            lastName: barber.lastName,
            avatarImage: [],
            portfolioImages: [],
        };
    }, [id, dispatch, barber.firstName, barber.lastName, barber.id]);

    const formik = useFormik({
        initialValues: initialState.current,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("id", values.id);
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            if (values.avatarImage.length > 0) {
                values.avatarImage.forEach((image) => {
                    formData.append("avatarImage", image);
                });
            }
            values.portfolioImages.forEach((image) => {
                formData.append("portfolioImages", image);
            });

            console.log(
                formData.getAll("id"),
                formData.getAll("firstName"),
                formData.getAll("lastName"),
                formData.getAll("avatarImage"),
                formData.getAll("portfolioImages")
            );

            fetch(`https://localhost:7231/api/Barbers?id=${id}`, {
                method: "PUT",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then(() => {
                    navigate("/admin/barbers");
                });
        },
    });
    return (
        <>
            <SectionPartName className="my-4" text="Update Barber" />
            <CardFrame>
                {loading && <Loader />}
                {!loading && (
                    <>
                        <form onSubmit={formik.handleSubmit}>
                            <InputBlock
                                inputId="firstName"
                                name="Firstname"
                                inputValue={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                                <InputError text={formik.errors.firstName} />
                            ) : null}
                            <InputBlock
                                inputId="lastName"
                                name="Lastname"
                                inputValue={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                                <InputError text={formik.errors.lastName} />
                            ) : null}

                            <InputBlock
                                inputId="avatarImage"
                                name="Profile Picture"
                                inputType="file"
                                onChange={(event: any) => {
                                    const files = event.target.files;
                                    let myFiles = Array.from(files);
                                    formik.setFieldValue(
                                        "avatarImage",
                                        myFiles
                                    );
                                }}
                                onBlur={formik.handleBlur}
                                isMultiple={false}
                                accept="image/*"
                            />
                            <InputBlock
                                inputId="portfolioImages"
                                name="Portfolio images"
                                inputType="file"
                                onChange={(event: any) => {
                                    const files = event.target.files;
                                    let myFiles = Array.from(files);
                                    formik.setFieldValue(
                                        "portfolioImages",
                                        myFiles
                                    );
                                }}
                                onBlur={formik.handleBlur}
                                isMultiple={true}
                                accept="image/*"
                            />
                            <Select
                                name="barbershops"
                                options={!barbershopLoading ? barbershopOptions : []}
                                className="service_selection"
                                // onChange={option=>setSelectedBarbershop(option?.value)}
                            />
                            <SubmitButton text="Save changes" />
                        </form>
                        <br />
                        <Row>
                            {barber.images.map((image) => (
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

export default BarberUpdate;
