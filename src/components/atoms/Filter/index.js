import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Filter = () => {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);

  const handleFilterPress = index => {
    setActiveFilterIndex(index);
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => handleFilterPress(0)}
        style={[
          styles.filterItem,
          activeFilterIndex === 0 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Appetizer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress(1)}
        style={[
          styles.filterItem,
          activeFilterIndex === 1 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Dessert</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress(2)}
        style={[
          styles.filterItem,
          activeFilterIndex === 2 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Main Course</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress(3)}
        style={[
          styles.filterItem,
          activeFilterIndex === 3 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Soup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress(4)}
        style={[
          styles.filterItem,
          activeFilterIndex === 4 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Pancake</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress(5)}
        style={[
          styles.filterItem,
          activeFilterIndex === 5 && styles.filterBoxActive,
        ]}>
        <Text style={styles.filterText}>Fried</Text>
      </TouchableOpacity>
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
