import React, {useState} from 'react';
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
  const [searchValue, setSearchValue] = useState<string>('')


  const remove = (id: string | number | undefined) => {
    const newContactList = user.contacts.filter(contact => contact.id !== id)
    deleteContact(newContactList)
    deleteUserContact({...user, contacts: newContactList})
  }
  const edit = (id: string) => {
    const editContact = user.contacts.find(contact => contact.id === id)

    if (editContact) {
      setEditContact(editContact)
      setEditModal(true)
    }
  }

  const searchList = user.contacts?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="contacts__container">
      <div className="contacts__btn">
        <MyButton onClick={() => setModal(true)}>
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
        <input
          type="text"
          placeholder="Поиск по имени"
          className="input"
          onChange={e => setSearchValue(e.target.value)}/>
      </div>

      <h1 className="title">
        Список контактов
      </h1>
      {searchList?.length ?
        <TransitionGroup>
          {searchList?.map(user =>
            <CSSTransition
              key={user.id}
              timeout={500}
              classNames="post"
            >
              <ContactCard key={user.id} name={user.name} phone={user.phone} remove={() => remove(user.id)}
                           edit={() => edit(user.id)}/>
            </CSSTransition>
          )

          }
        </TransitionGroup>
        : <div style={{height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>Контакта с таким именем не существует!</h1>
        </div>
      }
    </div>
  );
};

export default ContactList;
