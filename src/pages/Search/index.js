import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../components';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Filter, Gap} from '../../components';

const Search = ({navigation}) => {
  const [recipes, setRecipes] = useState([]);

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
        'X-RapidAPI-Key': 'd5754ca12amshe1b96e727bc37ccp1419e4jsn357a7c54784c',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // eslint-disable-next-line no-shadow
        const recipes = response.data.feed;
        setRecipes(recipes);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Gap height={5} />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
          <View style={styles.filterBox}>
            <Text style={styles.text}>Hello</Text>
          </View>
        </View>
      </View>
      <View style={styles.recipeWrapper}>
        {recipes.map((recipe, index) => (
          <View key={index} style={styles.recipeContainer}>
            {recipe.content.details && recipe.content.details.images
              ? recipe.content.details.images.map((image, i) => (
                  <ImageBackground
                    key={i}
                    source={{uri: image.hostedLargeUrl}}
                    style={styles.image}>
                    <View style={styles.favoriteContainer}>
                      <Image
                        source={require('../../assets/gifs/gif-heart.gif')}
                        style={styles.favoriteIcon}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      {recipe.content.details && recipe.content.details.name ? (
                        <View style={styles.textNameContainer}>
                          <Text style={styles.textName}>
                            {recipe.content.details.name.slice(0, 25)}{' '}
                            {/* mengambil 25 karakter pertama */}
                            {recipe.content.details.name.length > 25
                              ? '...'
                              : null}{' '}
                            {/* menampilkan tanda elipsis (...) jika karakter melebihi 25 */}
                          </Text>
                        </View>
                      ) : null}
                      {recipe.content.details &&
                      recipe.content.details.rating ? (
                        <View style={styles.textRatingContainer}>
                          <Image
                            style={styles.star}
                            source={require('../../assets/icons/icon-star48.png')}
                          />
                          <Text style={styles.textRating}>
                            {recipe.content.details.rating}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <TouchableOpacity
                      style={styles.detailButton}
                      onPress={() => navigation.navigate('Detail', {recipe})}>
                      <Text style={styles.detailButtonText}>See Detail</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                ))
              : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  filterContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  filterBox: {
    width: 92,
    height: 39,
    borderRadius: 10,
    margin: 8,
    backgroundColor: '#FAD156',
    justifyContent: 'center',
  },
  filterWrapper: {
    paddingHorizontal: 18,
  },
  recipeContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  recipeWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 370,
    height: 220,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FE724C',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 8,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272D2F',
    maxWidth: '70%',
  },
  textTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#272D2F',
  },
  textNameContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // ubah warna background dengan opacity 0.8
    borderRadius: 10,
    padding: 10,
  },
  textTimeContainer: {
    backgroundColor: 'rgba(250, 208, 46, 0.7)', // ubah warna background dengan opacity 0.8
    borderRadius: 10,
    padding: 10,
  },
  textRatingContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -130,
    left: 10,
    backgroundColor: '#FFFFFF',
    opacity: 1,
    borderRadius: 10,
    padding: 10,
  },
  textRating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#272D2F',
    marginLeft: 5,
  },
  star: {
    width: 20,
    height: 20,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 8,
    zIndex: 1, // agar icon hati tampil di depan gambar
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  detailButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FE724C',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  detailButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
  },
});
