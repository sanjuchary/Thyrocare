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

import {Colors} from '../../../Constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ConfirmOrderModal, OtpModal, SelectPatientModal} from '../../../Modals';

const ArrivedScreen = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const handleModal = () => {
    otpVerified ? setShowPatientModal(true) : setShowPatientModal(false);
  };
  return (
    <ScrollView style={styles.Container}>
      <OtpModal
        showOtpModal={showOtpModal}
        setShowOtpModal={setShowOtpModal}
        setOtpVerified={setOtpVerified}
      />
      <SelectPatientModal
        showPatientModal={showPatientModal}
        setShowPatientModal={setShowPatientModal}
      />
      <ConfirmOrderModal
        showConfirmModal={showConfirmModal}
        setShowConfirmModal={setShowConfirmModal}
      />
      <View style={styles.Box}>
        <View style={styles.BoxText}>
          <Text style={styles.BoxHeaderText}>HBA PROFILE</Text>
          <Text style={styles.BodyText}>Beneficary</Text>
          <TouchableOpacity style={styles.flexbox} onPress={handleModal}>
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
        {otpVerified ? (
          <TouchableOpacity
            style={styles.BoxBottom}
            onPress={() => setShowConfirmModal(!showConfirmModal)}>
            <Text style={styles.OrderButtonText}>Confirm order</Text>
            <MaterialIcons
              style={styles.BackIcon}
              name="arrow-forward-ios"
              size={25}
              color={Colors.gray_400}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.BoxBottom}
            onPress={() => setShowOtpModal(!showOtpModal)}>
            <Text style={styles.OrderButtonText}>Arrive</Text>
            <MaterialIcons
              style={styles.BackIcon}
              name="arrow-forward-ios"
              size={25}
              color={Colors.gray_400}
            />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  Box: {
    width: '90%',
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    padding: '5%',
    marginVertical: '3%',
    borderRadius: 10,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  BoxText: {
    width: '100%',
    flex: 1,
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
  CheckIcon: {
    fontSize: 30,
    color: Colors.gray_400,
    fontWeight: 'bold',
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
  FlexBoxBottom: {
    display: 'flex',
    flexDirection: 'row',
    // gap: 180,
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
  OrderButtonText: {
    margin: '3%',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 70,
  },
  ModalContainer: {
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.gray_300,
  },
  ModalTextContainer: {
    backgroundColor: Colors.gray_100,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.dark,
    paddingVertical: '5%',
    borderRadius: 15,
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
});

export default ArrivedScreen;
