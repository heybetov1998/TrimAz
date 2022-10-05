import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./Buttons/SubmitButton";
import CardFrame from "./CardFrame";
import InputBlock from "./Inputs/InputBlock";
import SectionHeader from "./section/SectionHeader";
import * as Yup from "yup";
import InputError from "./Inputs/InputError";
import Loader from "./Loaders/Loader";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getUserSettings } from "../../redux/features/userSettingsSlice";

const initialValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("Please enter email")
        .max(100, "Must be 100 or less characters")
        .email("Invalid email address"),
    password: Yup.string()
        .required("Please enter password")
        .min(6, "Must be 6 or more characters")
        .max(50, "Must be 50 or less characters"),
});

const LoginCard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, setErrors }) => {
            fetch(`https://localhost:7231/api/Auth/Login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.statusCode === 200) {
                        localStorage.setItem(
                            "logged_user",
                            JSON.stringify(data.user)
                        );
                        dispatch(getUserSettings(data.user.id));
                        navigate("/");
                    } else {
                        setSubmitting(false);
                        setErrors({
                            email: "Unable to login with the provided credentials",
                            password:
                                "Unable to login with the provided credentials",
                        });
                    }
                    console.log(data);
                });
        },
    });

    return (
        <CardFrame>
            <SectionHeader text="Login" />
            <form onSubmit={formik.handleSubmit}>
                <InputBlock
                    name="Email"
                    inputId="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <InputError text={formik.errors.email} />
                ) : null}

                <InputBlock
                    name="Password"
                    inputId="password"
                    inputType="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <InputError text={formik.errors.password} />
                ) : null}

                {/* <Link to={"/forgotPassword"} className="forgot_password">
                    Forgot Password?
                </Link> */}
                <SubmitButton text="Submit" className="py-2" />
                {formik.isSubmitting && <Loader />}
            </form>
        </CardFrame>
    );
};

export default LoginCard;
