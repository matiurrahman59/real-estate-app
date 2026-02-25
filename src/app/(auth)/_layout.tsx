import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center', headerShown: false }}>
      <Stack.Screen name='signIn' />
      <Stack.Screen name='signInForm' />
      <Stack.Screen name='faq' />
      <Stack.Screen name='signUp' />
      <Stack.Screen name='signUpForm' />
      <Stack.Screen name='otp' />
    </Stack>
  )
}
