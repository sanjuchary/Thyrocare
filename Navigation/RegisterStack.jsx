import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgetPassword, LogInPage, RegisterPage} from '../Screens/Registration';

const Stack = createNativeStackNavigator();

const RegisterNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RegisterNav;
