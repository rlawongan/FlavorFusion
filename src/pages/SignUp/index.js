import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Gap from '../../components/atoms/Gap';
import {SignHeader, TextInput, Button} from '../../components';
const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SignHeader />
      <Gap height={30} />
      <View style={styles.container}>
        <TextInput label="Username" placeHolder="Your Username" />
        <Gap height={16} />
        <TextInput label="email address" placeHolder="Your Email" />
        <Gap height={16} />
        <TextInput label="Password" placeHolder="Your Password" />
        <Gap height={35} />
        <Button label="Sign Up" onPress={() => navigation.navigate('SignIn')} />
        <Gap height={15} />
        <View style={styles.line}></View>
        <Gap height={15} />
        <Button
          label="Sign Up with Facebook"
          color="#1877F2"
          onPress={() => navigation.navigate('Home')}
        />
        <Gap height={15} />
        <Button
          style={styles.google}
          label="Sign Up with Google"
          color="#D7D7D7"
          textColor="#272D2F"
          onPress={() => navigation.navigate('Home')}
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
    paddingHorizontal: 21,
  },
});
