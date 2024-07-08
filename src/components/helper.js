import * as Yup from "yup";

export const ValidSchemaContact = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(7, "Too short, min 7 digits!")
    .max(12, "Too long number!")
    .required("Required"),
});

export const ValidSchemaLogin = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short, min 6 symbols!")
    .max(15, "Too long password!")
    .required("Password required!"),
});

export const ValidSchemaRegister = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short, min 6 symbols!")
    .max(15, "Too long password!")
    .required("Password required!"),
});

export const initialValues = { name: "", number: "" };
