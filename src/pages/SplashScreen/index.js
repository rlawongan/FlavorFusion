/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {View, Image} from 'react-native';

// function SplashS() {
//   return (
//     <View>
//       <Image
//         source={require('../../images/fix-logo.png')}
//         style={{width: 250, height: 250, marginTop: 200, marginLeft: 75}}
//       />
//     </View>
//   );
// }

// export default SplashS;
import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/gifs/animated-logo4.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
