import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../Constants/colors';

const OtpModal = ({setShowOtpModal, showOtpModal, setOtpVerified}) => {
  return (
    <Modal
      transparent={true}
      visible={showOtpModal}
      onRequestClose={() => {
        setShowOtpModal(!showOtpModal);
      }}
      animationType="fade">
      <Pressable
        style={styles.bg}
        onPress={() => setShowOtpModal(!showOtpModal)}
      />
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
            <TouchableOpacity
              onPress={() => {
                setOtpVerified(true);
                setShowOtpModal(false);
              }}>
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
      <Pressable
        style={styles.bg}
        onPress={() => setShowOtpModal(!showOtpModal)}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default OtpModal;
