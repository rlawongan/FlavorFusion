import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../components/atoms/Gap';
import {SignHeader, TextInput, Button} from '../../components';
import {
  iconEmail,
  iconLock,
  iconUser2,
  iconEye,
  iconEyeSlash,
} from '../../assets/icons';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateToSignIn = () => {
    setIsSignInActive(true);
    setIsSignUpActive(false);
    navigation.navigate('SignIn');
  };

  const navigateToSignUp = () => {
    setIsSignInActive(false);
    setIsSignUpActive(true);
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.page}>
      <SignHeader />
      <Gap height={50} />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeHolder="your username"
          icon={iconUser2}
        />
        <Gap height={10} />
        <TextInput
          label="Email Address"
          placeHolder="your email address"
          icon={iconEmail}
        />
        <Gap height={10} />
        <TextInput
          label="Password"
          placeHolder="your password"
          icon={iconLock}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordIcon}>
          <Image
            source={showPassword ? iconEye : iconEyeSlash}
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
        <Gap height={30} />
        <Button label="Sign Up" onPress={() => navigation.navigate('SignIn')} />
        <Gap height={10} />
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
          <Text style={styles.text}>Or sign up with</Text>
          <View style={styles.line} />
        </View>
        <Gap height={10} />
        <Button
          label="Sign Up with Facebook"
          color="#1877F2"
          onPress={() => navigation.navigate('SignIn')}
          icon="facebook"
        />
        <Gap height={15} />
        <Button
          label="Sign Up with Google"
          color="#FFFFFF"
          textColor="#272D2F"
          onPress={() => navigation.navigate('SignIn')}
          icon="google"
        />
      </View>
      <View style={styles.navigateWrapper}>
        <Gap height={40} />
        <TouchableOpacity
          onPress={navigateToSignIn}
          style={[styles.lineNavigate, isSignInActive && styles.activeButton]}
        />
        <TouchableOpacity
          onPress={navigateToSignUp}
          style={[styles.lineNavigate, isSignUpActive && styles.activeButton]}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 24,
  },
  showPasswordIcon: {
    position: 'absolute',
    top: 248,
    right: 30,
  },
  passwordIcon: {
    width: 24,
    height: 24,
    tintColor: '#D7D7D7',
  },
  navigateWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lineNavigate: {
    width: 60,
    height: 6,
    backgroundColor: '#D7D7D7',
    alignSelf: 'center',
  },
  activeButton: {
    backgroundColor: '#FE724C',
  },
  line: {
    width: 120,
    borderWidth: 1,
    alignSelf: 'center',
    elevation: 2,
    borderColor: '#FE724C',
  },
  lineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    color: '#272D2F',
    fontWeight: '400',
  },
});
