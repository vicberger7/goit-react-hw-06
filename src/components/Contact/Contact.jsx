import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi2";

export default function Contact({ data: { id, name, number }, onDelete }) {
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
