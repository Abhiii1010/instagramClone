import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const You = () => {
  return (
    <View>
     
      <View style={{borderBottomColor:"black"}}>
        <TouchableOpacity>
     <Image source={require('../../assets/images/storyImg/New.png')}/>
     </TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('../../assets/images/storyImg/Today.png')}/>
     </TouchableOpacity>
     <TouchableOpacity>
     <Image source={require('../../assets/images/storyImg/This Week.png')}/>
     </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default You

const styles = StyleSheet.create({})