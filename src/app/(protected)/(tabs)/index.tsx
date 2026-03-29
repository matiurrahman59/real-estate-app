import {
  DEVICE,
  featureEstateList,
  OfferEstateList,
  topAgentList,
  topLocationList,
} from '@/src/assets/constants';
import { COLORS } from '@/src/assets/constants/colors';

import AppText from '@/src/components/AppText';
import FeaturedEstates from '@/src/components/FeaturedEstates';
import NearbyEstates from '@/src/components/NearbyEstates';
import OfferEstates from '@/src/components/OfferEstates';

import SectionHeader from '@/src/components/SectionHeader';
import TopAgents from '@/src/components/TopAgents';
import TopLocations from '@/src/components/TopLocations';
import {
  Feather,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const userImage = require('../../../assets/images/user-1.png');

const categories = ['All', 'House', 'Apartment', 'Modern', 'Villa'];

export default function HomeScreen() {
  const [selectedCategories, setSelectedCategories] = useState('All');

  return (
    <ScrollView className='bg-white'>
      <View className='bg-placeholder absolute -right-28 -top-60 h-80 w-80 rounded-full' />
      {/* location & user profile icon */}
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
          <TouchableOpacity
            onPress={() => router.push('/(protected)/notificationScreen')}
            className='border-2 border-green bg-white rounded-full h-[50px] w-[50px] items-center justify-center'
          >
            <View className='relative'>
              <Fontisto name='bell' size={20} color={COLORS.primary} />
              <View className='h-3 w-3 bg-white absolute -right-[2px] -top-[2px] items-center justify-center'>
                <View className='h-[6px] w-[6px] rounded-full bg-red' />
              </View>
            </View>
          </TouchableOpacity>

          <Image
            source={userImage}
            className='border-2 border-gray rounded-full h-[50px] w-[50px]'
          />
        </View>
      </View>

      {/* heading text */}
      <View className='mt-7 px-5'>
        <AppText className='text-[25px]'>
          Hey,{' '}
          <AppText bold color='tertiary' className='text-[25px]'>
            Jonathan!
          </AppText>
        </AppText>
        {/* <Text>Hey, Jonathan!</Text> */}
        <AppText className='text-[25px]'>Lets start exploring</AppText>
      </View>

      {/* Search input */}
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

      {/* Filter buttons group */}
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

      {/* offer sale section */}
      <View className='mt-8'>
        <OfferEstates offerEstatesList={OfferEstateList} />
      </View>

      {/* feature estates */}
      <View className='mt-6'>
        <SectionHeader title='featured Estates' buttonText='view all' />
        <FeaturedEstates featureEstateList={featureEstateList} />
      </View>

      {/* top locations */}
      <View className='mt-9'>
        <SectionHeader title='Top Locations' buttonText='explore' />
        <TopLocations topLocations={topLocationList} />
      </View>

      {/* top agents */}
      <View className='mt-9'>
        <SectionHeader title='Top Estate Agent' buttonText='explore' />
        <TopAgents topAgents={topAgentList} />
      </View>

      {/* nearby estates */}
      <View className='mt-9'>
        <SectionHeader title='Explore Nearby Estates' />
        <View className='mx-5'>
          <NearbyEstates nearbyEstateList={featureEstateList} />
        </View>
      </View>
    </ScrollView>
  );
}
