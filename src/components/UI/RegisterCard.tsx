import SubmitButton from "./Buttons/SubmitButton";
import CardFrame from "./CardFrame";
import InputBlock from "./Inputs/InputBlock";
import SectionHeader from "./section/SectionHeader";
import { useFormik } from "formik";

const validate = (values: any) => {
    const errors = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    };

    if (!values.firstName) errors.firstName = "Required";
    else if (values.firstName.length > 50)
        errors.firstName = "Must be 50 characters or less";

    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 100)
        errors.lastName = "Must be 100 characters or less";

    if (!values.email) errors.email = "Required";
    else if (values.email.length > 100)
        errors.email = "Must be 100 characters or less";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address";

    if (!values.userName) errors.userName = "Required";
    else if (values.userName.length < 6)
        errors.userName = "Must be 6 characters or more";
    else if (values.userName.length > 50)
        errors.userName = "Must be 50 characters or less";

    console.log(errors);
    return errors;
};

const RegisterCard = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: "",
            confirmPassword: "",
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
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
                    inputValue={formik.values.firstName}
                />
                <InputBlock
                    name="Lastname"
                    inputId="lastName"
                    onChange={formik.handleChange}
                    inputValue={formik.values.lastName}
                />
                <InputBlock
                    name="Email"
                    inputId="email"
                    inputType="email"
                    onChange={formik.handleChange}
                    inputValue={formik.values.email}
                />
                <InputBlock
                    name="Username"
                    inputId="userName"
                    onChange={formik.handleChange}
                    inputValue={formik.values.userName}
                />
                <InputBlock
                    name="Password"
                    inputId="password"
                    inputType="password"
                    onChange={formik.handleChange}
                    inputValue={formik.values.password}
                />
                <InputBlock
                    name="Confirm Password"
                    inputId="confirmPassword"
                    inputType="password"
                    onChange={formik.handleChange}
                    inputValue={formik.values.confirmPassword}
                />
                <SubmitButton text="Submit" className="py-2" />
            </form>
        </CardFrame>
    );
};

export default RegisterCard;
