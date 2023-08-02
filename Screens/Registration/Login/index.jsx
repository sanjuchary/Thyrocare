/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

import {useForm, Controller} from 'react-hook-form';

import CheckBox from '@react-native-community/checkbox';

import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../Constants/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const LogInPage = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const LoginFormSchema = z
    .object({
      email: z
        .string()
        .email({message: 'Invalid email address'})
        .min(1, {message: 'Email is required'}),
      password: z
        .string()
        .min(1, {message: 'Password is required'})
        .min(8, {message: 'Must be 8 or more characters long'}),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.black, Colors.gray_600]}
        style={styles.background}>
        <View style={styles.background}>
          <Text style={styles.HeaderText}>Login To Your Account</Text>
          <Text style={styles.HeaderSmallText}>Enter The details To Login</Text>
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
        <View style={styles.ForgetPasswordContainer}>
          <View style={styles.RememberMeContainer}>
            <CheckBox
              tintColors={{
                true: Colors.green,
                false: Colors.black,
              }}
              onChange={() => setToggleCheckBox(!toggleCheckBox)}
              value={toggleCheckBox}
            />
            <TouchableOpacity>
              <Text style={styles.LightText}>Remember Me</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.LightText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={[Colors.green, Colors.green]}
          style={styles.button}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.SignUpTextContainer}>
        <Text style={styles.SignUpText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.RegisterText}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  HeaderText: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: '4%',
    // textAlign: 'center',
    // alignSelf: 'center',
    marginTop: '18%',
  },
  HeaderSmallText: {
    color: Colors.gray_300,
    marginLeft: '4%',
    marginTop: '3%',
    fontSize: 18,
  },
  boxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  InputFieldContainer: {
    width: '90%',
    // marginTop: '10%',
    display: 'flex',
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
    gap: 8,
  },
  InputText: {
    fontSize: 15,
    color: Colors.black,
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
  circleIcon: {
    fontSize: 20,
    color: Colors.gray_300,
  },
  errorText: {
    fontSize: 13,
    color: Colors.red,
    marginLeft: '5%',
    marginTop: '2%',
  },
  ForgetPasswordContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 100,
    marginTop: '5%',
  },
  RememberMeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  LightText: {
    color: Colors.gray_600,
    fontWeight: '500',
  },
  button: {
    width: '90%',
    margin: '10%',
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
  SignUpTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '23%',
  },
  SignUpText: {
    color: Colors.black,
    // shadowColor: Colors.black,
    fontWeight: '300',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegisterText: {
    color: Colors.green_100,
    fontSize: 17,
    fontWeight: '600',
  },
});

export default LogInPage;