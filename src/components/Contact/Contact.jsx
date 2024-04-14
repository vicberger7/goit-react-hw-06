import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi2";

// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";

export default function Contact({ id, name, number, onDelete }) {
  // const dispatch = useDispatch();
  // const onAddContact = dispatch(addContact);

  return (
    <div className={css.container}>
      <div className={css.textContainer}>
        <div className={css.iconContainer}>
          <HiPhone size={18} color="black" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.iconContainer}>
          <HiUser size={18} color="black" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
