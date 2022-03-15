import * as ContactsActionCreator from './contacts'
import {AuthActionCreators} from "../reducers/auth/action-creators";

export default {
  ...ContactsActionCreator,
  ...AuthActionCreators
}
