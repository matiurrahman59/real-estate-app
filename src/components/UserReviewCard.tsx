import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, View } from 'react-native';
import AppText from './AppText';
import StarRating from './StarRating';

type dhakaEstateList = {
  name: string;
  rating: number;
  coverImage: string;
  location: {
    city: string;
    address: string;
    lat: number;
    long: number;
  };
  reviews: {
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
  }[];
};

export default function UserReviewCard({
  propertyDetails: item,
}: {
  propertyDetails: dhakaEstateList;
}) {
  return (
    <View className=' mx-5 gap-[10px] border border-gray rounded-2xl'>
      <View className='ml-4 mt-[10px] flex-row items-center gap-[10px]'>
        {/* property image */}
        <Image
          source={{ uri: item.coverImage }}
          className='w-[74px] h-9 rounded-lg'
        />

        {/* property name & location */}
        <View className='gap-1'>
          <AppText bold size='xs'>
            {item.name}
          </AppText>
          <View className='flex-row items-center gap-[6px]'>
            <View className='flex-row items-center gap-1'>
              <AntDesign name='star' size={10} color='#234F68' />
              <AppText bold font='montserrat' className='text-[10px]'>
                {item.rating}
              </AppText>
            </View>
            <View className='flex-row gap-0.5 items-center'>
              <Ionicons name='location' size={10} color='#234F68' />
              <AppText color='secondary' className='text-[10px]'>
                {item.location.address}
              </AppText>
            </View>
          </View>
        </View>
      </View>

      <View className='p-[10px] bg-gray rounded-b-2xl flex-row gap-3'>
        {/* reviewers image */}
        <Image
          source={{
            uri: item.reviews[0].userImage,
          }}
          className='h-[50px] w-[50px] rounded-full'
        />
        <View className='flex-1 gap-1'>
          <View className='flex-row items-center justify-between'>
            {/* agent name */}
            <AppText bold font='raleway' size='small' color='primary'>
              {item.reviews[0].userName}
            </AppText>
            <View className='flex-row items-center'>
              <StarRating
                rating={item.reviews[0].rating}
                color='#234F68'
                size={10}
              />
              {/* <AntDesign name='star' size={10} color='#234F68' /> */}
            </View>
          </View>
          <AppText font='raleway' color='secondary'>
            {item.reviews[0].comment}
          </AppText>
          <AppText font='montserrat' size='xs' color='placeholder'>
            10 mins ago
          </AppText>
        </View>
      </View>
    </View>
  );
}
