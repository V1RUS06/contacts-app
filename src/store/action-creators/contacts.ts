import {Dispatch} from "redux";
import {UserAction, UserActionType, UserContacts} from "../../types/user";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users

export const fetchContacts = (id: string | null) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_CONTACTS })
      const response = await axios.get(`http://localhost:3001/users?id=${id}`)
      dispatch({type: UserActionType.FETCH_CONTACTS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({type: UserActionType.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при загрузке контактов'})
      console.log(e)
    }
  }
}

export const addContacts = (data: UserContacts) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post('http://localhost:3001/contacts', {...data})
      dispatch({type: UserActionType.USER_ADD_CONTACT, payload: response.data })
    } catch (e) {
      dispatch({type: UserActionType.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при загрузке контактов'})
      console.log(e)
    }
  }
}

export const deleteContact = (id: string | number | undefined) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
       await axios.delete(`http://localhost:3001/contacts/${id}`)
      dispatch({type: UserActionType.USER_DELETE_CONTACT})

    } catch (e) {
      dispatch({type: UserActionType.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при удалении контактов'})
      console.log(e)
    }
  }
}
