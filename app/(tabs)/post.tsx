import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AllPost from '../screens/AllPost'

const post = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView style={{flexGrow:1}}>
   <AllPost/>
   </ScrollView>
     </View>
   
  )
}

export default post