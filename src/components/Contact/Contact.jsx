import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { GrEdit } from "react-icons/gr";

export const Contact = ({ element: { id, name, number } }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = () => {
    setOpenDelete(true);
  };

  const handleEdit = () => {
    setOpenEdit(true);
  };

  return (
    <>
      <div className={css.item}>
        <div>
          <p>
            <FaUser /> {name}
          </p>
          <p>
            <FaPhoneAlt /> {number}
          </p>
        </div>
        <div>
          <button type="button" className={css.editButton} onClick={handleEdit}>
            <GrEdit />
          </button>
          {openEdit && (
            <EditModal
              active={openEdit}
              setActive={setOpenEdit}
              id={id}
              name={name}
              number={number}
            />
          )}
          <button type="button" className={css.button} onClick={handleDelete}>
            Delete
          </button>
          {openDelete && (
            <DeleteModal
              active={openDelete}
              setActive={setOpenDelete}
              id={id}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
