import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RegisterNav from './RegisterStack';
import HomeNav from './HomeNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import {setToken} from '../redux/reducers/authReducers';
import {logout} from '../redux/actions/auth';
import {decode as base64Decode} from 'base-64';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const checkLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        const decodedToken = JSON.parse(base64Decode(token.split('.')[1]));
        const isValidToken = decodedToken.exp * 1000 < Date.now();

        if (!isValidToken) {
          dispatch(setToken({token: token, user: decodedToken}));
        } else {
          dispatch(logout());
        }
      }
    } catch (error) {
      console.error('Authentication check failed:', error);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  });

  const user = useSelector(state => state.auth.token);
  // return user ? <HomeNav /> : <RegisterNav />;
  return <HomeNav />;
};

export default MainNavigation;
