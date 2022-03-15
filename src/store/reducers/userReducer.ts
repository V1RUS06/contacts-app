import {UserAction, UserActionType, UserState} from "../../types/user";

const initialState: UserState = {
  user: {
    isAuth: false,
    email: '',
    contacts: []
  },
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
  switch (action.type) {
    case UserActionType.USER_LOGIN_SUCCESS:
      return { ...state, user: { ...state.user, isAuth: action.payload}}

    case UserActionType.USER_LOGIN_ERROR:
      return {...state, error: action.payload}

    case UserActionType.USER_LOGOUT:
      return { ...state, user: { ...state.user, isAuth: action.payload}}

    case UserActionType.FETCH_CONTACTS:
      return {...state, loading: true}

    case UserActionType.FETCH_CONTACTS_SUCCESS:
      return {...state, loading: false, user: {...state.user, contacts: action.payload }}

    case UserActionType.FETCH_CONTACTS_ERROR:
      return {...state, loading: false, error: action.payload}

    case UserActionType.USER_ADD_CONTACT:
      return {...state, loading: false, user: {...state.user,  contacts: [...state.user.contacts, action.payload ]} }
    case UserActionType.USER_DELETE_CONTACT:
      return {...state }

    default:
      return state
  }
}
