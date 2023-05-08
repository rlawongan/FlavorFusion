import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Filter = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View style={[styles.filterItem, styles.filterBoxActive]}>
        <Text style={styles.filterText}>Appetizer</Text>
      </View>
      <View style={styles.filterItem}>
        <Text style={styles.filterText}>Dessert</Text>
      </View>
      <View style={styles.filterItem}>
        <Text style={styles.filterText}>Main Course</Text>
      </View>
      <View style={styles.filterItem}>
        <Text style={styles.filterText}>Soup</Text>
      </View>
      <View style={styles.filterItem}>
        <Text style={styles.filterText}>Pancake</Text>
      </View>
      <View style={styles.filterItem}>
        <Text style={styles.filterText}>Fried</Text>
      </View>
    </ScrollView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginRight: 12,
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: '#272D2F',
  },
  filterBoxActive: {
    backgroundColor: '#FAD156',
  },
});
