import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const contactsSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3).max(50),
  number: Yup.string().required("Number is required"),
});

const formInitialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>Name</label>
        <Field className={css.field} type="text" name="name" />
        <ErrorMessage className={css.errorMessage} component="p" name="name" />
        <label>Number</label>
        <Field className={css.field} type="text" name="number" />
        <ErrorMessage
          className={css.errorMessage}
          component="p"
          name="number"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
