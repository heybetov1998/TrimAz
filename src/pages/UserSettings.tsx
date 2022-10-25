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

const UserSettings = () => {
    const loggedUser = JSON.parse(localStorage.getItem("logged_user") || "{}");

    const initialValues = {
        userName: loggedUser.userName,
        email: loggedUser.email,
        // avatar: [],
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Field is required")
            .max(100, "Must be 100 or less characters")
            .email("Invalid email address"),
        userName: Yup.string()
            .required("Field is required")
            .min(6, "Must be 6 or more characters")
            .max(50, "Must be 50 or less characters"),
        // avatar: Yup.array().min(1, "select at least 1 file"),
    });

    //FORM
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // let data = new FormData();
            // values.avatar.forEach((photo, index) => {
            //     data.append(`photo${index}`, values.avatar[index]);
            // });

            console.log(values);
            fetch(`https://localhost:7231/api/Users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        },
    });

    return (
        <section id="user_settings">
            <div className="container">
                <SectionHeader text="User Settings" />
                {isObjectEmpty(loggedUser) && <NotFoundMessage />}
                {!isObjectEmpty(loggedUser) && (
                    <Row>
                        <Column md={4} lg={4} xl={3}>
                            <CardFrame className="management_bar">
                                <SquareImage img={loggedUser.avatar} />
                                <h4 className="name mb-0">
                                    {loggedUser.firstName} {loggedUser.lastName}
                                </h4>
                            </CardFrame>
                        </Column>
                        <Column md={8} lg={8} xl={9}>
                            <form onSubmit={formik.handleSubmit}>
                                <CardFrame title="Personal Information">
                                    <Row>
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
                                            {/* <InputBlock
                                                inputId="avatar"
                                                inputType="file"
                                                accept="image/*"
                                                name="Change avatar"
                                                onChange={(event: any) => {
                                                    const files =
                                                        event.target.files;
                                                    let myFiles =
                                                        Array.from(files);
                                                    formik.setFieldValue(
                                                        "avatar",
                                                        myFiles
                                                    );
                                                }}
                                                // onChange={(event: any) => {
                                                //     formik.setFieldValue(
                                                //         "avatar",
                                                //         event.target.files[0]
                                                //     );
                                                // }}
                                            /> */}
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
