import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import css from "./LoginForm.module.css";
import { ValidSchemaLogin } from "../helper";
import { NavLink } from "react-router-dom";

export const LoginForm = ({ submit }) => {
  const [filledEmail, setFilledEmail] = useState(false);
  const [filledPass, setFilledPass] = useState(false);
  const emailId = useId();
  const passwordId = useId();

  const handleChange = (evt) => {
    const target = evt.currentTarget;
    target.email.value ? setFilledEmail(true) : setFilledEmail(false);
    target.password.value ? setFilledPass(true) : setFilledPass(false);
  };

  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={ValidSchemaLogin}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onChange={handleChange}>
        <h2>Login</h2>
        <div className={css.fieldWrapper}>
          <label className={filledEmail ? css.inpFilled : ""} htmlFor={emailId}>
            Email:
          </label>
          <Field name="email" id={emailId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.fieldWrapper}>
          <label
            className={filledPass ? css.inpFilled : ""}
            htmlFor={passwordId}
          >
            Password:
          </label>
          <Field name="password" id={passwordId} type="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Login
        </button>
        <p>
          or <NavLink to="/register">Register</NavLink>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
