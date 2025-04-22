import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [search, setSearch] = useState();
  const [images, setImages] = useState([]);
  const API_KEY = 'KvuBid7Vza00NXpJO5Sl-TByXE9cFLSZ_BPzltHXE_Q';

  const handleSearch = (text) => {
    setSearch(text);
  };

  const fetchImages = async () => {
    try {
      let response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`
      );
      let data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
      <View>
      <Text style={styles.headerText}>Search</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          placeholderTextColor="#999"
          value={search}
          onChangeText={handleSearch}
        />
        <TouchableOpacity onPress={fetchImages}>
         <Ionicons name='search-outline' size={34} color={"color"}/>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>IGTV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Ionicons name="bag" size={20} color="black" />
            <Text style={styles.iconLabel}>Bag</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Style</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Sport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>Auto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text>See more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Search Results */}
      <ScrollView>
      <View style={styles.imageScroll}>
        {images.map((item, index) => (
          <Image
            key={index}
            source={{ uri: item.urls.small }}
            style={styles.image}
          />
        ))}
      </View>
      </ScrollView>
      </View>
    
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
    paddingVertical: 8,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  iconLabel: {
    marginLeft: 4,
  },
  imageScroll: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});
