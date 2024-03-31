import axios from 'axios';

import {API_URL2} from '@env';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logoutFailure,
  logoutRequest,
  logoutSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from '../reducers/authReducers';

export const login = credentials => async dispatch => {
  try {
    dispatch(loginRequest());
    const response = await axios.post(`${API_URL2}/auth/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    await AsyncStorage.setItem('accessToken', response.data.token);
    dispatch(
      loginSuccess({
        username: response.data.userName,
        token: response.data.token,
      }),
    );
  } catch (err) {
    console.log(err);
    dispatch(loginFailure({error: err.response?.data}));
    ToastAndroid.show('Error', ToastAndroid.SHORT);
  }
};

export const logout = token => async dispatch => {
  try {
    dispatch(logoutRequest());
    const response = await axios.post(`${API_URL2}/auth/logout`, {
      token: token,
    });
    console.log(response);
    await AsyncStorage.removeItem('accessToken');
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure({error: `${err}: Try again`}));
    console.log(err);
  }
};

export const register = (credentials, navigation) => async dispatch => {
  try {
    dispatch(registerRequest());
    const response = await axios.post(`${API_URL2}/auth/signup`, {
      first_name: credentials.firstName,
      last_name: credentials.lastName,
      email: credentials.email,
      password: credentials.password,
      phone_ext: credentials.phoneExt,
      phone_number: credentials.phoneNumber,
      address: credentials.address,
    });
    ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
    // await AsyncStorage.setItem('accessToken', response.data.token);
    dispatch(registerSuccess());
    navigation.navigate('LogIn');
  } catch (err) {
    dispatch(registerFailure({error: err.response?.data}));
    ToastAndroid.show(err.response?.data.message, ToastAndroid.SHORT);
  }
};
