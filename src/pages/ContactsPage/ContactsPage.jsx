import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectContacts } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
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
    <div>
      <ContactForm submit={createContact} />
      {contacts && <ContactList />}
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
