import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Button = ({
  label,
  onPress,
  color = '#FE724C',
  textColor = '#FFFFFF',
  icon,
}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      onPress={onPress}
      activeOpacity={0.7}>
      {icon && (
        <View style={styles.iconContainer}>
          {icon === 'facebook' && (
            <Image
              source={require('../../../assets/icons/Facebook.png')}
              style={styles.icon}
            />
          )}
          {icon === 'google' && (
            <Image
              source={require('../../../assets/icons/Google.png')}
              style={styles.iconGoogle}
            />
          )}
        </View>
      )}
      <Text style={styles.buttonText(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    elevation: 5,
  }),
  buttonText: textColor => ({
    color: textColor,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Roboto-Medium',
  }),
  iconContainer: {
    position: 'absolute',
    left: 40,
    top: 14,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  iconGoogle: {
    width: 24,
    height: 24,
  },
});
