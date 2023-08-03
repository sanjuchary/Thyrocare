/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashBoardScreen, OrderDetails, OrdersScreen} from '../Screens/Home';
import {
  CustomDashboardHeader,
  CustomOrderDetailHeader,
  CustomOrdersHeader,
} from '../Utils/NavHeaders';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DashBoard"
          component={DashBoardScreen}
          options={{
            header: props => <CustomDashboardHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={OrdersScreen}
          //   options={{headerShown: false}}
          options={{
            header: props => <CustomOrdersHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          //   options={{headerShown: false}}
          options={{
            header: props => <CustomOrderDetailHeader {...props} />,
            tabBarVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;
