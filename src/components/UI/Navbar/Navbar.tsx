import React from 'react';
import MyButton from '../button/MyButton';
import './Navbar.css'
import {UserAction, UserActionType} from "../../../types/user";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

const Navbar = () => {
  const dispatch:Dispatch<UserAction> = useDispatch()

  const logout = () => {
    console.log('click')
    dispatch({type: UserActionType.USER_LOGOUT, payload: false})
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
    </div>
  );
};

export default Navbar;
