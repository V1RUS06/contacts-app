import React, {useState} from 'react';
import MyButton from "../button/MyButton";
import './ContactForm.css'
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {UserAction, UserActionType, UserContacts} from "../../../types/user";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const ContactForm = () => {
  const [contact, setContact] = useState({id: '', phone: '', name: ''})

  const dispatch:Dispatch<UserAction> = useDispatch()
  const {contacts} = useTypedSelector(state => state.user.user)

  const addNewPost = (e: any) => {
    e.preventDefault();
    const data: UserContacts[] = [
      ...contacts, {
      id: Date.now(),
      phone: e.target[1].value,
      name: e.target[0].value
    }]
    console.log('CONTACTS', contacts)
    dispatch({type: UserActionType.USER_ADD_CONTACT, payload: data})
  }

  return (
    <form onSubmit={addNewPost}>
      <input
        value={contact.name}
        onChange={e => setContact({...contact, name: e.target.value})}
        type="text"
        placeholder="Имя"
        className="form__input"
      />
      <input
        value={contact.phone}
        onChange={e => setContact({...contact, phone: e.target.value})}
        type="text"
        placeholder="Номер телефона"
        className="form__input"
      />
      <MyButton>Создать пост</MyButton>
    </form>
  );
};

export default ContactForm;
