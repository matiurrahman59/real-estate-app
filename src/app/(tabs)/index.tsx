import { DEVICE } from '@/src/assets/constants'
import Fontisto from '@expo/vector-icons/Fontisto'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const userImage = require('../../assets/images/user-1.png')

export default function HomeScreen() {
  return (
    <ScrollView className='bg-lime-200'>
      <View className='bg-placeholder absolute -right-28 -top-60 h-80 w-80 rounded-full' />
      <View
        className='flex-row items-center justify-between px-4'
        style={{
          marginTop: DEVICE.statusBar,
        }}
      >
        <Text>Location</Text>

        <View className='flex-row items-center justify-center gap-3'>
          <View className='border-2 border-green bg-white rounded-full h-[50px] w-[50px] items-center justify-center'>
            <View className='relative'>
              <Fontisto name='bell' size={20} color='#252B5C' />
              <View className='h-3 w-3 bg-white absolute -right-[2px] -top-[2px] items-center justify-center'>
                <View className='h-[6px] w-[6px] rounded-full bg-red' />
              </View>
            </View>
          </View>

          <Image
            source={userImage}
            className='border-2 border-gray rounded-full h-[50px] w-[50px]'
          />
        </View>
      </View>
    </ScrollView>
  )
}
