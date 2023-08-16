import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../Constants/colors';
import {List} from '../PatientsArray';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const OrderDetails = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
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
              Do you want to Open Map for Direction ?
            </Text>
            <View style={styles.ModalButtonsContainer}>
              <TouchableOpacity style={styles.ModalButtons}>
                <Text style={styles.ModalButtonsText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.ModalButtons}
                onPress={() => navigation.navigate('Arrive')}>
                <Text style={styles.ModalButtonsText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {List.map(item => (
        <TouchableOpacity
          style={styles.Box}
          key={item.id}
          onPress={() => setShowModal(!showModal)}>
          <View style={styles.BoxText}>
            <Text style={styles.BoxHeaderText}>{item.patient_number}</Text>
            <Text style={styles.AddressText}>{item.patient_token}</Text>
            <Text style={styles.BodyText}>
              {item.date},{item.time}
            </Text>
            <Text style={styles.BodyText}>{item.kit}</Text>
            <Text style={styles.BodyText}>{item.from_to_time}</Text>
            <Text style={styles.BodyText}>Fasting: {item.fasting}</Text>
            <Text style={styles.AddressText}>{item.address}</Text>
            <View style={styles.OrderButton}>
              <Text style={styles.OrderButtonText}>Order Release</Text>
            </View>
          </View>
          <View style={styles.BoxRightText}>
            <MaterialIcons
              style={styles.CheckIcon}
              name="check-circle-outline"
              color={Colors.green_700}
            />
            <Text style={styles.AddressText}>Start</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    width: '70%',
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
    fontSize: 25,
    marginLeft: '5%',
  },
  OrderButton: {
    padding: '3%',
    marginTop: '10%',
    width: '100%',
    backgroundColor: Colors.gray_100,
    borderWidth: 2,
    borderColor: Colors.dark,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  OrderButtonText: {
    margin: '3%',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  ModalContainer: {
    alignSelf: 'center',
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  ModalTextContainer: {
    backgroundColor: Colors.green,
    borderWidth: 1,
    borderColor: Colors.dark,
    paddingVertical: '5%',
    // borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    elevation: 100,
  },
  ModalButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
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
  ModalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  ModalButtonsText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  bg: {
    height: '84%',
    backgroundColor: Colors.gray_600,
    opacity: 0.5,
  },
});

export default OrderDetails;
