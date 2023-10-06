import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {Colors} from '../../../Constants/colors';
import LinearGradient from 'react-native-linear-gradient';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller} from 'react-hook-form';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const RegisterFormSchema = z
    .object({
      email: z
        .string()
        .email({message: 'Invalid email address'})
        .min(1, {message: 'Email is required'}),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.black, Colors.gray_600]}
        style={styles.background}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <AntDesign name="arrowleft" style={styles.BackIcon} />
        </TouchableOpacity>
        <View>
          <Text style={styles.HeaderText}>Forget Password</Text>
          <Text style={styles.HeaderSmallText}>
            Enter your email account to reset password
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.boxContainer}>
        <View style={styles.InputFieldContainer}>
          <View style={styles.InputFieldHolder}>
            <FontAwesome6 name="circle-user" style={styles.circleIcon} />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={Colors.gray_300}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  style={styles.InputText}
                />
              )}
              name="email"
            />
          </View>
          <View>
            <Text style={styles.errorText}>
              {errors.email && errors.email.message}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.InputFieldContainer}>
        <View style={styles.InputFieldHolder}>
          <View style={styles.RightInput}>
            <MaterialCommunityIcons name="lock" style={styles.circleIcon} />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={Colors.gray_300}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={isSecureEntry}
                  autoCorrect={false}
                  style={styles.InputText}
                />
              )}
              name="password"
            />
          </View>
          <TouchableOpacity onPress={() => setIsSecureEntry(!isSecureEntry)}>
            {isSecureEntry ? (
              <Entypo name="eye-with-line" style={styles.circleIcon} />
            ) : (
              <Entypo name="eye" style={styles.circleIcon} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.errorText}>
            {errors.password && errors.password.message}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  background: {
    height: 235,
    width: '100%',
    background: 'fixed',
    marginBottom: '10%',
  },
  BackIcon: {
    color: Colors.white,
    marginHorizontal: '5%',
    marginTop: '7%',
    fontSize: 30,
  },
  HeaderText: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: '5%',
    marginTop: '15%',
  },
  HeaderSmallText: {
    color: Colors.gray_300,
    marginLeft: '5%',
    marginTop: '3%',
    fontSize: 16,
  },
  boxContainer: {
    alignItems: 'center',
  },
  InputFieldContainer: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
  },
  InputFieldHolder: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray_300,
    backgroundColor: Colors.gray_100,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '4%',
    gap: 10,
  },
  RightInput: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  LeftInput: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 8,
  },
  InputText: {
    fontSize: 15,
    color: Colors.black,
    width: '100%',
  },
  circleIcon: {
    fontSize: 20,
    color: Colors.gray_300,
  },
  errorText: {
    fontSize: 13,
    color: Colors.red,
    margin: '2%',
  },
  button: {
    width: '90%',
    marginTop: '5%',
    backgroundColor: Colors.green,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 20,
  },
});

export default ForgetPassword;
