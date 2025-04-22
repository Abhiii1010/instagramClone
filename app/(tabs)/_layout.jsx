import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown:false ,tabBarShowLabel:false}}>
      <Tabs.Screen
       name="index"
        options={{ title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />),
         }}
         />
      <Tabs.Screen
      
       name="search" 
       options={{ title: 'search',
        tabBarIcon:({color,size})=>(
          <Ionicons name='search' size={size} color={color}/>
        ),
        }}  />
      <Tabs.Screen name="post" options={{ title: 'post',
         tabBarIcon:({color,size})=>(
          <Ionicons name='add' size={size} color={color}/>
        ),
       }}  />
      <Tabs.Screen name="likes" options={{ title: 'likes',
         tabBarIcon:({color,size})=>(
          <Ionicons name='heart-outline' size={size} color={color}/>
        ),
       }}  />
      <Tabs.Screen name="profile" options={{ title: 'profile',
         tabBarIcon:({color,size})=>(
          <Ionicons name='person-outline' size={size} color={color}/>
        ),
       }}  />
    </Tabs>
  );
}
