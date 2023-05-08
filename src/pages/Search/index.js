import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';

const Search = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
