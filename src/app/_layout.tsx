import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import '../../global.css'
import { useAuthStore } from '../utils/authStore'

export default function RootLayout() {
  const { isLoggedIn, hasCompleteOnboarding } = useAuthStore()

  return (
    <React.Fragment>
      <StatusBar style='auto' animated />
      <Stack screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn && hasCompleteOnboarding}>
          <Stack.Screen name='(auth)/login.tsx' />
        </Stack.Protected>
        <Stack.Protected guard={!hasCompleteOnboarding}>
          <Stack.Screen name='onboarding' options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </React.Fragment>
  )
}
