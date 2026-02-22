import { useAuthStore } from '@/src/utils/authStore'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Otp() {
  const { login } = useAuthStore()
  return (
    <View className='flex-1 items-center justify-center '>
      <Text>Otp</Text>
      <Button title='Sign in' onPress={login} />
    </View>
  )
}
