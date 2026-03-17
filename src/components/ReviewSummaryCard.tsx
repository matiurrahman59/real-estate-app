import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, View } from 'react-native';
import { topAgentList } from '../assets/constants';
import { COLORS } from '../assets/constants/colors';
import AppText from './AppText';
import StarRating from './StarRating';

export default function ReviewSummaryCard() {
  return (
    <View className='bg-[#1F4C6BB3] rounded-3xl p-4 flex-row items-center justify-between'>
      <View className='bg-black/15 rounded-2xl'>
        <AntDesign
          name='star'
          size={23}
          color={COLORS.yellow}
          className='p-4'
        />
      </View>

      <View>
        <View className='flex-row items-center gap-[6px]'>
          <StarRating rating={4.9} />
          <AppText bold font='montserrat' size='large'>
            4.9
          </AppText>
        </View>
        <AppText color='secondary' font='raleway' size='xs'>
          From 112 reviewers
        </AppText>
      </View>

      <View className='flex-row'>
        <Image
          source={{
            uri: topAgentList[0].imageUri,
          }}
          className='h-7 w-7 rounded-full border-2 border-white'
        />
        <Image
          source={{
            uri: topAgentList[1].imageUri,
          }}
          className='h-7 w-7 rounded-full border-2 border-white -ml-2'
        />
        <Image
          source={{
            uri: topAgentList[2].imageUri,
          }}
          className='h-7 w-7 rounded-full border-2 border-white -ml-2'
        />
      </View>
    </View>
  );
}
