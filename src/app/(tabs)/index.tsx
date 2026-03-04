import {
  DEVICE,
  featureEstateList,
  topAgents,
  topLocations,
} from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
import FeaturedEstates from '@/src/components/FeaturedEstates'
import SectionHeader from '@/src/components/SectionHeader'
import TopAgents from '@/src/components/TopAgents'
import TopLocations from '@/src/components/TopLocations'
import {
  AntDesign,
  Feather,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons'
import Fontisto from '@expo/vector-icons/Fontisto'
import React, { useState } from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

console.log(topLocations.length)

const userImage = require('../../assets/images/user-1.png')

const categories = ['All', 'House', 'Apartment', 'Modern', 'Villa']

export default function HomeScreen() {
  const [selectedCategories, setSelectedCategories] = useState('All')

  return (
    <ScrollView className='bg-white'>
      <View className='bg-placeholder absolute -right-28 -top-60 h-80 w-80 rounded-full' />
      <View
        className='flex-row items-center justify-between px-5'
        style={{
          marginTop: DEVICE.statusBar,
        }}
      >
        <TouchableOpacity className='flex-row items-center gap-2 border border-gray p-3 rounded-full'>
          <Ionicons name='location' size={15} color='black' />
          <Text>Jakarta, Indonesia</Text>
          <FontAwesome name='angle-down' size={15} color='black' />
        </TouchableOpacity>

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

      <View className='mt-7 px-5'>
        <AppText className='text-[25px]'>
          Hey,{' '}
          <AppText bold color='tertiary' className='text-[25px]'>
            Jonathan!
          </AppText>
        </AppText>
        {/* <Text>Hey, Jonathan!</Text> */}
        <AppText className='text-[25px]'>Let's start exploring</AppText>
      </View>

      <View className='mt-5 mx-5 relative'>
        <Feather
          name='search'
          size={20}
          color='black'
          className='absolute z-10 left-4 top-1/2 -translate-y-1/2'
        />
        <TextInput
          className='pl-[46px] pr-[52px] py-7 rounded-[10px] bg-gray placeholder:text-sm placeholder:text-[#A1A5C1]'
          placeholder='Search House, Apartment, etc'
        />

        <SimpleLineIcons
          name='microphone'
          size={20}
          color='#A1A5C1'
          className='absolute z-10 right-4 top-1/2 -translate-y-1/2'
        />
        <View
          style={{
            width: StyleSheet.hairlineWidth,
          }}
          className='h-9 bg-[#A1A5C1] absolute z-10 right-[52px] top-1/2 -translate-y-1/2'
        />
      </View>

      {/* Filter buttons */}
      <View className='mt-5'>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View
              className={`${categories.length - 1 === index ? 'pr-3' : null} pl-3`}
            >
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategories(item)}
                className={`${selectedCategories === item ? 'bg-tertiary' : 'bg-gray'} rounded-[20px]`}
              >
                <AppText
                  font='raleway'
                  className={`py-4 px-6 ${selectedCategories === item ? 'text-white font-bold' : 'text-primary font-semibold'}`}
                >
                  {item}
                </AppText>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* feature estates */}
      <View className='mt-6'>
        <SectionHeader title='featured Estates' buttonText='view all' />
        <FeaturedEstates featureEstateList={featureEstateList} />
      </View>

      {/* top locations */}
      <View className='mt-9'>
        <SectionHeader title='Top Locations' buttonText='explore' />
        <TopLocations topLocations={topLocations} />
      </View>

      {/* top locations */}
      <View className='mt-9'>
        <SectionHeader title='Top Estate Agent' buttonText='explore' />
        <TopAgents topAgents={topAgents} />
      </View>

      {/* nearby estates */}
      <View className='mt-9'>
        <SectionHeader title='Explore Nearby Estates' />
        <View className='mx-5 flex-row flex-wrap gap-2'>
          {featureEstateList.map((item, index) => (
            <View
              key={index}
              className='bg-gray rounded-3xl'
              style={{
                width: (DEVICE.width / 2) * 0.88,
                overflow: 'hidden',
              }}
            >
              <View className='p-2'>
                <View>
                  <Image
                    source={{
                      uri: item.imageUri,
                    }}
                    className='w-full h-40 rounded-xl'
                  />
                </View>
                <View className='pt-[10px] px-2'>
                  <AppText bold size='xs' font='raleway'>
                    {item.name}
                  </AppText>
                  <View className='flex-row items-center gap-[6px] mt-[10px]'>
                    <View className='flex-row items-center gap-1'>
                      <AntDesign name='star' size={10} color='#FFC42D' />
                      <AppText bold font='montserrat' className='text-[10px]'>
                        {item.rating}
                      </AppText>
                    </View>
                    <View className='flex-row gap-0.5 items-center'>
                      <Ionicons name='location' size={10} color='#234F68' />
                      <AppText
                        font='raleway'
                        color='secondary'
                        className='text-[10px]'
                        numberOfLines={2}
                      >
                        {item.location.city}
                      </AppText>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
