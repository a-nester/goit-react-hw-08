import { useDispatch, useSelector } from "react-redux"
import ContactList from "../../components/ContactList/ContactList"
import { selectContacts } from "../../redux/selectors"
import ContactForm from "../../components/ContactForm/ContactForm"
import { addContact, fetchContacts } from "../../redux/contactsOps"
import { useEffect } from "react"

export const ContactsPage = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();
    const createContact = () => {
        dispatch(addContact())
    }

    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
    
    return <div>
        <ContactForm submit={createContact} />
        {contacts && <ContactList contacts={contacts} />}
    </div>
}

export default ContactsPage