import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import {UserActionCreators} from "../user/action-creators";

export const AuthActionCreators = {
  setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: payload}),
  setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: payload}),

  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true))

      const response = await axios.get<IUser[]>('http://localhost:3001/users')
      const mockUser = response.data.find(user => user.username === username && user.password === password)

      if (mockUser) {
        localStorage.setItem('auth', 'true')
        localStorage.setItem('username', mockUser.username)
        localStorage.setItem('userId', JSON.stringify(mockUser.id))
        dispatch(AuthActionCreators.setIsAuth(true))
        dispatch(UserActionCreators.setUser(mockUser))
      } else {
        dispatch(AuthActionCreators.setError('Некорректный логин или пароль'))
      }
      dispatch(AuthActionCreators.setIsLoading(false))
    } catch (e) {
      dispatch(AuthActionCreators.setError('Ошибка при логине!'))
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
    dispatch(UserActionCreators.setUser({} as IUser))
    dispatch(AuthActionCreators.setIsAuth(false))
  },
  updateUserData: (id: string | null) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get<IUser[]>(`http://localhost:3001/users?id=${id}`)
      dispatch(UserActionCreators.updateUser(response.data[0]))
    } catch (e) {
      console.log('Ошибка при обновлении пользователя', e)
    }
  }
}
