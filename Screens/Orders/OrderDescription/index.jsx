import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {List} from '../../Home/PatientsArray';
import {Colors} from '../../../Constants/colors';

const OrderDescriptionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ScrollView>
        {List.map(item => (
          <TouchableOpacity style={styles.Box} key={item.id}>
            <View style={styles.BoxText}>
              <Text style={styles.BoxHeaderText}>{item.patient_name}</Text>
              <Text style={styles.AddressText}>{item.address}</Text>
              <Text style={styles.BodyText}>Fasting: {item.fasting}</Text>
              <Text style={styles.AddressText}>
                {item.date},{item.time}
              </Text>
              <View style={styles.OrderButton}>
                <Text style={styles.OrderButtonText}>{item.test}</Text>
              </View>
            </View>
            <View style={styles.BoxRightText}>
              <Text style={styles.AddressText}>PHARMEASY</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.ButtonsFlex}>
        <TouchableOpacity style={styles.ArrowIcon}>
          <MaterialIcons
            style={styles.CheckIcon}
            name="keyboard-arrow-up"
            color={Colors.dark}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate('EditBeneficiary')}>
          <Text style={styles.ButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // width: '100%',
    // height: '100%',
    backgroundColor: Colors.white,
    flex: 1,
  },
  Box: {
    flex: 1,
    width: '90%',
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    padding: '1%',
    marginVertical: '3%',
    borderRadius: 10,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  BoxText: {
    width: '60%',
    margin: '5%',
  },
  BoxHeaderText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.green_100,
  },
  BodyText: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.gray_400,
  },
  AddressText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.gray_400,
  },
  BoxRightText: {
    alignItems: 'center',
    marginTop: '7%',
  },
  CheckIcon: {
    fontSize: 40,
    marginLeft: '5%',
  },
  ButtonsFlex: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    // gap: 5,
    // margin: '2%',
    marginTop: '0%',
    borderTopColor: Colors.gray_300,
    borderTopWidth: 1,
    // paddingTop: '1%',
    backgroundColor: Colors.gray_100,
    // elevation:10
  },
  ArrowIcon: {
    width: '16%',
    borderWidth: 1,
    borderRadius: 10,
    margin: '2%',

    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    width: '79%',
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 10,
    padding: '3%',
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});

export default OrderDescriptionScreen;
