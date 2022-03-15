import React, { useState} from 'react';
import MyButton from "../button/MyButton";
import './ContactForm.css'
import {useActions} from "../../../hooks/useActions";

interface Props {
  setVisible: (arg: boolean) => void
}

const ContactForm: React.FC<Props> = ({setVisible}) => {
  const [contact, setContact] = useState({id: '', phone: '', name: ''})

  const {} = useActions()


  const addNewPost = (e: any) => {
    e.preventDefault();
    const data: {phone: string, name: string} = {
      phone: e.target[1].value,
      name: e.target[0].value
    }
    console.log('input', data)
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
        Создать пост
      </MyButton>
    </form>
  );
};

export default ContactForm;
