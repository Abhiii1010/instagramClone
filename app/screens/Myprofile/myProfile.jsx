import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const MyProfile = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const menuItems = [
    { id: 1, name: 'Settings', icon: 'settings-outline' },
    { id: 2, name: 'Saved', icon: 'bookmark-outline' },
    { id: 3, name: 'Archive', icon: 'archive-outline' },
    { id: 4, name: 'QR Code', icon: 'qr-code-outline' },
    { id: 5, name: 'Close Friends', icon: 'people-outline' },
    { id: 6, name: 'Log Out', icon: 'log-out-outline' },
  ]

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.usernameContainer}>
          <Ionicons name='lock-closed-outline' size={20} style={styles.lockIcon}/>
          <Text style={styles.username}>AbhiAndroid</Text>
        </View>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name='menu-outline' size={24}/>
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        {/* Profile Pic and Stats */}
        <View style={styles.statsContainer}>
          <Image 
            source={require('../../../assets/images/storyImg/S1.png')} 
            style={styles.profilePic}
          />
          
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2M</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bioContainer}>
          <Text style={styles.name}>Software Developer</Text>
          <Text style={styles.bio}>Chasing Dream...</Text>  
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Highlights */}
        <View style={styles.highlightsContainer}>
          <View style={styles.highlightItem}>
            <Image 
              source={require('../../../assets/images/storyImg/S3.png')} 
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>New</Text>
          </View>
          <View style={styles.highlightItem}>
            <Image 
              source={require('../../../assets/images/storyImg/S1.png')} 
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Friends</Text>
          </View>
          <View style={styles.highlightItem}>
            <Image 
              source={require('../../../assets/images/storyImg/S3.png')} 
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Sport</Text>
          </View>
          <View style={styles.highlightItem}>
            <Image 
              source={require('../../../assets/images/storyImg/S3.png')} 
              style={styles.highlightImage}
            />
            <Text style={styles.highlightText}>Design</Text>
          </View>
        </View>
      </View>

      {/* Bottom Tabs */}
      <View style={{paddingTop:80}}>
      <TouchableOpacity style={styles.bottomTabs}>
        <Image source={require('../../../assets/images/storyImg/Tabs.png')}/>
      </TouchableOpacity>
      </View>
      {/* Drawer Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={drawerVisible}
        onRequestClose={toggleDrawer}
      >
        <TouchableOpacity 
          style={styles.drawerOverlay} 
          activeOpacity={1} 
          onPressOut={toggleDrawer}
        >
          <View style={styles.drawerContainer}>
            {menuItems.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.menuItem}
                onPress={() => {
                  // Handle menu item press
                  toggleDrawer()
                }}
              >
                <Ionicons name={item.icon} size={24} style={styles.menuIcon}/>
                <Text style={styles.menuText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockIcon: {
    marginRight: 5,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileSection: {
    padding: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 30,
  },
  stats: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  bioContainer: {
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  bio: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
  editButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  highlightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  highlightItem: {
    alignItems: 'center',
    width: 70,
  },
  highlightImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 12,
  },
  bottomTabs: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  drawerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
})