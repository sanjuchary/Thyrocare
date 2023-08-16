import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {List} from '../PatientsArray';
import {Colors} from '../../../Constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const ArrivedScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  return (
    <ScrollView style={styles.Container}>
      <Modal
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
        animationType="fade">
        <Pressable style={styles.bg} onPress={() => setShowModal(!showModal)} />
        <View style={styles.ModalContainer}>
          <View style={styles.ModalTextContainer}>
            <Text style={styles.ModalText}>
              ENTER OTP SEND TO MOBILE NUMBER LINKED WITH THIS ORDER, TO PROCEED
              WITH WOE.
            </Text>
            <View style={styles.OtpInputContainer}>
              <TextInput
                style={styles.TextInput}
                maxLength={6}
                keyboardType="numeric"
              />
              <TouchableOpacity>
                <MaterialIcons
                  style={styles.ArrowIcon}
                  name="arrow-circle-right"
                  size={25}
                  color={Colors.dark}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Pressable style={styles.bg} onPress={() => setShowModal(!showModal)} />
      </Modal>
      <Modal
        transparent={true}
        visible={showModal1}
        onRequestClose={() => {
          setShowModal1(!showModal1);
        }}
        animationType="slide">
        <Pressable
          style={styles.bg2}
          onPress={() => setShowModal1(!showModal1)}
        />
        <View style={styles.PatientsContainer}>
          <View style={styles.HeaderContainer}>
            <View>
              <Text style={styles.HeaderBoldText}>Select Patients</Text>
              <Text style={styles.HeaderText}>
                Select patients that you want to add for this test
              </Text>
            </View>
            <TouchableOpacity onPress={() => setShowModal1(!showModal1)}>
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
          <TouchableOpacity style={styles.PatientContainer}>
            <View style={styles.AddPatientFlex}>
              <FontAwesome style={styles.AddIcon} name="user-circle-o" />
              <View>
                <Text style={styles.HeaderBoldText}>Vijay Narra</Text>
                <Text>37 | Male | Edit</Text>
              </View>
            </View>
            <View style={styles.AddIconContainer}>
              <MaterialIcons style={styles.Icon} name="check-box" />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.Box}>
        <View style={styles.BoxText}>
          <Text style={styles.BoxHeaderText}>HBA PROFILE</Text>
          <Text style={styles.BodyText}>Beneficary</Text>
          <TouchableOpacity
            style={styles.flexbox}
            onPress={() => setShowModal1(!showModal1)}>
            <Text style={styles.BodyBigText}>Please add 1 Beneficary</Text>
            <MaterialIcons style={styles.CheckIcon} name="add" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.OrderButton}>
        <Text style={styles.OrderButtonText}>Order Release</Text>
      </TouchableOpacity>
      <View style={styles.FlexBoxBottom}>
        <TouchableOpacity style={styles.BoxBottom}>
          <Text style={styles.OrderButtonText}>Amount</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BoxBottom}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.OrderButtonText}>Arrive</Text>
          <MaterialIcons
            style={styles.BackIcon}
            name="arrow-forward-ios"
            size={25}
            color={Colors.gray_400}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    // width: '100%',
    // height: '100%',
    backgroundColor: Colors.white,
    flex: 1,
  },
  BoxText: {
    width: '100%',
    flex: 1,
  },
  Box: {
    width: '90%',
    // height: 330,
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    padding: '5%',
    marginVertical: '3%',
    // padding: '3%',
    borderRadius: 10,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  BoxHeaderText: {
    fontSize: 20,
    fontWeight: '800',
    color: Colors.green_100,
  },
  BodyText: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.dark,
  },
  BodyBigText: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.gray_400,
  },
  OrderButton: {
    // padding: '3%',
    marginVertical: '5%',
    marginTop: '3%',
    width: '90%',
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 70,
  },
  OrderButtonText: {
    margin: '3%',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  CheckIcon: {
    fontSize: 30,
    color: Colors.gray_400,
    fontWeight: 'bold',
  },
  BoxBottom: {
    width: '42%',
    // height: 330,
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    // padding: '5%',
    marginLeft: '5%',
    padding: '1%',
    borderRadius: 10,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
  },
  FlexBoxBottom: {
    display: 'flex',
    flexDirection: 'row',
    // gap: 180,
  },
  ModalContainer: {
    width: '100%',
  },
  ModalTextContainer: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.dark,
    paddingVertical: '5%',
    // borderRadius: 20,
    elevation: 100,
  },
  ModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '1%',
    color: Colors.dark,
  },
  bg: {
    height: '40%',
    backgroundColor: Colors.gray_600,
    opacity: 0.5,
  },
  OtpInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
    gap: 10,
  },
  TextInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark,
    color: Colors.dark,
    fontSize: 18,
  },
  ArrowIcon: {
    fontSize: 35,
  },
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
  // AddIconContainer: {
  //   justifyContent: 'flex-end',
  //   gap: 30,
  // },
  AddIcon: {
    fontSize: 45,
    // color: Colors.dark,
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
});

export default ArrivedScreen;
