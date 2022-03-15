import React, { useState} from 'react';
import ContactCard from "../cards/ContactCard";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyButton from "../UI/button/MyButton";
import Modal from "../UI/Modal/Modal";
import ContactForm from "../UI/ContactForm/ContactForm";
import {useActions} from "../../hooks/useActions";
import EditForm from "../UI/EditForm";
import {IUserContact} from "../../models/IUser";


const ContactList = () => {
  const {user} = useTypedSelector(state => state.user)
  const [modal, setModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
  const [editContact, setEditContact] = useState<null | IUserContact>(null)
  const {deleteContact, deleteUserContact} = useActions()


  const remove = (id: string | number | undefined) => {
    const newContactList = user.contacts.filter(contact => contact.id !== id)
    deleteContact(newContactList)
    deleteUserContact({...user, contacts: newContactList})
  }
  const edit = (id: string ) => {
    const editContact = user.contacts.find(contact => contact.id === id)

    if(editContact){
      setEditContact(editContact)
      setEditModal(true)
    }
  }

  return (
    <div className="contacts__container">
      <div className="contacts__btn">
        <MyButton  onClick={() => setModal(true)}>
          Добавить контакт
        </MyButton>
      </div>

      <Modal visible={modal} setVisible={setModal}>
        <ContactForm setVisible={setModal}/>
      </Modal>

      <Modal visible={editModal} setVisible={setEditModal}>
        <EditForm setVisible={setEditModal} editContact={editContact}/>
      </Modal>

      <div>
        <input type="text" placeholder="Поиск по имени" className="input"/>
      </div>

      <h1 className="title">
        Список контактов
      </h1>

      <TransitionGroup>
        {user.contacts?.map(user =>
          <CSSTransition
            key={user.id}
            timeout={500}
            classNames="post"
          >
          <ContactCard key={user.id} name={user.name} phone={user.phone} remove={()  => remove(user.id)} edit={()  => edit(user.id)} />
          </CSSTransition>

        )}
      </TransitionGroup>
    </div>
  );
};

export default ContactList;
