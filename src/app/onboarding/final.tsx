import { useAuthStore } from '@/src/utils/authStore'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function OnboardingFinalScreen() {
  const { completeOnboarding } = useAuthStore()
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>OnboardingFinalScreen</Text>
      <Button title='Complete Onboarding' onPress={completeOnboarding} />
    </View>
  )
}
