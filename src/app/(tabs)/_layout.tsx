import { Tabs } from 'expo-router'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerTitleAlign: 'center' }}>
      <Tabs.Screen name='index' options={{ title: 'Home' }} />
      <Tabs.Screen name='search' options={{ title: 'Search' }} />
      <Tabs.Screen name='favorite' options={{ title: 'Favorite' }} />
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
    </Tabs>
  )
}
