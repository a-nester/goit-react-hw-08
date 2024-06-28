import { Field, Form, Formik } from "formik"
import { useId } from "react"
import css from "./RegisterForm.module.css";

export const RegisterForm = ({submit}) => {
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()
    const handleSubmit = (values, actions) => {
        console.log(values);
        submit(values)
       actions.resetForm()
   }
    return <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}> 
            <label htmlFor={nameId}>Name:
            <Field name='name' id={ nameId} />
            </label>
            <label htmlFor={emailId}>Email:

            <Field name='email' id={ emailId} />
            </label>
            <label htmlFor={passwordId}>Password:

            <Field name='password' id={passwordId} type='password' />
            </label>
            <button type="submit">Register</button>
        </Form>
    </Formik>
}

export default RegisterForm