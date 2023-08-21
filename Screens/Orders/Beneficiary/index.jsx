import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {List} from '../../Home/PatientsArray';
import {Colors} from '../../../Constants/colors';
import {useNavigation} from '@react-navigation/native';

const EditBeneficiaryScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Body}>
      {List.map(item => (
        <View key={item.id}>
          <ScrollView style={styles.Container}>
            <View style={styles.FlexContainer}>
              <View>
                <Text style={styles.Header}>Patient Name</Text>
                <View style={styles.Flex}>
                  <Text style={styles.Text}>{item.patient_name}</Text>
                  <Text style={styles.Text}>
                    ({item.patient_age}/{item.gender})
                  </Text>
                </View>
              </View>
              <Text style={styles.HeaderLink}>Edit</Text>
            </View>
            <View style={styles.InputContainer}>
              <Text style={styles.Header}>Add Test/Packages</Text>
              <View style={styles.searchSection}>
                <MaterialIcons
                  style={styles.searchIcon}
                  name="search"
                  color={Colors.gray_300}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Search Tests / Packages"
                  placeholderTextColor={Colors.gray_300}
                />
              </View>
            </View>
            <View style={styles.InputContainer}>
              <Text style={styles.Header}>Selected Tests</Text>
              <View style={styles.FlexButtons}>
                <Text style={styles.TestButton}>{item.test}</Text>
                <AntDesign
                  // style={styles.searchIcon}
                  name="closecircle"
                  size={18}
                  color={Colors.dark}
                />
              </View>
            </View>
            <View>
              <View style={styles.FlexContainer}>
                <Text style={styles.Text}>Recommended tests</Text>
                <Text style={styles.HeaderLink}>View all</Text>
              </View>
              <View style={styles.BoxText}>
                <Text style={styles.Text}>
                  Prostate Specific Antigen {'\n'}(PSA for Men)
                </Text>
                <Text style={styles.RecommendedText}>
                  Test to monitor and detect the risk of prostate cancer in men
                </Text>
                <View style={styles.FlexContainer}>
                  <View>
                    <Text style={styles.Text}>249</Text>
                    <Text style={styles.Header}>799</Text>
                  </View>
                  <Text style={styles.Discount}>19% Off</Text>
                  <TouchableOpacity>
                    <Text style={styles.AddButton}>ADD TEXT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.ButtonsFlex}>
            <View style={styles.ArrowIcon}>
              <Text style={styles.Header}>Total: Tests(1)</Text>
              <Text style={styles.Text}>Amount: ₹{item.amount}</Text>
            </View>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => navigation.navigate('ConfirmDetails')}>
              <Text style={styles.ButtonText}>SAVE & PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Container: {
    width: '100%',
    height: '89.5%',
  },
  FlexContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '2%',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  Header: {
    fontSize: 18,
    color: Colors.dark,
  },
  HeaderLink: {
    fontSize: 18,
    color: Colors.green,
    backgroundColor: Colors.dark,
    borderRadius: 20,
    paddingVertical: '1%',
    paddingHorizontal: '4%',
  },
  Flex: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  Text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  InputContainer: {
    marginVertical: '4%',
    marginHorizontal: '5%',
    gap: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 10,
  },
  searchIcon: {
    padding: '2%',
    fontSize: 30,
  },
  input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    color: Colors.dark,
  },
  FlexButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderColor: Colors.dark,
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderRadius: 40,
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    gap: 10,
  },
  TestButton: {
    color: Colors.dark,
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  CheckIcon: {
    fontSize: 40,
    marginLeft: '5%',
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
    width: '50%',
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
  BoxText: {
    flex: 1,
    width: '90%',
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    marginVertical: '3%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  RecommendedText: {
    fontSize: 18,
    marginTop: '5%',
    color: Colors.gray_400,
  },
  Discount: {
    backgroundColor: Colors.green_700,
    padding: '3%',
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 10,
    color: Colors.white,
  },
  AddButton: {
    borderWidth: 2,
    borderColor: Colors.dark,
    color: Colors.dark,
    padding: '3%',
    paddingHorizontal: '6%',
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default EditBeneficiaryScreen;
