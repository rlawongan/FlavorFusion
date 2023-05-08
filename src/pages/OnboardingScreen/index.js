import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import {Button} from '../../components';

const OnboardingScreen = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('SignIn'); // Ganti 'SignIn' dengan nama screen SignIn Anda
  };

  return (
    <Onboarding
      bottomBarHighlight
      onDone={() => navigation.replace('SignIn')}
      pages={[
        {
          backgroundColor: '#FFFFFF',
          image: <Image source={require('../../assets/images/cook1.png')} />,
          title: 'Find Your Food',
          subtitle: 'Savour the flavour of find your favorite recipe',
        },
        {
          backgroundColor: '#FFFFFF',
          image: <Image source={require('../../assets/images/cook2.png')} />,
          title: 'Let`s Cook',
          subtitle:
            'Share moments, share prepare all the ingredients, and start cooking ',
        },
        {
          backgroundColor: '#FFFFFF',
          image: <Image source={require('../../assets/images/cook3.png')} />,
          title: 'Enjoy Your Food',
          subtitle:
            'Long life enjoy the taste of healthy and nutritious home cooking ',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
