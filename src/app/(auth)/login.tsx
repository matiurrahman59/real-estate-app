import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function SignInScreen() {
  return (
    <View className='flex-1 items-center justify-center '>
      <Text>LogInPage</Text>
      <Link
        href='/(auth)/loginform'
        className='mt-3 bg-slate-500 text-white p-4'
      >
        Go to Login Form
      </Link>
    </View>
  )
}
