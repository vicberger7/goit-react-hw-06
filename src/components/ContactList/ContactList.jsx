import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const onDeleteContact = (id) => dispatch(deleteContact(id));
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={filteredContacts} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
