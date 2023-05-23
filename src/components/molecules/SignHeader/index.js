import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Logo} from '../../../assets';

const SignHeader = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
};

export default SignHeader;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingTop: 30,
    height: 106,
  },
  logo: {
    width: 160,
    height: 106,
  },
});
