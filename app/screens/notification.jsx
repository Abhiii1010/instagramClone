import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Youu from "../screens/You";
import Follow from '../screens/following'
const Notification = () => {
  const [activeTab, setActiveTab] = useState("You");

  return (
    <View style={styles.container}>
      {/* Tabs Header */}
      <View style={{alignContent:"center",alignItems:"center",paddingBottom:20 }}><Text style={{fontWeight:"bold",}}>Notification</Text></View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "You" && styles.activeTab]}
          onPress={() => setActiveTab("You")}
        >
          <Text
            style={
              activeTab === "You" ? styles.activeText : styles.inactiveText
            }
          >
            You
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === "Following" && styles.activeTab]}
          onPress={() => setActiveTab("Following")}
        >
          <Text
            style={
              activeTab === "Following"
                ? styles.activeText
                : styles.inactiveText
            }
          >
            Following
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      <View style={styles.content}>
        {activeTab === "You" ? (
          <Text style={styles.contentText}>
            <View>
              <Youu />
            </View>
          </Text>
        ) : (
          <Text style={styles.contentText}>
           <View>
            <Follow/>
           </View>
          </Text>
        )}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  activeText: {
    fontWeight: "bold",
    color: "black",
  },
  inactiveText: {
    color: "#888",
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
  },
});
