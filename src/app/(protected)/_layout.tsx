import { Stack } from 'expo-router';
import React from 'react';

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{ headerTitleAlign: 'center', headerShadowVisible: false }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{ title: 'Home', headerShown: false }}
      />
      <Stack.Screen
        name='propertyDetailsScreen'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='property360ViewScreen'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='topLocation' options={{ headerTitle: '' }} />
      <Stack.Screen
        name='topLocationDetails'
        options={{ headerShown: false }}
      />
      <Stack.Screen name='topAgent' options={{ headerTitle: '' }} />
      <Stack.Screen
        name='topAgentDetails'
        options={{ headerTitle: 'Profile' }}
      />
      <Stack.Screen name='notificationScreen' options={{ headerTitle: '' }} />
      <Stack.Screen
        name='editProfileScreen'
        options={{ headerTitle: 'Edit Profile' }}
      />
      <Stack.Screen
        name='userReviewScreen'
        options={{ headerTitle: 'All reviews' }}
      />
    </Stack>
  );
}
