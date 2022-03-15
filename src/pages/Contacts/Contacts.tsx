import React from 'react';
import './Contacts.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Loader} from "../../components/UI/Loader/Loader";
import Navbar from "../../components/UI/Navbar/Navbar";
import ContactList from "../../components/ContactList/ContactList";

const Contacts = () => {
  const { loading } = useTypedSelector(state => state.user)

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
