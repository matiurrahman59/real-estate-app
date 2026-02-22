import { useAuthStore } from '@/src/utils/authStore'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Profile() {
  const { logout, resetOnboarding } = useAuthStore()
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Sign out' onPress={logout} />
      <Button title='Reset Onboarding' onPress={resetOnboarding} />
    </View>
  )
}
