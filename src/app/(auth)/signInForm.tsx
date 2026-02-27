import { facebookIcon, formImage, googleIcon } from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { useState } from 'react'
import {
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className='flex-1 bg-white'>
      <Image
        source={formImage}
        className='w-full h-[175px]'
        resizeMode='contain'
      />
      <View className='px-7'>
        <AppText className='text-[25px] mt-5'>
          Let's{' '}
          <AppText bold color='secondary' className='text-[25px]'>
            Sign In
          </AppText>
        </AppText>
        <AppText size='small' className='mt-5'>
          quis nostrud exercitation ullamco laboris nisi ut
        </AppText>

        {/* Email and Password input */}
        <View className='mt-9 bg-gray rounded-xl flex-row items-center relative'>
          <Ionicons
            name='mail-outline'
            size={20}
            color='#252B5C'
            className='absolute right-4'
          />
          <TextInput
            placeholder='Email'
            keyboardType='email-address'
            className='pl-5 py-7 w-full text-sm font-semibold placeholder:text-placeholder'
          />
        </View>
        <View className='mt-4 bg-gray rounded-xl flex-row items-center relative'>
          <Ionicons
            name={showPassword ? 'lock-open-outline' : 'lock-closed-outline'}
            size={20}
            color='#252B5C'
            className='absolute right-4'
          />
          <TextInput
            secureTextEntry={!showPassword}
            placeholder='Password'
            className='pl-5 py-7 w-full  text-sm font-semibold placeholder:text-placeholder'
          />
        </View>

        {/* Button */}
        <View className='flex-row items-center justify-between mt-5'>
          <Pressable>
            <AppText bold font='raleway' size='xs' className='text-tertiary'>
              Forgot password?
            </AppText>
          </Pressable>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AppText bold font='raleway' size='xs' className='text-tertiary'>
              {showPassword ? 'Hide password' : 'Show Password'}
            </AppText>
          </TouchableOpacity>
        </View>

        {/* Divider line */}
        <View className='mt-24 flex-row items-center'>
          <View className='bg-[#ECEDF3] h-[1px] flex-grow' />
          <AppText className='p-3 text-[#A1A5C1] font-semibold'>OR</AppText>
          <View className='bg-[#ECEDF3] h-[1px] flex-grow' />
        </View>

        {/* Social Media Buttons */}
        <View className='flex-row items-center justify-center mt-6  gap-2'>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={googleIcon} className='h-6 w-6' />
          </Pressable>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={facebookIcon} className='h-6 w-6' />
          </Pressable>
        </View>

        <AppText size='xs' color='secondary' className='mt-20 text-center'>
          Don&apos;t have an account?{' '}
          <Link href='/(auth)/signUpForm'>
            <AppText bold size='xs' color='secondary'>
              Register
            </AppText>
          </Link>
        </AppText>
      </View>
    </View>
  )
}
