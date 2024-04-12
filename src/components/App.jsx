import ContactList from "./ContactList/ContactList";
import initialContacts from "./../contacts.json";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filterSlice";

export default function App() {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filter.name);
 

  const [search, setSearch] = useState("");

  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
   
    dispatch(addContact(finalContact));
   
  };
};
  

  const onDeleteContact = (contactId) => {
   
    dispatch(deleteContact(contactId));
};
    
const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value))
  };
  

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onSearch={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
}

