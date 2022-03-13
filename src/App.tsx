import React, {useEffect} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";
import {Provider, useDispatch} from "react-redux";
import {store} from "./store";
import {UserAction, UserActionType} from "./types/user";
import {Dispatch} from "redux";

function App() {
  // const dispatch:Dispatch<UserAction> = useDispatch()
  //
  // useEffect(() => {
  //   try {
  //     if (localStorage.getItem('auth')){
  //       dispatch({type: UserActionType.USER_LOGIN_SUCCESS, payload: true})
  //     }
  //   } catch (e) {
  //     console.log(`Ошибка получения ключа пользователя ${e}`)
  //   }
  // }, []);

  return (
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
