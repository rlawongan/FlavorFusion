import React from 'react';
import {View, Image, ImageBackground, Text, StyleSheet} from 'react-native';
import {ImagePlaceHolder, LogoSmall} from '../../../assets';
import {Gap, SearchBar} from '../../atoms';

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image source={LogoSmall} style={styles.logo} />
        </View>
        <View style={styles.profileContainer}>
          <Image source={ImagePlaceHolder} style={styles.profile} />
        </View>
      </View>
      <SearchBar placeholder="Find your food" placeholderTextColor="#9EADBA" />
      <Gap height={15} />
      <View style={styles.imageHeaderWrapper}>
        <ImageBackground
          source={require('../../../assets/images/header-image.png')}
          style={styles.imageHeader}
          borderRadius={10}>
          <Text style={styles.text}>Welcome Back!</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    marginLeft: 18,
  },
  logo: {
    width: 95,
    height: 58,
  },
  profileContainer: {
    marginRight: 11,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  imageHeaderWrapper: {
    paddingHorizontal: 18,
    alignItems: 'center',
  },
  imageHeader: {
    width: 375,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#272D2F',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Header;
