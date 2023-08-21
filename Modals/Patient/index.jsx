import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../Constants/colors';
import {List} from '../../Screens/Home/PatientsArray';

const SelectPatientModal = ({showPatientModal, setShowPatientModal}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Modal
      transparent={true}
      visible={showPatientModal}
      onRequestClose={() => {
        setShowPatientModal(!showPatientModal);
      }}
      animationType="slide">
      <Pressable
        style={styles.bg2}
        onPress={() => setShowPatientModal(!showPatientModal)}
      />
      <View style={styles.PatientsContainer}>
        <View style={styles.HeaderContainer}>
          <View>
            <Text style={styles.HeaderBoldText}>Select Patients</Text>
            <Text style={styles.HeaderText}>
              Select patients that you want to add for this test
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setShowPatientModal(!showPatientModal)}>
            <MaterialIcons style={styles.CheckIcon} name="close" />
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileContainer}>
          <Text style={styles.ProfileText}>HBA PROFILE</Text>
        </View>
        <TouchableOpacity style={styles.AddPatientContainer}>
          <View style={styles.AddPatientFlex}>
            <FontAwesome style={styles.AddIcon} name="user-circle-o" />
            <Text style={styles.PatientText}>Add new patient</Text>
          </View>
          <View style={styles.AddIconContainer}>
            <MaterialIcons style={styles.AddIcon} name="add" />
          </View>
        </TouchableOpacity>
        {List.map(item => (
          <TouchableOpacity style={styles.PatientContainer} key={item.id}>
            <View style={styles.PatientFlex}>
              <FontAwesome style={styles.AddIcon} name="user-circle-o" />
              <View>
                <Text style={styles.HeaderBoldText}>{item.patient_name}</Text>
                <Text>
                  {item.patient_age} | {item.gender} | Edit
                </Text>
              </View>
            </View>
            <View style={styles.AddIconContainer}>
              <CheckBox
                tintColors={{true: Colors.dark, false: Colors.dark}}
                onChange={() => setToggleCheckBox(!toggleCheckBox)}
                value={toggleCheckBox}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.ButtonContainer}>
        <Text style={styles.ButtonText}>Save</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bg2: {
    height: '20%',
    backgroundColor: Colors.gray_600,
    opacity: 0.5,
  },
  PatientsContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  HeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  HeaderBoldText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  HeaderText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gray_400,
  },
  CheckIcon: {
    fontSize: 30,
    color: Colors.gray_400,
    fontWeight: 'bold',
  },
  ProfileContainer: {
    // opacity: 0.7,
    backgroundColor: Colors.green_200,
  },
  ProfileText: {
    marginHorizontal: '4%',
    marginVertical: '1%',
    fontSize: 25,
    color: Colors.dark,
  },
  AddPatientContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 90,
    marginVertical: '3%',
    marginHorizontal: '6%',
  },
  AddPatientFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  PatientFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  AddIcon: {
    fontSize: 45,
    // color: Colors.dark,
  },
  AddIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  PatientText: {
    fontSize: 22,
    color: Colors.dark,
  },
  PatientContainer: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
    gap: 130,
    borderWidth: 1,
    borderColor: Colors.gray_300,
    padding: '2%',
    paddingHorizontal: '4%',
    margin: '2%',
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 3,
  },
  Icon: {
    fontSize: 35,
    justifyContent: 'flex-end',
  },
  ButtonContainer: {
    alignItems: 'center',
    backgroundColor: Colors.green,
    margin: '5%',
    padding: '3%',
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 20,
    color: Colors.dark,
    fontWeight: '500',
  },
});

export default SelectPatientModal;
