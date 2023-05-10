import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Gap} from '../../components';

const ForgetPassword = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack('Profile')}>
        <Image source={require('../../assets/icons/icons8-less-than-32.png')} />
        <Text style={styles.backButtonText}>Back to Profile</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Change Your Password</Text>
      <Text style={styles.description}>
        Please change your password in order to be more secure
      </Text>
      <Gap height={20} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Old Password</Text>
        <Gap height={10} />
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/icons/icons8-lock-24.png')}
            style={styles.icon}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your old password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require('../../assets/icons/icons8-eye-24.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <Gap height={10} />
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/icons/icons8-lock-24.png')}
            style={styles.icon}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter yor new password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require('../../assets/icons/icons8-eye-24.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <Gap height={10} />
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/icons/icons8-lock-24.png')}
            style={styles.icon}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your New password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={require('../../assets/icons/icons8-eye-24.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <Gap height={30} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: -3,
    marginLeft: 10,
    fontSize: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FE724C',
    marginVertical: 30,
  },
  description: {
    textAlign: 'center',
    color: '#272D2F',
    fontSize: 14,
  },
  label: {
    color: '#FE724C',
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'relative', // Tambahkan posisi relatif pada inputWrapper
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
});

export default ForgetPassword;
