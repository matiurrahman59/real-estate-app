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
      <Stack.Screen name='notificationScreen' />
    </Stack>
  );
}
