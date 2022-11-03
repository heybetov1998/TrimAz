import SubmitButton from "../components/UI/Buttons/SubmitButton";
import CardFrame from "../components/UI/CardFrame";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import SquareImage from "../components/UI/Images/SquareImage";
import InputBlock from "../components/UI/Inputs/InputBlock";
import NotFoundMessage from "../components/UI/Messages/NotFoundMessage";
import { isObjectEmpty } from "../components/UI/Navbar/RightHeader";
import SectionHeader from "../components/UI/section/SectionHeader";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputError from "../components/UI/Inputs/InputError";
import { useState } from "react";

const UserSettings = () => {
    const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

    const [currentUser, setCurrentUser] = useState(loggedUser);

    const initialValues = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        userName: currentUser.userName,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
        avatarImage: [],
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
        phoneNumber: Yup.string()
            .test((val: any) => !isNaN(val))
            .nullable(),
    });

    //FORM
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            let formData = new FormData();

            formData.append("id", loggedUser.id);
            formData.append("firstName", values.firstName);
            formData.append("lastName", values.lastName);
            formData.append("phoneNumber", values.phoneNumber);

            if (values.avatarImage.length > 0) {
                values.avatarImage.forEach((image) => {
                    formData.append("avatarImage", image);
                });
            }

            console.log(
                formData.get("id"),
                formData.get("firstName"),
                formData.get("lastName"),
                formData.get("phoneNumber"),
                formData.getAll("avatarImage")
            );

            fetch(`https://localhost:7231/api/Users`, {
                method: "PUT",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    const localData = JSON.parse(
                        localStorage.getItem("logged_user") || "{}"
                    );
                    localData.firstName = data.firstName;
                    localData.lastName = data.lastName;
                    localData.phoneNumber = data.phoneNumber;
                    localData.avatar = data.avatar;

                    localStorage.setItem(
                        "logged_user",
                        JSON.stringify(localData)
                    );

                    setCurrentUser(localData);
                });
        },
    });

    return (
        <section id="user_settings">
            <div className="container">
                <SectionHeader text="User Settings" />
                {isObjectEmpty(currentUser) && <NotFoundMessage />}
                {!isObjectEmpty(currentUser) && (
                    <Row>
                        <Column md={4} lg={4} xl={3}>
                            <CardFrame className="management_bar">
                                <SquareImage img={currentUser.avatar} />
                                <h4 className="name mb-0">
                                    {currentUser.firstName}{" "}
                                    {currentUser.lastName}
                                </h4>
                            </CardFrame>
                        </Column>
                        <Column md={8} lg={8} xl={9}>
                            <form onSubmit={formik.handleSubmit}>
                                <CardFrame title="Personal Information">
                                    <Row>
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                inputId="firstName"
                                                name="Firstname"
                                                inputValue={
                                                    formik.values.firstName
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.firstName &&
                                            formik.errors.firstName ? (
                                                <InputError
                                                    text={
                                                        formik.errors.firstName
                                                    }
                                                />
                                            ) : null}
                                        </Column>
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                inputId="lastName"
                                                name="Lastname"
                                                inputValue={
                                                    formik.values.lastName
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.lastName &&
                                            formik.errors.lastName ? (
                                                <InputError
                                                    text={
                                                        formik.errors.lastName
                                                    }
                                                />
                                            ) : null}
                                        </Column>
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                inputId="userName"
                                                name="Username"
                                                inputValue={
                                                    formik.values.userName
                                                }
                                                isDisabled={true}
                                            />
                                        </Column>
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                inputId="email"
                                                name="Email"
                                                inputType="email"
                                                inputValue={formik.values.email}
                                                isDisabled={true}
                                            />
                                        </Column>
                                        {/* <Column lg={6} xl={6}>
                                        <InputBlock
                                            inputId="number"
                                            name="Phone Number"
                                            inputValue={"+994507662233"}
                                        />
                                    </Column> */}
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                inputId="avatarImage"
                                                name="Change Avatar"
                                                inputType="file"
                                                onChange={(event: any) => {
                                                    const files =
                                                        event.target.files;
                                                    let myFiles =
                                                        Array.from(files);
                                                    formik.setFieldValue(
                                                        "avatarImage",
                                                        myFiles
                                                    );
                                                }}
                                                onBlur={formik.handleBlur}
                                                isMultiple={false}
                                                accept="image/*"
                                            />
                                        </Column>
                                        <Column lg={6} xl={6}>
                                            <InputBlock
                                                name="Phone Number"
                                                inputId="phoneNumber"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                inputValue={
                                                    formik.values.phoneNumber
                                                }
                                            />
                                            {formik.touched.phoneNumber &&
                                            formik.errors.phoneNumber ? (
                                                <InputError
                                                    text={
                                                        formik.errors
                                                            .phoneNumber
                                                    }
                                                />
                                            ) : null}
                                        </Column>
                                    </Row>
                                </CardFrame>
                                {/* <CardFrame title="Change Password">
                                    <Row>
                                        <Column lg={6} xl={4}>
                                            <InputBlock
                                                name="Current Password"
                                                inputType="password"
                                                inputId="currentPassword"
                                            />
                                        </Column>
                                        <Column lg={6} xl={4}>
                                            <InputBlock
                                                name="New Password"
                                                inputType="password"
                                                inputId="newPassword"
                                            />
                                        </Column>
                                        <Column lg={6} xl={4}>
                                            <InputBlock
                                                name="Confirm Password"
                                                inputType="password"
                                                inputId="confirmPassword"
                                            />
                                        </Column>
                                    </Row>
                                </CardFrame> */}
                                <SubmitButton text="Save Changes" />
                            </form>
                        </Column>
                    </Row>
                )}
            </div>
        </section>
    );
};

export default UserSettings;
