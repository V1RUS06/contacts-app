import React, { useState} from 'react';
import ContactCard from "../cards/ContactCard";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MyButton from "../UI/button/MyButton";
import Modal from "../UI/Modal/Modal";
import ContactForm from "../UI/ContactForm/ContactForm";
import {useActions} from "../../hooks/useActions";


const ContactList = () => {
  const {user} = useTypedSelector(state => state.auth)
  const [modal, setModal] = useState<boolean>(false)
  const {deleteContact} = useActions()


  const remove = (id: string | number | undefined) => {
    // setContacts(contacts?.filter(item => item.id !== id))
    deleteContact(id)
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
          <ContactCard key={user.id} name={user.name} phone={user.phone} onClick={()  => remove(user.id)} />
          </CSSTransition>

        )}
      </TransitionGroup>
    </div>
  );
};

export default ContactList;
