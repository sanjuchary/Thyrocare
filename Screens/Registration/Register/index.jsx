import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../Constants/colors';

import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller} from 'react-hook-form';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {API_URL} from '@env';

const RegisterPage = () => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isSecureEntry2, setIsSecureEntry2] = useState(true);
  const RegisterFormSchema = z
    .object({
      userName: z.string().min(1, {message: 'This Field is required'}),
      email: z
        .string()
        .email({message: 'Invalid email address'})
        .min(1, {message: 'Email is required'}),
      password: z
        .string()
        .min(1, {message: 'Password is required'})
        .min(8, {message: 'Must be 8 or more characters long'}),
      reenterpassword: z
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
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
      reenterpassword: '',
    },
  });

  const onSubmit = async data => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        name: data.userName,
        email: data.email,
        password: data.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log(result);
    reset();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient
          colors={[Colors.black, Colors.gray_600]}
          style={styles.background}>
          <View>
            <Text style={styles.HeaderText}>Register</Text>
            <Text style={styles.HeaderSmallText}>Create Your Account</Text>
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
                    placeholder="FullName"
                    placeholderTextColor={Colors.gray_300}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    style={styles.InputText}
                  />
                )}
                name="userName"
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
              <Entypo name="mail" style={styles.circleIcon} />
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
              <TouchableOpacity
                onPress={() => setIsSecureEntry(!isSecureEntry)}>
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
                      placeholder="Re-Enter Password"
                      placeholderTextColor={Colors.gray_300}
                      onBlur={onBlur}
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={isSecureEntry2}
                      autoCorrect={false}
                      style={styles.InputText}
                    />
                  )}
                  name="reenterpassword"
                />
              </View>
              <TouchableOpacity
                onPress={() => setIsSecureEntry2(!isSecureEntry2)}>
                {isSecureEntry2 ? (
                  <Entypo name="eye-with-line" style={styles.circleIcon} />
                ) : (
                  <Entypo name="eye" style={styles.circleIcon} />
                )}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.errorText}>
                {errors.reenterpassword && errors.reenterpassword.message}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpTextContainer}>
          <Text style={styles.SignUpText}>I have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.RegisterText}> Log in</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: '20%',
  },
  HeaderSmallText: {
    color: Colors.gray_300,
    marginLeft: '5%',
    marginTop: '3%',
    fontSize: 18,
  },
  boxContainer: {
    alignItems: 'center',
  },
  InputFieldContainer: {
    width: '90%',
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
    gap: 10,
  },
  InputText: {
    fontSize: 15,
    color: Colors.black,
    width: '100%',
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
  SignUpTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '18%',
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

export default RegisterPage;
