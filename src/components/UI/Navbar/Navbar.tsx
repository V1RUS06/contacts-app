import React from 'react';
import MyButton from '../button/MyButton';
import './Navbar.css'
import {useActions} from "../../../hooks/useActions";

const Navbar = () => {

  const {logout} = useActions()

  const handleLogout = () => {
    logout()
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={handleLogout}>
        Выйти
      </MyButton>
    </div>
  );
};

export default Navbar;
