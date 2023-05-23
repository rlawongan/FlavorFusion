import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../components/atoms/Gap';
import {SignHeader, TextInput, Button} from '../../components';
import {iconLock, iconUser2, iconEye, iconEyeSlash} from '../../assets/icons';

const SignIn = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handelSignIn = () => {
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };

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
      <Gap height={30} />
      <Text style={styles.title}>Let's get started.</Text>
      <Gap height={25} />
      <Text style={styles.subTitle}>
        Discover New Flavors and{'\n'}Dishes with{' '}
        <Text style={styles.textFlavor}>Flavor</Text>
        <Text style={styles.textFusion}>Fusion</Text>
      </Text>
      <Gap height={40} />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeHolder="your username"
          icon={iconUser2}
          value={userName}
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <TextInput
          label="Password"
          placeHolder="your password"
          icon={iconLock}
          value={password}
          secureTextEntry={!showPassword}
          onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity
          onPress={toggleShowPassword}
          style={styles.showPasswordIcon}>
          <Image
            source={showPassword ? iconEye : iconEyeSlash}
            style={styles.passwordIcon}
          />
        </TouchableOpacity>

        <Gap height={12} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forgetPass}>Forget your password?</Text>
        </TouchableOpacity>
        <Gap height={30} />
        <Button label="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={11} />
        <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    textAlign: 'center',
    color: '#FE724C',
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#272D2F',
  },
  forgetPass: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color: '#FE724C',
    alignSelf: 'flex-end',
  },
  showPasswordIcon: {
    position: 'absolute',
    top: 156,
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
  textFlavor: {
    color: '#FE724C',
    fontFamily: 'Roboto-Medium',
  },
  textFusion: {
    color: '#FFC529',
    fontFamily: 'Roboto-Medium',
  },
});
