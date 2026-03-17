import React from 'react';
import { Image, View } from 'react-native';
import AppText from './AppText';
import StarRating from './StarRating';

interface review {
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
}

interface reviewProps {
  reviews: review[];
}

export default function PropertyReviewLists({ reviews }: reviewProps) {
  return (
    <View className='mt-5 gap-[10px]'>
      {reviews.map((user, index) => (
        <View
          key={index}
          className='bg-gray rounded-3xl p-[10px] flex-row gap-[10px]'
        >
          <View className='absolute top-[10px] right-[10px]'>
            <StarRating rating={user.rating} size={10} />
          </View>
          <Image
            source={{ uri: user.userImage }}
            className='h-12 w-12 rounded-full border-2 border-white'
          />
          <View className='flex-1 gap-1'>
            <AppText bold font='raleway' size='small'>
              {user.userName}
            </AppText>
            <AppText font='raleway' size='xs' color='secondary'>
              {user.comment}
            </AppText>
            <AppText
              font='montserrat'
              color='placeholder'
              className='text-[10px]'
            >
              8 Days ago
            </AppText>
          </View>
        </View>
      ))}
    </View>
  );
}
