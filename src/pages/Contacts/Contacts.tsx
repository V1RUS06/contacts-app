import React, {useEffect} from 'react';
import './Contacts.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Loader} from "../../components/UI/Loader/Loader";
import Navbar from "../../components/UI/Navbar/Navbar";
import ContactList from "../../components/ContactList/ContactList";

const Contacts = () => {
  const { loading } = useTypedSelector(state => state.user)
  const {fetchContacts} = useActions()

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div>
      <Navbar />
      {loading
      ? <Loader />
      : <ContactList />
      }
    </div>
  )};

export default Contacts;
