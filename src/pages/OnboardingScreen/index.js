import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import {Button} from '../../components';

import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      bottomBarHighlight
      onSkip={() => navigation.navigate('SignIn')}
      onDone={() => navigation.replace('SignIn')}
      pages={[
        {
          backgroundColor: '#EBEBEB',
          image: <Image source={require('../../assets/images/cook1.png')} />,
          title: 'Find Your Food',
          subtitle: 'Savour the flavour of find your favorite recipe',
        },
        {
          backgroundColor: '#EBEBEB',
          image: <Image source={require('../../assets/images/cook2.png')} />,
          title: 'Let`s Cook',
          subtitle:
            'Share moments, share prepare all the ingredients, and start cooking ',
        },
        {
          backgroundColor: '#EBEBEB',
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

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
