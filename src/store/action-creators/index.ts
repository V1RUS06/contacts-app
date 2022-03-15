import {AuthActionCreators} from "../reducers/auth/action-creators";
import {UserActionCreators} from "../reducers/user/action-creators";

export default {
  ...UserActionCreators,
  ...AuthActionCreators
}
