import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/images/image-placeholder.jpg')}
          style={styles.profile}
        />
        <Text style={styles.title}>Welcome, Renaldy</Text>
      </View>
      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Image
          source={require('../../assets/icons/icons8-lock-24.png')}
          style={styles.icon}
        />
        <Text style={styles.detailButtonText}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('../../assets/icons/icons8-love-24.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Favorite Food</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        <Image
          source={require('../../assets/icons/icons8-logout-24.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 100,
  },
  profileContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    color: '#FE7240',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  detailButtonText: {
    color: '#272D2F',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#272D2F',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Profile;
