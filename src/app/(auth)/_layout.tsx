import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name='login' options={{ headerShown: false }} />
      <Stack.Screen name='loginform' />
      <Stack.Screen name='faq' />
      <Stack.Screen name='signup' />
      <Stack.Screen name='signupform' />
      <Stack.Screen name='otp' />
    </Stack>
  )
}
