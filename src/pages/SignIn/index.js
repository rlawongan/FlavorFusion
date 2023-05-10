import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Gap from '../../components/atoms/Gap';
import {SignHeader, TextInput, Button} from '../../components';

const SignIn = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelSignIn = () => {
    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };

  return (
    <View style={styles.page}>
      <SignHeader />
      <Gap height={10} />
      <Text style={styles.title}>Let's get started.</Text>
      <Gap height={25} />
      <Text style={styles.subTitle}>
        Discover New Flavors and Dishes with FlavorFusion
      </Text>
      <Gap height={40} />
      <View style={styles.container}>
        <TextInput
          label="Username"
          placeHolder="Your Username"
          value={userName}
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <TextInput
          label="Password"
          placeHolder="Your Password"
          value={password}
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <Gap height={12} />
        <TouchableOpacity>
          <Text>forget your password?</Text>
        </TouchableOpacity>
        <Gap height={29} />
        <Button label="Sign In" onPress={() => navigation.navigate('Home')} />
        <Gap height={11} />
        <Button label="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
    fontSize: 32,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    color: '#FE724C',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#272D2F',
  },
});
