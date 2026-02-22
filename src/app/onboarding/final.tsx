import { DEVICE, logo, onBoardingData, statusBar } from '@/src/assets/constants'
import Feather from '@expo/vector-icons/Feather'
import React, { useState } from 'react'
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function OnboardingFinalScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1
    console.log(nextSlideIndex)
  }

  return (
    <View
      className='flex-1'
      style={{
        marginTop: statusBar,
      }}
    >
      <View className='flex-row justify-between items-center mx-4'>
        <Image source={logo} className='h-20 w-20 -ml-2' />
        <TouchableOpacity className='bg-gray--1 rounded-full h-[38px] w-[86px] flex items-center justify-center'>
          <Text>skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={onBoardingData}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View className='mx-4'>
              <Text className='text-2xl leading-10 font-medium tracking-widest'>
                Find best place {'\n'}to stay in
                <Text className='text-[#204D6C]'> good price</Text>
              </Text>
              <Text
                className='text-xs leading-5 tracking-widest mt-7'
                style={{
                  width: DEVICE.width * 0.8,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
              </Text>
            </View>

            <ImageBackground
              source={{
                uri: item.imageUri,
              }}
              style={{
                width: DEVICE.width - 28,
                marginHorizontal: 14,
              }}
              className='flex-1 justify-end items-center mt-7 rounded-[40px]  mb-4 overflow-hidden'
            >
              <View className='mb-14'>
                <View className='flex-row gap-5'>
                  {currentSlideIndex && (
                    <TouchableOpacity className='h-[54px] w-[54px] rounded-full bg-white flex items-center justify-center'>
                      <Feather name='arrow-left' size={24} color='black' />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={goToNextSlide}
                    className='rounded-2xl bg-primary h-[54px] w-[190px] flex items-center justify-center'
                  >
                    <Text className='text-white text-base tracking-widest font-bold'>
                      {currentSlideIndex === 2 ? 'Get Started' : 'Next'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  )
}
