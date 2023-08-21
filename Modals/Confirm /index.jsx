import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../Constants/colors';
import {useNavigation} from '@react-navigation/native';

const ConfirmOrderModal = ({showConfirmModal, setShowConfirmModal}) => {
  const navigation = useNavigation();
  return (
    <Modal
      transparent={true}
      visible={showConfirmModal}
      onRequestClose={() => {
        setShowConfirmModal(!showConfirmModal);
      }}
      animationType="fade">
      <Pressable
        style={styles.bg}
        onPress={() => setShowConfirmModal(!showConfirmModal)}
      />
      <View style={styles.ModalContainer}>
        <View style={styles.ModalTextContainer}>
          <Text style={styles.ModalText}>
            You wont be able to modify the order after proceeding. Please verify
            all details before proceeding.{'\n'}Are you sure you want to proceed
            ?
          </Text>
          <View style={styles.ModalButtonsContainer}>
            <TouchableOpacity
              style={styles.ModalButtons}
              onPress={() => {
                navigation.navigate('OrderDescription');
              }}>
              <Text style={styles.ModalButtonsText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ModalButtons}
              onPress={() => {
                setShowConfirmModal(false);
              }}>
              <Text style={styles.ModalButtonsText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: '77%',
    // width: '100%',
    backgroundColor: Colors.gray_600,
    opacity: 0.5,
    flex: 1,
  },
  ModalContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  ModalTextContainer: {
    backgroundColor: Colors.green,
    borderWidth: 1,
    borderColor: Colors.dark,
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    elevation: 100,
  },
  ModalText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.dark,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  ModalButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
  },
  ModalButtons: {
    backgroundColor: Colors.gray_100,
    borderRadius: 10,
    elevation: 20,
    width: '38%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  ModalButtonsText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
});

export default ConfirmOrderModal;
