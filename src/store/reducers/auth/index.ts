import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser, IUserContacts} from "../../../models/IUser";

const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {
    id: '',
    username: '',
    password: '',
    contacts: [] as IUserContacts[],
  } as IUser
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {

  switch (action.type) {

    case AuthActionEnum.SET_AUTH:
      return {...state, isAuth: action.payload, isLoading: false}

    case AuthActionEnum.SET_USER:
      return {...state, user: action.payload}

    case AuthActionEnum.SET_ERROR:
      return {...state, error: action.payload, isLoading: false}

    case AuthActionEnum.SET_IS_LOADING:
      return {...state, isLoading: action.payload}

    case AuthActionEnum.UPDATE_USER_DATA:
      return {...state, isLoading: false,  user: action.payload}

    default:
      return state
  }
}
