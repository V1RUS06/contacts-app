import {IUser} from "../../../models/IUser";


export interface UserState {
  user: IUser;
  loading: boolean;
  error: null | string;
}


export enum UserActionEnum {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  UPDATE_USER_DATA = "UPDATE_USER_DATA",
}


export interface SetUserAction {
  type: UserActionEnum.SET_USER;
  payload: IUser;
}

export interface UpdateUserDataAction {
  type: UserActionEnum.UPDATE_USER_DATA;
  payload: IUser;
}

export interface SetErrorAction {
  type: UserActionEnum.SET_ERROR;
  payload: string;
}




export type UserAction =
  SetUserAction |
  SetErrorAction |
  UpdateUserDataAction

