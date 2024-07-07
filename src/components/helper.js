import * as Yup from "yup";

export const ValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(50, "Too long number!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too short password!")
    .max(50, "Too long password!")
    .required("Required"),
});

export const initialValues = { name: "", number: "" };
