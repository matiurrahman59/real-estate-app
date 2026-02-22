import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function LoginForm() {
  return (
    <View className='flex-1 items-center justify-center '>
      <Text>LoginForm</Text>
      <Link href='/(auth)/signup' className='mt-3 bg-slate-500 text-white p-4'>
        Go to Signup
      </Link>
    </View>
  )
}
