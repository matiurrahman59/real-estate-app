import { useAuthStore } from '@/src/utils/authStore'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function HomeScreen() {
  const { hasCompleteOnboarding } = useAuthStore()
  return (
    <View>
      <Text className='py-4 bg-lime-400 pl-4 mt-2'>Home Screen</Text>
      <Button
        title='onboarding result'
        onPress={() => console.log(hasCompleteOnboarding)}
      />
    </View>
  )
}
