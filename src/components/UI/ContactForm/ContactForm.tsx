import React, { useState} from 'react';
import MyButton from "../button/MyButton";
import './ContactForm.css'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface Props {
  setVisible: (arg: boolean) => void
}

const ContactForm: React.FC<Props> = ({setVisible}) => {
  const [contact, setContact] = useState({ phone: '', name: ''})

  const {user} = useTypedSelector(state => state.user)

  const {addContact, addUserContacts} = useActions()


  const addNewPost = (e: any) => {
    e.preventDefault();
    const contact: {id: string, phone: string, name: string} = {
      id: JSON.stringify(Date.now()),
      phone: e.target[1].value,
      name: e.target[0].value
    }
    addContact(contact)

    console.log('Contacts', user.contacts)
    setContact({ phone: '', name: ''})
    addUserContacts({...user, contacts: [...user.contacts, contact]})

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
      <MyButton
        onClick={() => {
          setVisible(false)
        }}>
        Создать контакт
      </MyButton>
    </form>
  );
};

export default ContactForm;
