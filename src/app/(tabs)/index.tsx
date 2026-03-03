import { DEVICE } from '@/src/assets/constants'
import AppText from '@/src/components/AppText'
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

const userImage = require('../../assets/images/user-1.png')

const categories = ['All', 'House', 'Apartment', 'Modern', 'Villa']
const featureEstates = [
  {
    name: 'Sky Dandelions Apartment',
    rating: 4.9,
    location: 'Jakarta, Indonesia',
    price: 290,
    imageUri:
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=60',
  },
  {
    name: 'Sunset Villa Residences',
    rating: 4.7,
    location: 'Bali, Indonesia',
    price: 450,
    imageUri:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=60',
  },
  {
    name: 'Green Park Townhouse',
    rating: 4.8,
    location: 'Bandung, Indonesia',
    price: 320,
    imageUri:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=60',
  },
  {
    name: 'Ocean Breeze Condo',
    rating: 4.6,
    location: 'Surabaya, Indonesia',
    price: 210,
    imageUri:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=60',
  },
  {
    name: 'Golden Heights Tower',
    rating: 4.5,
    location: 'Medan, Indonesia',
    price: 380,
    imageUri:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=60',
  },
]

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
      <View>
        <View className='flex-row items-center justify-between px-5 mt-6 mb-5'>
          <AppText bold size='large'>
            Featured Estates
          </AppText>
          <TouchableOpacity>
            <AppText font='raleway' color='tertiary' className='font-semibold'>
              view all
            </AppText>
          </TouchableOpacity>
        </View>

        {/* feature items */}
        <FlatList
          data={featureEstates}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              className={` ${featureEstates.length - 1 === index && 'pr-5'} pl-5`}
            >
              <View className='bg-gray rounded-3xl'>
                <View className='p-2 flex-row gap-3'>
                  <Image
                    source={{
                      uri: item.imageUri,
                    }}
                    className='h-[140px] w-[134px] rounded-3xl'
                  />
                  <View className='max-w-32 justify-between py-2'>
                    <View className='gap-2'>
                      <AppText bold font='raleway' size='small'>
                        {item.name}
                      </AppText>
                      <View className='flex-row items-center gap-1'>
                        <AntDesign name='star' size={12} color='#FFC42D' />

                        <AppText bold font='raleway' size='xs'>
                          {item.rating}
                        </AppText>
                      </View>
                      <View className='flex-row gap-0.5 items-center'>
                        <Ionicons name='location' size={12} color='#234F68' />
                        <AppText
                          font='raleway'
                          color='secondary'
                          className='text-[10px]'
                        >
                          {item.location}
                        </AppText>
                      </View>
                    </View>

                    <View className='flex-row items-baseline'>
                      <AppText font='montserrat' bold>
                        $ {item.price}
                      </AppText>
                      <AppText font='montserrat' size='xs'>
                        /month
                      </AppText>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  )
}
