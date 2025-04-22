import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const LoginPage = () => {
  const router = useRouter();
  
  // const handleLogin = () => {
  //   router.push("/screens/profile/LoginDetails");
  // }

  return (
    <View style={styles.container}>
      {/* Instagram Logo */}
      <View style={styles.logoContainer}>
        {/* <Image 
          source={require('../../../assets/images/Instagram-Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        /> */}
      </View>

      {/* Profile Picture and Login Button */}
      <View style={styles.loginContainer}>
        {/* <Image 
          source={require('../../../assets/images/storyImg/S1.png')}
          style={styles.profileImage}
        />
         */}
        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.switchAccount}>
          <Text style={styles.switchAccountText}>Switch account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 80,
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#3797EF',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  switchAccount: {
    marginTop: 430,
  },
  switchAccountText: {
    color: '#3797EF',
    fontWeight: '600',
    fontSize: 14,
  },
});