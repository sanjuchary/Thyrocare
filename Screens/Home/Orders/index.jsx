import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../Constants/colors';
import {useNavigation} from '@react-navigation/native';
import {List} from '../PatientsArray';

const OrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={style.Container}>
      {List.map(item => (
        <TouchableOpacity
          style={style.Box}
          key={item.id}
          onPress={() => navigation.navigate('OrderDetails')}>
          <View style={style.BoxText}>
            <Text style={style.BoxHeaderText}>{item.patient_number}</Text>
            <Text style={style.BoxHeaderText}>{item.patient_token}</Text>
            <Text style={style.BodyText}>
              {item.date} , {item.from_to_time}
            </Text>
            <Text style={style.BodyText}>Status: {item.status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },
  Box: {
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    margin: '3%',
    borderRadius: 10,
    elevation: 8,
  },
  BoxText: {
    margin: '5%',
  },
  BoxHeaderText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.green_100,
    // marginBottom: '2%',
  },
  BodyText: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.gray_400,
  },
});

export default OrdersScreen;
