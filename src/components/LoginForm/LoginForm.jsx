import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './LoginForm.module.css';

export const LoginForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label htmlFor={emailId}>Email:</label>
          <Field name="email" id={emailId} />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor={passwordId}>Password:</label>
          <Field name="password" id={passwordId} type="password" />
        </div>
        <button className={css.btn} type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
