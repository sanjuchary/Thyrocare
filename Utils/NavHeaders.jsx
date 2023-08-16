/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../Constants/colors';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export const CustomDashboardHeader = ({navigation}) => (
  <LinearGradient
    style={styles.bgGreen}
    colors={[Colors.green_100, Colors.green]}>
    <View style={styles.NavTextLeft}>
      <TouchableOpacity style={styles.NavButtons}>
        <FontAwesome6
          style={styles.UserIcon}
          name="circle-user"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
      <View style={styles.NavTextContainer}>
        <Text style={styles.NavText}>Welcome ,</Text>
        <Text style={styles.NavText}>Hitesh Kumar</Text>
      </View>
    </View>
    <Text style={styles.NavTextRight}>ThyroCare</Text>
  </LinearGradient>
);

export const CustomOrdersHeader = ({navigation}) => (
  <LinearGradient
    style={styles.bgGreen}
    colors={[Colors.green_100, Colors.green]}>
    <View style={styles.OrderHeaderText}>
      <TouchableOpacity onPressIn={() => navigation.navigate('DashBoard')}>
        <MaterialIcons
          style={styles.BackIcon}
          name="arrow-back-ios"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
      <Text style={styles.OrderNavText}>Visit Orders</Text>
      <TouchableOpacity
        style={styles.NavButtons}
        onPressIn={() => navigation.navigate('DashBoard')}>
        <MaterialIcons
          style={styles.UserIcon}
          name="home"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

export const CustomOrderDetailHeader = ({navigation}) => (
  <LinearGradient
    style={styles.bgGreen}
    colors={[Colors.green_100, Colors.green]}>
    <View style={styles.OrderHeaderText}>
      <TouchableOpacity onPressIn={() => navigation.navigate('Orders')}>
        <MaterialIcons
          style={styles.BackIcon}
          name="arrow-back-ios"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
      <Text style={styles.OrderNavText}>Visit Orders</Text>
      <TouchableOpacity
        style={styles.NavButtons}
        onPressIn={() => navigation.navigate('DashBoard')}>
        <MaterialIcons
          style={styles.UserIcon}
          name="home"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

export const CustomArriveHeader = ({navigation}) => (
  <LinearGradient
    style={styles.bgGreen}
    colors={[Colors.green_100, Colors.green]}>
    <View style={styles.OrderHeaderText}>
      <TouchableOpacity onPressIn={() => navigation.navigate('OrderDetails')}>
        <MaterialIcons
          style={styles.BackIcon}
          name="arrow-back-ios"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
      <Text style={styles.OrderNavText}>Arrive</Text>
      <TouchableOpacity
        style={styles.NavButtons}
        onPressIn={() => navigation.navigate('DashBoard')}>
        <MaterialIcons
          style={styles.UserIcon}
          name="home"
          color={Colors.gray_600}
        />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  bgGreen: {
    width: '100%',
    // height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
  },
  NavTextLeft: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '3%',
    marginLeft: '4%',
    marginRight: '2%',
  },
  NavButtons: {
    marginRight: '7%',
    alignItems: 'center',
  },
  UserIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 35,
  },
  BackIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
  },
  NavTextContainer: {
    justifyContent: 'center',
  },
  NavText: {
    color: Colors.gray_600,
    fontSize: 15,
    fontWeight: '500',
  },
  NavTextRight: {
    color: Colors.gray_600,
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: Colors.black,
    padding: '3%',
    paddingLeft: '7%',
    marginLeft: '3%',
  },
  OrderHeaderText: {
    width: '100%',
    marginVertical: '4%',
    marginHorizontal: '4%',
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderNavText: {
    fontSize: 25,
    fontWeight: '500',
    color: Colors.dark,
  },
});
