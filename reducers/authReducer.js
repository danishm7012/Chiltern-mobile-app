import isEmpty from '../validation/is-empty'

import {
  GET_USERS,
  SET_CURRENT_USER,
  USER_LOADING,
  GET_USER_DETAIL,
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  users: null,
  userDetail: {},
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      }
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case GET_USER_DETAIL:
      return {
        ...state,
        userDetail: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
