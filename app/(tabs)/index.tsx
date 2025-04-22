import { StyleSheet, Text,Image, View, ScrollView } from 'react-native';
import React from 'react';
import Header from "../../components/header";
import StoryNav from "../../components/storyNav";
import ALLPOST from '../../components/AllPost';

const Index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StoryNav/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ALLPOST />
      </ScrollView>
    </View>

    
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
