import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import { ValidSchema, initialValues } from "../helper";
import { Button } from "../Button/Button";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export const ContactForm = () => {
  const [filledName, setFilledName] = useState(false);
  const [filledNumber, setFilledNumber] = useState(false);
  const dispatch = useDispatch();
  const idName = useId();
  const idNumber = useId();

  const handleNameChange = (evt) => {
    const target = evt.currentTarget;
    target.name.value ? setFilledName(true) : setFilledName(false);
    target.number.value ? setFilledNumber(true) : setFilledNumber(false);
  };

  const handleSubmit = (initialValues, actions) => {
    const { name, number } = initialValues;
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} onChange={handleNameChange}>
          <div className={css.fieldWrapper}>
            <label className={filledName ? css.inpFilled : ""} htmlFor={idName}>
              Name:
            </label>
            <Field name="name" type="text" id={idName} required />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label
              className={filledNumber ? css.inpFilled : ""}
              htmlFor={idNumber}
            >
              Number:
            </label>
            <Field name="number" type="tel" id={idNumber} required />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <Button>Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
