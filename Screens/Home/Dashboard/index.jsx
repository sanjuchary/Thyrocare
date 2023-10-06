import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../Constants/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {REMOVE_TOKEN} from '../../../redux/reducers/userReducers';
import {API_URL} from '@env';
import axiosInstance from '../../../libs/axios';

const DashBoardScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    try {
      const response = await axiosInstance(`${API_URL}/logout`);
      if (response.status !== 200) {
        return console.log('error');
      }
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
    } catch (err) {
      console.log(err);
    }
    dispatch(REMOVE_TOKEN());
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.QuickLinkText}>Quick Links</Text>
      </View>
      <View style={styles.LinkBoxes}>
        <TouchableOpacity
          style={styles.OrderBox}
          onPress={() => navigation.navigate('Orders')}>
          <AntDesign name="edit" style={styles.circleIcon} />
          <Text style={styles.OrderLightText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OrderBox}>
          <MaterialCommunityIcons
            name="checkbox-multiple-marked"
            style={styles.circleIcon}
          />
          <Text style={styles.OrderLightText}>Served</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.LinkBox}>
        <TouchableOpacity style={styles.OrderBox}>
          <MaterialIcons name="hub" style={styles.circleIcon} />
          <Text style={styles.OrderLightText}>Hub</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.OtherContainer}>
        <Text style={styles.OthersText}>Others</Text>
      </View>
      <View style={styles.OtherBoxes}>
        <TouchableOpacity style={styles.OtherBox}>
          <Entypo name="mail" style={styles.circleIcon} />
          <Text style={styles.OrderText}>HCW Letter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OtherBox}>
          <MaterialIcons name="password" style={styles.circleIcon} />
          <Text style={styles.OrderText}>Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OtherBox}>
          <MaterialIcons name="feedback" style={styles.circleIcon} />
          <Text style={styles.OrderText}>Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.OtherBoxes}>
        <TouchableOpacity style={styles.OtherBox}>
          <MaterialCommunityIcons
            name="certificate"
            style={styles.circleIcon}
          />
          <Text style={styles.OrderText}>Certificate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OtherBox}>
          <MaterialIcons name="video-collection" style={styles.circleIcon} />
          <Text style={styles.OrderText}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OtherBox} onPress={handleSubmit}>
          <MaterialIcons name="logout" style={styles.circleIcon} />
          <Text style={styles.OrderText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  TopContainer: {
    width: '100%',
    marginVertical: '5%',
    marginHorizontal: '7%',
  },
  QuickLinkText: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.gray_400,
  },
  LinkBoxes: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    gap: 95,
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: Colors.gray_200,
  },
  OrderBox: {
    width: 100,
    height: 100,
    marginVertical: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray_100,
    borderRadius: 10,
    elevation: 5,
  },
  circleIcon: {
    fontSize: 30,
    alignSelf: 'center',
    color: Colors.green_100,
  },
  OrderLightText: {
    fontSize: 17,
    color: Colors.dark,
    fontWeight: '500',
  },
  LinkBox: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    borderBottomWidth: 1,
    borderColor: Colors.gray_200,
  },
  OrderText: {
    fontSize: 17,
    color: Colors.gray_300,
    fontWeight: '500',
    marginTop: '2%',
  },
  OtherContainer: {
    width: '90%',
    marginTop: '5%',
    marginHorizontal: '7%',
  },
  OthersText: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.gray_400,
  },
  OtherBoxes: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
    gap: 20,
  },
  OtherBox: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.gray_200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 8,
    backgroundColor: Colors.dark,
  },
});

export default DashBoardScreen;
