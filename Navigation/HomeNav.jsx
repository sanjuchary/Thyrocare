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
  CustomConfirmDetailsHeader,
  CustomDashboardHeader,
  CustomEditBeneficiaryHeader,
  CustomOrderDescriptionHeader,
  CustomOrderDetailHeader,
  CustomOrdersHeader,
  CustomScanPatientHeader,
} from '../Utils/NavHeaders';
import {
  ConfirmDetailsScreen,
  EditBeneficiaryScreen,
  OrderDescriptionScreen,
} from '../Screens/Orders';
import PatientVialsScreen from '../Screens/PatientVials/PatientVials';
// import {ScannerModal} from '../Modals';

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
        <Stack.Screen
          name="OrderDescription"
          component={OrderDescriptionScreen}
          options={{
            header: props => <CustomOrderDescriptionHeader {...props} />,
            tabBarVisible: false,
          }}
        />
        <Stack.Screen
          name="EditBeneficiary"
          component={EditBeneficiaryScreen}
          options={{
            header: props => <CustomEditBeneficiaryHeader {...props} />,
            tabBarVisible: false,
          }}
        />
        <Stack.Screen
          name="ConfirmDetails"
          component={ConfirmDetailsScreen}
          options={{
            header: props => <CustomConfirmDetailsHeader {...props} />,
            tabBarVisible: false,
          }}
        />
        <Stack.Screen
          name="PatientVial"
          component={PatientVialsScreen}
          options={{
            header: props => <CustomScanPatientHeader {...props} />,
            tabBarVisible: false,
          }}
        />
        {/* <Stack.Screen
          name="Modals"
          component={ScannerModal}
          options={{
            header: props => <CustomScanPatientHeader {...props} />,
            tabBarVisible: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;
