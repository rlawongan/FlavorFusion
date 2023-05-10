import {StyleSheet, View, TextInput, Image} from 'react-native';
import React from 'react';

const SearchBar = ({placeholder, placeholderTextColor}) => {
  return (
    <View style={styles.searchInputWrapper}>
      <View style={styles.searchIconWrapper}>
        <Image
          source={require('../../../assets/icons/icon-search30.png')}
          style={styles.searchIcon}
        />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInputWrapper: {
    marginTop: 15,
    paddingHorizontal: 18,
  },
  searchIconWrapper: {
    position: 'absolute',
    width: 32,
    height: 32,
    left: 30,
    top: 12,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#9EADBA',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    paddingLeft: 45,
  },
});
