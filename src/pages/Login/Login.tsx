import React, {useState} from 'react';
import './Login.css'
import MyButton from "../../components/UI/button/MyButton";
import {useActions} from "../../hooks/useActions";

const Login = () => {
  const {login} = useActions()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e: any) => {
    e.preventDefault();
    login(username, password)
  }

  return (
    <div className="login__container">
      <h1 className="title">Введите логин и пароль</h1>
      <form onSubmit={submit}>
        <input className="login__input" type="text" placeholder="Введите логин" value={username}
               onChange={(e) => setUsername(e.target.value)}/>
        <input className="login__input" type="password" placeholder="Введите пароль" value={password}
               onChange={(e) => setPassword(e.target.value)}/>
        <div className="btn__container">
          <MyButton>Войти</MyButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
