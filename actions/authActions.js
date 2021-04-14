import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_USERS,
  USER_LOADING,
  GET_USER_DETAIL,
} from './types'

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/Confirm'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Login - Get User Token
export const loginUser = (userData, history) => (dispatch) => {
  dispatch(setUserLoading())
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      // Save to localStorage
      const { token } = res.data
      // Set token to ls
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  }
}

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}

// Get userDetail
export const getUserDetail = (id) => (dispatch) => {
  dispatch(setUserLoading())
  axios
    .get(`/api/users/admin/${id}`)
    .then((res) =>
      dispatch({
        type: GET_USER_DETAIL,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Get updateUser
export const updateUser = (userData, history) => (dispatch) => {
  dispatch(setUserLoading())
  axios
    .post(`/api/users/admin/updateUser`, userData)
    .then((res) => {
      dispatch(getUsers())
      alert('user updated successfully!')
      history.push('/admin/users')
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// Get all USERS
export const getUsers = () => (dispatch) => {
  dispatch(setUserLoading())
  axios
    .get('/api/users/all')
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    )
}

// USER loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  }
}
