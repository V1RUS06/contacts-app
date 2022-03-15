import React, {FC, useEffect, useState} from 'react';
import MyButton from "../button/MyButton";
import {IUserContact} from "../../../models/IUser";
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface Props {
  setVisible: (arg: boolean) => void,
  editContact: null| IUserContact
}

const EditForm: FC<Props> = ({setVisible, editContact}) => {
  const [contact, setContact] = useState({ phone: '', name: ''})
  const {editUserContact, changeContacts} = useActions();
  const {user} = useTypedSelector(state => state.user)

  useEffect(() => {
    if (editContact){
      setContact({phone: editContact.phone, name: editContact.name})
    }
  }, [editContact])




  const onEditClick = (e: any) => {
    e.preventDefault();
    const newContact = {
      id: editContact?.id || '',
      phone: contact.phone,
      name: contact.name
    }

    const changedContacts = user.contacts.map(contact => {
      if (contact.id === editContact?.id) {
        return newContact
      }
      return contact
    })
    editUserContact(newContact)
    setContact({ phone: '', name: ''})
    changeContacts({...user, contacts: changedContacts})

  }

  return (
    <form onSubmit={onEditClick}>
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
        Изменить контакт
      </MyButton>
    </form>
  );
};

export default EditForm;
