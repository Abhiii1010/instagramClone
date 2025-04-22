import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  ScrollView, TouchableOpacity,
  Text,
} from 'react-native';

const stories = [
  { id: '1', name: 'Your Story', image: require('../assets/images/storyImg/MyStory.png') },
  { id: '2', name: 'John', image: require('../assets/images/storyImg/Live.png') },
  { id: '3', name: 'Anna', image: require('../assets/images/storyImg/S1.png') },
  { id: '4', name: 'Mark', image: require('../assets/images/storyImg/S2.png') },
  { id: '5', name: 'Lisa', image: require('../assets/images/storyImg/S3.png') },
  { id: '6', name: 'Mike', image: require('../assets/images/storyImg/S1.png') },
  { id: '7', name: 'Jane', image: require('../assets/images/storyImg/S2.png') },
];

const StoryNav = () => {
  return (
    <View style={styles.storiesContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
      >
        {stories.map((story) => (
          <TouchableOpacity key={story.id} style={styles.storyItem}>
            <Image 
              source={story.image} 
              style={styles.storyImage} 
              resizeMode="contain"
            />
            <Text style={styles.storyName}>{story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  horizontalScroll: {
    paddingHorizontal: 8,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 8,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#c13584',
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
});

export default StoryNav;
