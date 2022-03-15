import {IUser, IUserContact} from "../../../models/IUser";
import {
  AddContactAction,
  DeleteContactAction,
  EditContactAction,
  SetUserAction,
  UpdateUserDataAction,
  UserActionEnum
} from "./types";
import axios from "axios";


export const UserActionCreators = {
  setUser: (user: IUser): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
  updateUser: (user: IUser): UpdateUserDataAction => ({type: UserActionEnum.UPDATE_USER_DATA, payload: user}),
  addContact: (contact : IUserContact): AddContactAction => ({type: UserActionEnum.ADD_CONTACT, payload: contact}),
  deleteContact: (contacts: IUserContact[]): DeleteContactAction => ({type: UserActionEnum.DELETE_CONTACT, payload: contacts}),
  editUserContact: (contact: IUserContact): EditContactAction => ({type: UserActionEnum.EDIT_CONTACT, payload: contact}),


  changeContacts: (user : IUser) => async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${user.id}`, user)
    } catch (e) {
      console.log('Ошибка при изменении контакта',e)
    }
  },
  addUserContacts: (user : IUser) => async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${user.id}`, user)
    } catch (e) {
      console.log('Ошибка при добавлении контакта',e)
    }
  },
  deleteUserContact: (user : IUser) => async () => {
    try {
      const response = await axios.put(`http://localhost:3001/users/${user.id}`, user)
    } catch (e) {
      console.log('Ошибка при удалении контакта',e)

    }
  },

}
