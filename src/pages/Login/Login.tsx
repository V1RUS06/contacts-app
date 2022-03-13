import React from 'react';
import  './Login.css'
import MyButton from "../../components/UI/button/MyButton";
import {useDispatch} from "react-redux";
import {UserAction, UserActionType} from "../../types/user";
import { Dispatch } from 'redux';

const Login = () => {
  const dispatch: Dispatch<UserAction> = useDispatch()

  const login = (event: any) => {
    event.preventDefault();
    try {
      if (event.target[0].value.length && event.target[1].value.length){
        dispatch({type: UserActionType.USER_LOGIN_SUCCESS, payload: true})
        localStorage.setItem('auth', 'true')
      }
    } catch (e) {
      dispatch({type: UserActionType.USER_LOGIN_ERROR, payload: `Ошибка при вводе данных пользователя ${e}` })
    }
  }

  return (
    <div className="login__container">
      <h1 className="title">Введите логин и пароль</h1>
      <form onSubmit={login}>
        <input className="login__input" type="text" placeholder="Введите логин"/>
        <input className="login__input"  type="password" placeholder="Введите пароль"/>
        <div className="btn__container">
          <MyButton>Войти</MyButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
