import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchScreen from '../screens/searchScreen';

const Search = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SearchScreen />
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  scrollContent: {
    flexGrow: 1, 
    padding: 10, 
  },
});