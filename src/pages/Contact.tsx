import SubmitButton from "../components/UI/Buttons/SubmitButton";
import CardFrame from "../components/UI/CardFrame";
import Column from "../components/UI/grid/Column";
import Row from "../components/UI/grid/Row";
import ContactInput from "../components/UI/Inputs/ContactInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputError from "../components/UI/Inputs/InputError";

const initialValues = {
    fullName: "",
    email: "",
    message: "",
};

const validationSchema = Yup.object({
    fullName: Yup.string().required(),
    email: Yup.string().required().email(),
    message: Yup.string().required(),
});

const Contact = () => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("fullName", values.fullName);
            formData.append("email", values.email);
            formData.append("message", values.message);

            fetch(`https://localhost:7231/api/Feedbacks`, {
                method: "POST",
                headers: { Accept: "*/*" },
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                });
        },
    });

    return (
        <section id="contact">
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Column md={6} lg={6} xl={6}>
                            <div className="contact_information">
                                <h3>Send Feedback</h3>
                                <p>You can send us feedback by filling form</p>
                            </div>
                        </Column>
                        <Column md={6} lg={6} xl={6}>
                            <CardFrame title="Send a message">
                                <Row>
                                    <Column
                                        className="mb-3"
                                        sm={6}
                                        md={12}
                                        lg={6}
                                        xl={6}
                                    >
                                        <ContactInput
                                            id="fullName"
                                            type="text"
                                            placeholder="Full name*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.fullName &&
                                        formik.errors.fullName ? (
                                            <InputError
                                                text={formik.errors.fullName}
                                            />
                                        ) : null}
                                    </Column>
                                    <Column
                                        className="mb-3"
                                        sm={6}
                                        md={12}
                                        lg={6}
                                        xl={6}
                                    >
                                        <ContactInput
                                            id="email"
                                            type="email"
                                            placeholder="Email*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email &&
                                        formik.errors.email ? (
                                            <InputError
                                                text={formik.errors.email}
                                            />
                                        ) : null}
                                    </Column>
                                    <Column>
                                        <textarea
                                            id="message"
                                            className="message mb-3"
                                            placeholder="Message*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></textarea>
                                        {formik.touched.message &&
                                        formik.errors.message ? (
                                            <InputError
                                                text={formik.errors.message}
                                            />
                                        ) : null}
                                    </Column>
                                </Row>
                                <SubmitButton
                                    text="Send your message"
                                    className="curved_button"
                                />
                            </CardFrame>
                        </Column>
                    </Row>
                </form>
            </div>
        </section>
    );
};

export default Contact;
