import { localImageSource } from '@/src/utils/images'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

export default function OnBoardingFirstScreen() {
  return (
    <ImageBackground
      source={localImageSource}
      className='w-full h-full relative'
    >
      <LinearGradient
        colors={['rgba(33, 98, 138, .3)', 'rgba(35, 79, 104, 1)']}
        className='absolute w-full h-full'
      />

      <LinearGradient
        colors={['rgba(33, 98, 138, 0.0)', '#1F4C6B', '#1F4C6B']}
        locations={[0, 0.7, 1]}
        className='absolute w-full bottom-0 h-1/2'
      />

      <View className='flex-1 items-center justify-center '>
        {/* <Image source={logo} className='h-96 w-96' /> */}
        <Text className='text-white font-bold text-[36px]'>Rise</Text>
        <Text className='text-white font-bold text-[36px]'>Real Estate</Text>
      </View>

      <View className='absolute bottom-14 w-full items-center justify-center'>
        <Link
          href='/onboarding/final'
          className='bg-primary p-4 px-14 rounded-md'
        >
          <Text className=' text-white font-lato font-bold'>
            let&apos;s Start
          </Text>
        </Link>
        <Text className='mt-4 text-white text-[10px] font-raleway'>
          Made with love
        </Text>
        <Text className='text-white font-bold text-[10px] font-raleway'>
          v.1.0
        </Text>
      </View>
    </ImageBackground>
  )
}
