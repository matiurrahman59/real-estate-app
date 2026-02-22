import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function SignUpForm() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>SignUpForm</Text>
      <Link href='/(auth)/otp' className='mt-3 bg-slate-500 text-white p-4'>
        Go to OTP
      </Link>
    </View>
  )
}
