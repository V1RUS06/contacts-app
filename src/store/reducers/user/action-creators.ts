import {IUser, IUserContact} from "../../../models/IUser";
import {AddContactAction, DeleteContactAction, SetUserAction, UpdateUserDataAction, UserActionEnum} from "./types";


export const UserActionCreators = {
  setUser: (user: IUser): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
  updateUser: (user: IUser): UpdateUserDataAction => ({type: UserActionEnum.UPDATE_USER_DATA, payload: user}),
  addContact: (contact : IUserContact): AddContactAction => ({type: UserActionEnum.ADD_CONTACT, payload: contact}),
  deleteContact: (contacts: IUserContact[]): DeleteContactAction => ({type: UserActionEnum.DELETE_CONTACT, payload: contacts}),

}
