import {
  DEVICE,
  onBoardingData,
  OnBoardingDataProps,
} from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
import { useAuthStore } from '@/src/utils/authStore'
import { logo } from '@/src/utils/images'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import React, { useRef, useState } from 'react'
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native'

export default function OnboardingFinalScreen() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const { completeOnboarding } = useAuthStore()
  const ref = useRef<FlatList>(null)
  const router = useRouter()

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / DEVICE.width)
    setCurrentSlideIndex(currentIndex)
  }

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1
    if (nextSlideIndex !== onBoardingData.length) {
      const offset = nextSlideIndex * DEVICE.width
      ref.current?.scrollToOffset({ offset })
      setCurrentSlideIndex(currentSlideIndex + 1)
    } else {
      completeOnboarding()
      router.replace('/(auth)/signIn')
    }
  }

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
        marginTop: DEVICE.statusBar,
      }}
    >
      <View className='flex-row justify-between items-center mx-4'>
        <Image source={logo} className='h-24 w-24 -ml-2' />
        <TouchableOpacity
          onPress={() => router.replace('/(auth)/login')}
          className='bg-[#DFDFDF] rounded-full h-[38px] w-[86px] flex items-center justify-center'
        >
          {/* <Text className='font-montserrat'>skip</Text> */}
          <AppText font='montserrat' size='small'>
            skip
          </AppText>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={ref}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        data={onBoardingData}
        renderItem={({ item }: { item: OnBoardingDataProps }) => {
          const title = item.title.split('/n/')
          return (
            <View
              style={{
                width: DEVICE.width,
              }}
            >
              <View className='mx-4 mt-4'>
                <AppText className='text-[25px] leading-10 text-black'>
                  {title[0]}
                  <AppText
                    className='text-[25px] font-extrabold'
                    color='secondary'
                  >
                    {' '}
                    {title[1]}
                  </AppText>
                </AppText>
                <AppText
                  size='small'
                  color='secondary'
                  className='mt-7 leading-5'
                  style={{
                    width: DEVICE.width * 0.8,
                  }}
                >
                  {item.subText}
                </AppText>
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
          )
        }}
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
            className='rounded-2xl bg-green h-[54px] w-[190px] flex items-center justify-center'
          >
            <AppText
              bold
              size='medium'
              color='white'
              className='tracking-wider'
            >
              {currentSlideIndex === onBoardingData.length - 1
                ? 'Get Started'
                : 'Next'}
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
