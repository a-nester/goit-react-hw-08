import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

import { selectContacts } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const createContact = () => {
    dispatch(addContact());
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <ContactForm submit={createContact} />
      <div>
        <SearchBox />
        {contacts && <ContactList />}
      </div>
    </div>
  );
};

export default ContactsPage;
