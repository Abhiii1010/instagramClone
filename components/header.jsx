import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Storynav from './storynav';
const Header = () => {
  return (
    <View>
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Camera-Icon.png')} 
        style={styles.icon}
      />
      <Image 
        source={require('../assets/images/Instagram-Logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.rightIcons}>
        <Image 
          source={require('../assets/images/IGTV.png')} 
          style={styles.icon}
        />
        <Image 
          source={require('../assets/images/Messanger.png')} 
          style={styles.icon}
        />
      </View>
      
    </View>
    <Storynav/>
    </View>
  );
};

export default Header;

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
