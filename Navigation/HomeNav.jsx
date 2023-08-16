/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ArrivedScreen,
  DashBoardScreen,
  OrderDetails,
  OrdersScreen,
} from '../Screens/Home';
import {
  CustomArriveHeader,
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
          options={{
            header: props => <CustomOrdersHeader {...props} />,
          }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{
            header: props => <CustomOrderDetailHeader {...props} />,
            tabBarVisible: false,
          }}
        />
        <Stack.Screen
          name="Arrive"
          component={ArrivedScreen}
          options={{
            header: props => <CustomArriveHeader {...props} />,
            tabBarVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;
