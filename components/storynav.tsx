import { StyleSheet, View, Image, ScrollView, Text } from 'react-native';
import React from 'react';

// Add your story data here
const stories = [
  { name: 'Your Story', image: require('../assets/images/storyImg/MyStory.png') },
  { name: 'John', image: require('../assets/images/storyImg/Live.png') },
  { name: 'Anna', image: require('../assets/images/storyImg/S1.png') },
  { name: 'Mark', image: require('../assets/images/storyImg/S2.png') },
  { name: 'Lisa', image: require('../assets/images/storyImg/S3.png') },
  { name: 'Mike', image: require('../assets/images/storyImg/S1.png') },
  { name: 'Jane', image: require('../assets/images/storyImg/S2.png') },
];

const StoryNav = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story) => (
           
          <View style={styles.storyItem}>
            <Image source={story.image} style={styles.storyImage} />
            <Text style={styles.storyName}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StoryNav;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#c13584', // IG story ring color
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
});
