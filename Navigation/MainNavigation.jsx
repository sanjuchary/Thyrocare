import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RegisterNav from './RegisterStack';
import HomeNav from './HomeNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SET_TOKEN} from '../redux/reducers/userReducers';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      dispatch(SET_TOKEN(token));
    }
  };

  useEffect(() => {
    checkLoggedIn();
  });

  const user = useSelector(state => state.user.token);
  return user ? <HomeNav /> : <RegisterNav />;
};

export default MainNavigation;
