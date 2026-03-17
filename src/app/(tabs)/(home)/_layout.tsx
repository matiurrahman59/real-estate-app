import { Stack } from 'expo-router';
import React from 'react';

export default function HomeStackLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='NotificationScreen' />
      <Stack.Screen name='MessageScreen' />
      <Stack.Screen name='CallScreen' />
      <Stack.Screen
        name='EstateDetailScreen'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
