import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../Constants/colors';
import {List} from '../../Home/PatientsArray';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const ConfirmDetailsScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={style.Container}>
      <ScrollView>
        <Modal
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}
          animationType="fade">
          <Pressable
            style={style.bg}
            onPress={() => setShowModal(!showModal)}
          />
          <View style={style.ModalContainer}>
            <View style={style.ModalTextContainer}>
              <Text style={style.PatientText}>Update Order Details</Text>
              <Text style={style.PatientHeaderTexts}>
                You won't be able to modify the order after proceeding, Are you
                sure you want to proceed ?
              </Text>
              <View style={style.ModalButtonsContainer}>
                <TouchableOpacity
                  style={style.ModalButtons}
                  onPress={() => {
                    setShowModal(false);
                  }}>
                  <Text style={style.ModalButtonsText}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.ModalButtons}
                  onPress={() => {
                    setShowModal(false);
                    navigation.navigate('PatientVial');
                  }}>
                  <Text style={style.ModalButtonsText}>CONFIRM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {List.map(item => (
          <View key={item.id}>
            <View style={style.PatientContainer}>
              <Text style={style.PatientHeaderText}>
                Please verify the details
              </Text>
              <View style={style.Box}>
                <View style={style.Flex}>
                  <Text style={style.PatientText}>
                    {item.patient_name} ({item.patient_age}/{item.gender})
                  </Text>
                  <MaterialIcons
                    style={style.EditIcon}
                    name="edit"
                    size={25}
                    color={Colors.dark}
                  />
                </View>
                <Text style={style.PatientHeaderText}>SELECTED TESTS</Text>
                <Text style={style.PatientHeaderText}>{item.test}</Text>
              </View>
              <View style={style.Box}>
                <View style={style.Flex}>
                  <Text style={style.PatientText}>Amount Payable</Text>
                  <Text style={style.PatientText}>₹{item.amount}</Text>
                </View>
              </View>
              <View style={style.BoxGreen}>
                <View style={style.Flexs}>
                  <Text style={style.PatientTextGreen}>
                    EARN MORE INCENTIVES
                  </Text>
                  <Text style={style.PatientHeaderText}>
                    Add a new beneficiary and earn additional incentive of ₹250*
                    with this order
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={style.ButtonsFlex}>
        <TouchableOpacity style={style.ArrowIcon}>
          <Text style={style.CheckIcon}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.Button}
          onPress={() => setShowModal(!showModal)}>
          <Text style={style.ButtonText}>ADD BENEFICIARY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 1,
    // height: '89%',
    backgroundColor: Colors.white,
  },
  PatientContainer: {
    width: '90%',
    alignSelf: 'center',
    margin: '2%',
  },
  PatientHeaderText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.gray_400,
    // marginVertical: '2%',
  },
  PatientHeaderTexts: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.gray_600,
    width: '80%',
    // marginVertical: '2%',
  },
  Box: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.dark,
    padding: '4%',
    marginVertical: '3%',
    backgroundColor: Colors.gray_100,
  },
  Flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: '5%',
    // marginVertical: '3%',
  },
  PatientText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  CheckIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  ButtonsFlex: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 5,
    marginTop: '0%',
    borderTopColor: Colors.gray_300,
    borderTopWidth: 1,
    backgroundColor: Colors.gray_100,
    // marginHorizontal: '3%',
  },
  ArrowIcon: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 10,
    padding: '3%',
    paddingVertical: '3.7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  Button: {
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.green,
    borderRadius: 10,
    padding: '3%',
    paddingVertical: '4%',
    alignItems: 'center',
    // alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.green,
    marginHorizontal: '2%',
    marginVertical: '2%',
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  BoxGreen: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.dark,
    padding: '4%',
    marginVertical: '3%',
    backgroundColor: Colors.green_200,
  },
  PatientTextGreen: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.green_700,
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
    height: '73%',
    backgroundColor: Colors.gray_600,
    opacity: 0.5,
  },
});

export default ConfirmDetailsScreen;
