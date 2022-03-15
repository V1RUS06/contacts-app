export enum UserActionType {
  USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS",
  USER_LOGIN_ERROR = "USER_LOGIN_ERROR",
  USER_LOGOUT = "USER_LOGOUT",
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  FETCH_CONTACTS_ERROR = "FETCH_CONTACTS_ERROR",
  USER_ADD_CONTACT = "USER_ADD_CONTACT",
  USER_DELETE_CONTACT = "USER_DELETE_CONTACT",

}
interface UserLoginSuccessAction {
  type: UserActionType.USER_LOGIN_SUCCESS,
  payload: boolean
}
interface UserLogoutAction {
  type: UserActionType.USER_LOGOUT,
  payload: boolean
}

interface UserLoginErrorAction {
  type: UserActionType.USER_LOGIN_ERROR,
  payload: string
}

interface FetchContactsAction {
  type: UserActionType.FETCH_CONTACTS,
}
interface FetchContactsSuccessAction {
  type: UserActionType.FETCH_CONTACTS_SUCCESS,
  payload: UserContacts[]
}
interface FetchContactsErrorAction {
  type: UserActionType.FETCH_CONTACTS_ERROR,
  payload: string
}

interface UserAddContactAction {
  type: UserActionType.USER_ADD_CONTACT,
  payload: UserContacts
}
interface UserDeleteContactAction {
  type: UserActionType.USER_DELETE_CONTACT
}

export interface UserState {
  user: Profile;
  loading: boolean;
  error: null | string;
}

interface Profile {
  isAuth: boolean;
  email: string;
  contacts: UserContacts[] | []
}
export interface UserContacts {
  id?: number
  phone: string | number,
  name: string,
}

export type UserAction = UserLoginSuccessAction | UserDeleteContactAction | UserAddContactAction | UserLoginErrorAction | FetchContactsSuccessAction | UserLogoutAction | FetchContactsErrorAction | FetchContactsAction
