import SubmitButton from "./Buttons/SubmitButton";
import CardFrame from "./CardFrame";
import InputBlock from "./Inputs/InputBlock";
import SectionHeader from "./section/SectionHeader";
import { useFormik } from "formik";
import InputError from "./Inputs/InputError";
import * as Yup from "yup";
import Loader from "./Loaders/Loader";
import { useNavigate } from "react-router-dom";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
};

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required("Field is required")
        .max(50, "Must be 50 or less characters"),
    lastName: Yup.string()
        .required("Field is required")
        .max(100, "Must be 100 or less characters"),
    email: Yup.string()
        .required("Field is required")
        .max(100, "Must be 100 or less characters")
        .email("Invalid email address"),
    userName: Yup.string()
        .required("Field is required")
        .min(6, "Must be 6 or more characters")
        .max(50, "Must be 50 or less characters"),
    password: Yup.string()
        .required("Field is required")
        .min(6, "Must be 6 or more characters")
        .max(50, "Must be 50 or less characters")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
    confirmPassword: Yup.string()
        .required("Field is required")
        .oneOf(
            [Yup.ref("password"), null],
            'Must match "password" field value'
        ),
    // workStartTime: Yup.string().required("Field is required"),
    // workEndTime: Yup.string().required("Field is required"),
});

type PropsType = {
    actionName: string;
    navigateTo?: string;
};

const RegisterCard = (props: PropsType) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch(`https://localhost:7231/api/Auth/${props.actionName}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    navigate(props.navigateTo ?? "/");
                    console.log(data);
                });
        },
    });

    return (
        <CardFrame>
            <SectionHeader text="Register" />
            <form onSubmit={formik.handleSubmit}>
                <InputBlock
                    name="Firstname"
                    inputId="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <InputError text={formik.errors.firstName} />
                ) : null}

                <InputBlock
                    name="Lastname"
                    inputId="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <InputError text={formik.errors.lastName} />
                ) : null}

                <InputBlock
                    name="Email"
                    inputId="email"
                    inputType="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <InputError text={formik.errors.email} />
                ) : null}

                <InputBlock
                    name="Username"
                    inputId="userName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.userName}
                />
                {formik.touched.userName && formik.errors.userName ? (
                    <InputError text={formik.errors.userName} />
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

                <InputBlock
                    name="Confirm Password"
                    inputId="confirmPassword"
                    inputType="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    inputValue={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                    <InputError text={formik.errors.confirmPassword} />
                ) : null}

                {props.actionName === "RegisterBarber" && (
                    // <>
                    //     <div className="input_block">
                    //         <label htmlFor="workStartTime">Work Starts</label>
                    //         <select
                    //             id="workStartTime"
                    //             onBlur={formik.handleBlur}
                    //             onChange={formik.handleChange}
                    //             // value={formik.values.workStartTime}
                    //         >
                    //             {times.map((time) => (
                    //                 <option value={time.id}>
                    //                     {time.range}
                    //                 </option>
                    //             ))}
                    //         </select>

                    //         {/* {formik.errors.workStartTime ? (
                    //             <InputError
                    //                 text={formik.errors.workStartTime}
                    //             />
                    //         ) : null} */}
                    //     </div>
                    //     <div className="input_block">
                    //         <label htmlFor="workEndTime">Work Ends</label>
                    //         <select
                    //             id="workEndTime"
                    //             onBlur={formik.handleBlur}
                    //             onChange={formik.handleChange}
                    //             // value={formik.values.workEndTime}
                    //         >
                    //             {times.map((time) => (
                    //                 <option value={time.id}>
                    //                     {time.range}
                    //                 </option>
                    //             ))}
                    //         </select>
                    //     </div>
                    // </>
                    <></>
                )}

                <SubmitButton text="Submit" className="py-2" />
                {formik.isSubmitting && <Loader />}
            </form>
        </CardFrame>
    );
};

export default RegisterCard;
