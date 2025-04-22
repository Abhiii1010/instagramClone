import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const AllPost = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={{justifyContent:'center', alignItems:'center', textAlign:'center', fontWeight:700}}>AllPost</Text>
        <View style={{flexWrap:'cover'}}>
        <Image style={styles.image} source={require('../screens/AllPostImg/2.png')}/>
        <Image style={styles.image} source={require('../screens/AllPostImg/3.png')}/>
        <Image  style={styles.image} source={require('../screens/AllPostImg/4.png')}/>
        <Image  style={styles.image} source={require('../screens/AllPostImg/5.png')}/>
        <Image  style={styles.image} source={require('../screens/AllPostImg/7.png')}/>
        <Image style={styles.image} source={require('../screens/AllPostImg/8.png')}/>
        <Image style={styles.image} source={require('../screens/AllPostImg/9.png')}/>
        <Image style={styles.image} source={require('../screens/AllPostImg/10.png')}/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Ensure background is visible
  },
  scrollContent: {
    flexGrow: 1, // Ensures scrollable area
    padding: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: "100%",
    height: 200,
    margin: 5,
  },
});

export default AllPost;