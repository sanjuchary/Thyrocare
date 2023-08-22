import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {List} from '../../Home/PatientsArray';
import {Colors} from '../../../Constants/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const PatientVialsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      {List.map(item => (
        <View style={styles.Body} key={item.id}>
          <ScrollView>
            <View style={styles.BoxContainer}>
              <Text style={styles.PatientHeaderText}>
                {item.patient_name} ({item.patient_age}/{item.gender})
              </Text>
              <View style={{...styles.Box, ...styles.Boxs}}>
                <Text style={styles.PatientHeaderText}>
                  Enter 4 digit Code to Scan Barcode
                </Text>
                <Text style={styles.Text}>
                  Please enter first 2 letters of name and last 2 digits of
                  barcode
                </Text>
                <View style={styles.Flex}>
                  <View style={styles.FlexText}>
                    <MaterialIcons
                      style={styles.EditIcon}
                      name="circle"
                      size={25}
                      color={Colors.purple_500}
                    />
                    <Text style={styles.PatientHeaderText}>EDTA</Text>
                  </View>
                  <TextInput
                    style={styles.Input}
                    maxLength={4}
                    placeholder="Enter Code"
                    placeholderTextColor={Colors.gray_300}
                  />
                </View>
              </View>
            </View>
            <View style={styles.BoxContainer}>
              <Text style={styles.PatientHeaderText}>Scannes Vials (0/1)</Text>
              <View style={styles.Box}>
                <View style={styles.FlexHeaderText}>
                  <Text style={styles.PatientHeaderText}>TEST TYPE</Text>
                  <Text style={styles.PatientHeaderText}>BARCODE</Text>
                </View>
                <View style={styles.FlexTexts}>
                  <MaterialIcons
                    style={styles.EditIcon}
                    name="circle"
                    size={25}
                    color={Colors.purple_500}
                  />
                  <Text style={styles.PatientHeaderText}>EDTA</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.ButtonsFlex}>
            <View style={styles.ArrowIcon}>
              <Text style={styles.Text}>Total: Tests(1)</Text>
              <Text style={styles.PatientHeaderText}>
                Amount: ₹{item.amount}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate('Modals')}>
              <Text style={styles.ButtonText}>PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Body: {
    height: '99%',
  },
  BoxContainer: {
    width: '90%',
    alignSelf: 'center',
    margin: '2%',
  },
  Box: {
    borderWidth: 1,
    borderColor: Colors.dark,
    backgroundColor: Colors.gray_100,
    borderRadius: 10,
    elevation: 10,
    marginVertical: '4%',
  },
  PatientHeaderText: {
    fontSize: 19,
    fontWeight: '600',
    color: Colors.dark,
  },
  Text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray_400,
  },
  Flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    marginVertical: '5%',
    // justifyContent: 'space-between',
  },
  FlexText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  Input: {
    width: '28%',
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 10,
    padding: '2%',
    alignItems: 'center',
    alignSelf: 'center',
    // fontSize: 18,
  },
  FlexHeaderText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
    borderRadius: 10,
    backgroundColor: Colors.gray_200,
    gap: 70,
  },
  Boxs: {
    paddingHorizontal: '7%',
    paddingVertical: '3%',
  },
  FlexTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: '5%',
    marginHorizontal: '7%',
  },
  ButtonsFlex: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: '1%',
    paddingTop: '2%',
    paddingHorizontal: '2%',
    borderColor: Colors.gray_300,
    borderTopWidth: 1,
    backgroundColor: Colors.gray_100,
  },
  ArrowIcon: {
    // marginVertical: '3%',
    // margin: '2%',
    // paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  Button: {
    // marginVertical: '3%',
    width: '60%',
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 10,
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

export default PatientVialsScreen;
