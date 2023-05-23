import {StyleSheet, Text, View, TextInput as Input, Image} from 'react-native';
import React, {useState} from 'react';

const TextInput = ({label, placeHolder, icon, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[styles.inputContainer, isFocused && styles.focusedContainer]}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Input
          placeholder={placeHolder}
          style={styles.textInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  focusedContainer: {
    borderColor: '#FE724C',
    borderBottomWidth: 2,
    borderRadius: 0,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    marginBottom: 6,
    color: '#FE724C',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 4,
  },
  icon: {
    marginRight: 8,
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
  },
});
