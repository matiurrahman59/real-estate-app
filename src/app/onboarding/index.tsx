import AppText from '@/src/components/AppText'
import { localImageSource } from '@/src/utils/images'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, View } from 'react-native'

export default function OnBoardingFirstScreen() {
  return (
    <ImageBackground
      source={localImageSource}
      className='w-full h-full relative items-center justify-center'
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

      <View>
        {/* <Image source={logo} className='h-96 w-96' /> */}
        <AppText bold color='white' className='text-4xl' center>
          Rise{'\n'}Real Estate
        </AppText>
      </View>

      <View className='absolute bottom-14 w-full items-center justify-center'>
        <Link
          href='/onboarding/final'
          className='bg-green py-4 px-14 rounded-md'
        >
          <AppText bold size='medium' color='white' font='raleway'>
            let&apos;s Start
          </AppText>
        </Link>

        <View className='mt-4'>
          <AppText size='xs' color='white' font='raleway'>
            Made with love
          </AppText>
          <AppText bold size='xs' color='white' font='montserrat' center>
            v.1.0
          </AppText>
        </View>
      </View>
    </ImageBackground>
  )
}
