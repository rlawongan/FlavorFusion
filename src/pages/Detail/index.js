import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Gap} from '../../components';

const Detail = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://yummly2.p.rapidapi.com/feeds/list',
      params: {
        limit: '24',
        start: '0',
      },
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'f7ed1b7413msh3724bab0d4636e9p1cade6jsnaf876b6a2428',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // eslint-disable-next-line no-shadow
        const recipes = response.data.feed;
        setRecipes(recipes);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color="#FE724C" />
          <Gap height={30} />
          <Text style={styles.textLoading}>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text>Detail Component</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  spinnerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },
  textLoading: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: '#FE724C',
  },
});
