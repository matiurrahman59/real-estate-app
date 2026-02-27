import AppText from '@/src/components/AppText'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native'

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen options={{ headerShown: true, headerTitle: '' }} />
      <View className='px-5'>
        <AppText className='text-[25px] mt-5'>
          Create your{' '}
          <AppText bold color='secondary' className='text-[25px]'>
            account
          </AppText>
        </AppText>
        <AppText size='small' className='mt-5'>
          quis nostrud exercitation ullamco laboris nisi ut
        </AppText>

        {/* Email and Password input */}
        <View className='mt-9 bg-gray rounded-xl flex-row items-center relative'>
          <TextInput
            placeholder='Full name'
            className='pl-5 py-7 w-full text-sm font-semibold placeholder:text-placeholder'
          />
          <FontAwesome
            name='user-o'
            size={20}
            color='#252B5C'
            className='absolute right-4'
          />
        </View>
        <View className='mt-9 bg-gray rounded-xl flex-row items-center relative'>
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            className='pl-5 py-7 w-full text-sm font-semibold placeholder:text-placeholder'
          />
          <Ionicons
            name='mail-outline'
            size={20}
            color='#252B5C'
            className='absolute right-4'
          />
        </View>
        <View className='mt-4 bg-gray rounded-xl flex-row items-center relative'>
          <TextInput
            secureTextEntry={!showPassword}
            placeholder='Password'
            className='pl-5 py-7 w-full  text-sm font-semibold placeholder:text-placeholder'
          />
          <Ionicons
            name={showPassword ? 'lock-open-outline' : 'lock-closed-outline'}
            size={20}
            color='#252B5C'
            className='absolute right-4'
          />
        </View>

        {/* Button */}
        <View className='flex-row items-center justify-between mt-5'>
          <Pressable>
            <AppText bold font='raleway' size='xs' className='text-tertiary'>
              Terms of service
            </AppText>
          </Pressable>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AppText bold font='raleway' size='xs' className='text-tertiary'>
              {showPassword ? 'Hide password' : 'Show Password'}
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Button  */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/otp')}
          className='mt-10 w-10/12 flex-row items-center justify-center  self-center gap-2 bg-green py-5 rounded-xl'
        >
          <AppText bold color='white'>
            Register
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  )
}
