import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato'
import {
  Raleway_400Regular,
  useFonts as useRaleway,
} from '@expo-google-fonts/raleway'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import {
  Montserrat_400Regular,
  useFonts as useMontserrat,
} from '@expo-google-fonts/montserrat'

import '../../global.css'
import { useAuthStore } from '../utils/authStore'

export default function RootLayout() {
  const { isLoggedIn, hasCompleteOnboarding } = useAuthStore()

  const [latoFontLoaded] = useLato({ Lato_400Regular })
  const [ralewayFontLoaded] = useRaleway({ Raleway_400Regular })
  const [montserratFontLoaded] = useMontserrat({ Montserrat_400Regular })

  if (!latoFontLoaded || !ralewayFontLoaded || !montserratFontLoaded) {
    return null
  }

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
