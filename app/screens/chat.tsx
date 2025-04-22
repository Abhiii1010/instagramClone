import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Chat = () => {
  const router = useRouter(); // Move useRouter to the top level

  const handleBack = () => {
    router.back();
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons 
          style={styles.backIcon}
          onPress={handleBack}
          name='arrow-back-outline' 
          size={24}
        />
        <Text style={styles.title}>Chat</Text>
      </View>
      
      {/* Your chat content here */}
      
      <input style={{padding:10, borderRadius:15, borderColor:'grey'}} type="search" placeholder='search'  />

      <ScrollView>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/1.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/2.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/3.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/4.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/2.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/5.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/6.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/7.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/2.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/1.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatt}>
        <Image source={require('../../assets/images/chatting/2.png')}/>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backIcon: {
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatt:{
    width:"auto", padding:10, paddingLeft:10
  }
})