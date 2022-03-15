import {IUser} from "../../../models/IUser";
import {SetUserAction, UpdateUserDataAction, UserActionEnum} from "./types";


export const UserActionCreators = {
  setUser: (user: IUser): SetUserAction => ({type: UserActionEnum.SET_USER, payload: user}),
  updateUser: (user: IUser): UpdateUserDataAction => ({type: UserActionEnum.UPDATE_USER_DATA, payload: user}),
}
