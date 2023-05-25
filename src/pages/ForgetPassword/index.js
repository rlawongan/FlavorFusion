import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import {iconBack, iconLock, iconEye, iconEyeSlash} from '../../assets';
import AwesomeAlert from 'react-native-awesome-alerts';

const ForgetPassword = ({navigation}) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handelSignIn = () => {
    const data = {
      password1: password1,
      password2: password2,
    };
    console.log(data);
    setResetSuccess(true);
  };

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const showAlert = () => {
    setResetSuccess(true);
  };
  const resetPassword = () => {
    setPassword1('');
    setPassword2('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBackWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <Text style={styles.backButtonText}>Back to Sign In</Text>
      </View>
      <Text style={styles.title}>Change your{'\n'}password</Text>
      <Text style={styles.description}>
        Please change your password in{'\n'}order to be more secure
      </Text>
      <Gap height={30} />
      <View style={styles.inputContainer}>
        <TextInput
          label="Old Password"
          placeHolder="your old password"
          icon={iconLock}
          value={password1}
          secureTextEntry={!showPassword1}
          onChangeText={e => setPassword1(e)}
        />
        <TouchableOpacity
          onPress={toggleShowPassword1}
          style={styles.showPasswordIcon1}>
          <Image
            source={showPassword1 ? iconEye : iconEyeSlash}
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
        <Gap height={20} />
        <TextInput
          label="New Password"
          placeHolder="your new password"
          icon={iconLock}
          value={password2}
          secureTextEntry={!showPassword2}
          onChangeText={e => setPassword2(e)}
        />
        <TouchableOpacity
          onPress={toggleShowPassword2}
          style={styles.showPasswordIcon2}>
          <Image
            source={showPassword2 ? iconEye : iconEyeSlash}
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
        <Gap height={20} />
        <TextInput
          label="Confirm Password"
          placeHolder="your new password"
          icon={iconLock}
          value={password2}
          secureTextEntry={!showPassword2}
          onChangeText={e => setPassword2(e)}
          editable={false}
          selectTextOnFocus={false}
        />
        <Gap height={18} />
        <Button label="Change Password" onPress={showAlert} />
        <Gap height={10} />
        <Button label="Reset Password" onPress={resetPassword} />
      </View>
      <AwesomeAlert
        show={resetSuccess}
        showProgress={false}
        title="Change Password Success"
        message="Your password has been successfully change."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#42f595"
        onConfirmPressed={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  backButtonText: {
    fontFamily: 'Roboto-Medium',
    color: '#272D2F',
    marginLeft: 10,
    fontSize: 22,
  },
  iconBackWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 30,
    left: 24,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    fontSize: 32,
    color: '#FE724C',
    marginVertical: 30,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    textAlign: 'center',
    color: '#272D2F',
    fontSize: 16,
  },
  label: {
    color: '#FE724C',
    textAlign: 'left',
  },
  inputContainer: {
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0, // Hilangkan border pada TextInput
    paddingLeft: 40, // Tambahkan padding ke kiri TextInput
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 10, // Geser ikon ke kiri sejauh 10 piksel
  },
  eyeIcon: {
    width: 24,
    height: 24,
    marginLeft: 10, // Tambahkan margin kiri pada icon
  },

  button: {
    backgroundColor: '#FE724C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#FE724C',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconBack: {
    width: 32,
    height: 32,
  },
  showPasswordIcon1: {
    position: 'absolute',
    top: 45,
    right: 30,
  },
  showPasswordIcon2: {
    position: 'absolute',
    top: 155,
    right: 30,
  },
  passwordIcon: {
    width: 24,
    height: 24,
    tintColor: '#D7D7D7',
  },
});

export default ForgetPassword;
