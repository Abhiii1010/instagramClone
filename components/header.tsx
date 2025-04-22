import { StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { launchCamera } from 'react-native-image-picker';



const header = () => {
  const router = useRouter();
  const handleMessengerPress = () => {
    
    // Alert.alert('Messenger pressed!');
    router.push('/screens/chat');  
    
  };
  // const handlerReels=()=>{
  //   router.push('/screens/Reels')
  // }
  
  

  return (
    <View>
      <View style={styles.container}>
      <Ionicons name="camera-outline" size={32} color="black"/>
        
        <Image 
          source={require('../assets/images/Instagram-Logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        
        <View style={styles.rightIcons}>
          <TouchableOpacity>
        <Ionicons name="tv-outline" size={32} color="black" />
        </TouchableOpacity>

          <TouchableOpacity onPress={handleMessengerPress}>
          <Ionicons name="navigate-outline" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>

     
    </View>
  );
};

export default header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 40,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  rightIcons: {
    flexDirection: 'row',
  },
});
