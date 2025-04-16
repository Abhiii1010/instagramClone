import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const search = () => {
  const [data,setdata]=useState(undefined);
  const getApi= async()=>{
  const url="https://jsonplaceholder.typicode.com/posts/1";
  let result=await fetch(url);
  result= await result.json()
  setdata(result);
  }
useEffect(()=>{
  getApi()
},[])
  return (
    <View>
      <Text>search</Text>
      {
        data ? <View><Text style={{fontSize:20}}> hello word</Text></View> : null
      }
    </View>
  )
}

export default search

const styles = StyleSheet.create({})