import { DEVICE, logo, onBoardingData, statusBar } from '@/src/assets/constants'
import Feather from '@expo/vector-icons/Feather'
import React, { useRef, useState } from 'react'
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
  const ref = useRef<FlatList>(null)

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / DEVICE.width)
    setCurrentSlideIndex(currentIndex)
  }

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex !== onBoardingData.length) {
      console.log('clicked')
      const offset = nextSlideIndex * DEVICE.width
      ref.current?.scrollToOffset({ offset })
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  console.log('33--', currentSlideIndex)

  const goToPreviousSlide = () => {
    const previousSlideIndex = currentSlideIndex - 1
    if (previousSlideIndex >= 0) {
      const offset = previousSlideIndex * DEVICE.width
      ref.current?.scrollToOffset({ offset })
      setCurrentSlideIndex(currentSlideIndex - 1)
    } else {
      ref.current?.scrollToOffset({ offset: 0 })
      setCurrentSlideIndex(0)
    }
  }

  return (
    <View
      className='flex-1 relative'
      style={{
        marginTop: statusBar,
      }}
    >
      <View className='flex-row justify-between items-center mx-4'>
        <Image source={logo} className='h-20 w-20 -ml-2' />
        <TouchableOpacity className='bg-gray--1 rounded-full h-[38px] w-[86px] flex items-center justify-center'>
          <Text className='font-montserrat'>skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={ref}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={onBoardingData}
        renderItem={({ item }) => (
          <View
            style={{
              width: DEVICE.width,
            }}
          >
            <View className='mx-4'>
              <Text className='text-2xl leading-10 font-lato tracking-widest'>
                Find best place {'\n'}to stay in
                <Text className='text-[#204D6C] font-extrabold'>
                  {' '}
                  good price
                </Text>
              </Text>
              <Text
                className='text-xs leading-5 tracking-widest mt-7 font-lato'
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
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <View className='mb-14 absolute bottom-0 w-full items-center justify-center'>
        <View className='flex-row gap-5'>
          {currentSlideIndex > 0 && (
            <TouchableOpacity
              onPress={goToPreviousSlide}
              className='h-[54px] w-[54px] rounded-full bg-white flex items-center justify-center'
            >
              <Feather name='arrow-left' size={24} color='black' />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={goToNextSlide}
            className='rounded-2xl bg-primary h-[54px] w-[190px] flex items-center justify-center'
          >
            <Text className='text-white text-base tracking-widest font-bold'>
              {currentSlideIndex === onBoardingData.length - 1
                ? 'Get Started'
                : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
