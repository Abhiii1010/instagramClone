import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const postStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1, // Ensures ScrollView expands
  },
  post: {
    marginBottom: 30,
  },
  postImg: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  iconRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  iconSpacing: {
    marginHorizontal: 15,
  },
  text: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
});

const AllPost = () => {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);

  return (
   
      <ScrollView 
        showsVerticalScrollIndicator={false}
        
      >
        {/* First Post */}
        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked1(!liked1)}>
              <Ionicons
                name={liked1 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked1 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Hey it's looking amazing...</Text>
        </View>

        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked1(!liked1)}>
              <Ionicons
                name={liked1 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked1 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Hey it's looking amazing...</Text>
        </View>
        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked1(!liked1)}>
              <Ionicons
                name={liked1 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked1 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Hey it's looking amazing...</Text>
        </View>

        {/* Second Post */}
        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked2(!liked2)}>
              <Ionicons
                name={liked2 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked2 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Another amazing post!</Text>
        </View>

        {/* Second Post */}
        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked2(!liked2)}>
              <Ionicons
                name={liked2 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked2 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Another amazing post!</Text>
        </View>
        {/* Second Post */}
        <View style={postStyles.post}>
          <Image
            source={require('../assets/post/Rectangle.png')}
            style={postStyles.postImg}
          />
          <View style={postStyles.iconRow}>
            <TouchableOpacity onPress={() => setLiked2(!liked2)}>
              <Ionicons
                name={liked2 ? 'heart' : 'heart-outline'}
                size={28}
                color={liked2 ? 'red' : '#000'}
              />
            </TouchableOpacity>
            <Ionicons
              name="chatbubble-outline"
              size={26}
              color="#000"
              style={postStyles.iconSpacing}
            />
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </View>
          <Text style={postStyles.text}>🔥🔥🔥 Another amazing post!</Text>
        </View>

        


        {/* Add more content to test scrolling */}
        <View style={{ height: 500, backgroundColor: 'lightblue' }}>
          
        </View>
      </ScrollView>
  
  );
};

export default AllPost;