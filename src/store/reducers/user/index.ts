import {IUser} from "../../../models/IUser";
import {UserAction, UserActionEnum, UserState} from "./types";

const initialState: UserState = {
  user: {
    id: '',
    username: '',
    password: '',
    contacts: [],
  } as IUser,
  loading: false,
  error: ''
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
  switch (action.type) {

    case UserActionEnum.SET_USER:
      return {...state, user: action.payload}

    case UserActionEnum.UPDATE_USER_DATA:
      return {...state, loading: false,  user: action.payload}

    case UserActionEnum.ADD_CONTACT:
      return {...state, user: {...state.user, contacts: [...state.user.contacts, action.payload]}}


    // case UserActionType.FETCH_CONTACTS:
    //   return {...state, loading: true}
    //
    // case UserActionType.FETCH_CONTACTS_SUCCESS:
    //   return {...state, loading: false, user: {...state.user, contacts: action.payload }}
    //
    // case UserActionType.FETCH_CONTACTS_ERROR:
    //   return {...state, loading: false, error: action.payload}
    //
    // case UserActionType.USER_ADD_CONTACT:
    //   return {...state, loading: false, user: {...state.user,  contacts: [...state.user.contacts, action.payload ]} }
    // case UserActionType.USER_DELETE_CONTACT:
    //   return {...state }

    default:
      return state
  }
}
