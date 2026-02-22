import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>SignUp</Text>
      <Link
        href='/(auth)/signupform'
        className='mt-3 bg-slate-500 text-white p-4'
      >
        Go to Signup Form
      </Link>
    </View>
  )
}
