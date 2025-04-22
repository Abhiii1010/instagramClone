import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const LoginDetails = () => {
    const router = useRouter();
    
    const handleBack = () => {
        router.back(); // Or router.push("/") to go to specific route
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name='arrow-back-outline' size={24} color={"grey"}/>
      </TouchableOpacity>

      {/* Add your login form content here */}
      <View style={styles.content}>
        <Text style={styles.title}>Login Details</Text>
        {/* Form fields would go here */}
      </View>
    </View>
  )
}

export default LoginDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  backButton: {
    paddingTop: 10,
    paddingBottom: 20,
    alignSelf: 'flex-start'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333'
  }
})