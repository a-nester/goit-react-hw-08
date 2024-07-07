import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import css from "./EditModal.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export const EditModal = ({ active, setActive, id, name, number }) => {
  const [filledName, setFilledName] = React.useState(false);
  const [filledNumber, setFilledNumber] = React.useState(false);
  const dispatch = useDispatch();
  const idName = React.useId();
  const idNumber = React.useId();

  const handleNameChange = (evt) => {
    const target = evt.currentTarget;
    target.name.value ? setFilledName(true) : setFilledName(false);
    target.number.value ? setFilledNumber(true) : setFilledNumber(false);
  };

  const handleEdit = (initialValues, actions) => {
    const { name, number } = initialValues;
    dispatch(editContact({ id, name, number }));
    setActive(false);
    actions.resetForm();
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <div>
      <Modal
        open={active}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              name: name,
              number: number,
            }}
            // validationSchema={ValidSchema}
            onSubmit={handleEdit}
          >
            <Form className={css.form} onChange={handleNameChange}>
              <p>Edit contact</p>
              <div className={css.fieldWrapper}>
                <label
                  className={filledName ? css.inpFilled : ""}
                  htmlFor={idName}
                >
                  Name:
                </label>
                <Field name="name" type="text" id={idName} required />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
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

              <button className={css.btn} type="submit">
                Edit contact
              </button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
