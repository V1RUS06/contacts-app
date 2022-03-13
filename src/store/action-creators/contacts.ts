import {Dispatch} from "redux";
import {UserAction, UserActionType} from "../../types/user";
import axios from "axios";


export const fetchContacts = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionType.FETCH_CONTACTS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({type: UserActionType.FETCH_CONTACTS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({type: UserActionType.FETCH_CONTACTS_ERROR, payload: 'Произошла ошибка при загрузке контактов'})
      console.log(e)
    }
  }
}
