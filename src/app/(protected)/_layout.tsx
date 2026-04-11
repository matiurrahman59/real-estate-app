import { Stack } from 'expo-router';
import React from 'react';

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
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
      <Stack.Screen name='notificationScreen' options={{ headerTitle: '' }} />
      <Stack.Screen
        name='editProfileScreen'
        options={{ headerTitle: 'Edit Profile', headerShadowVisible: false }}
      />
      <Stack.Screen
        name='userReviewScreen'
        options={{ headerTitle: 'All reviews', headerShadowVisible: false }}
      />
    </Stack>
  );
}
