import React from 'react';
import { Image, View } from 'react-native';
import { topAgentList } from '../assets/constants';
import AppText from './AppText';
import SectionHeader from './SectionHeader';

export default function MessageList() {
  return (
    <View className='mt-5'>
      <SectionHeader title='All chats' />
      <View className='mt-3 gap-3'>
        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[4].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[4].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[0].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[0].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[1].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[1].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
        <View className='mx-5 bg-gray flex-row items-center p-[10px] rounded-3xl gap-[10px]'>
          <Image
            source={{
              uri: topAgentList[2].imageUri,
            }}
            className='h-[50px] w-[50px] rounded-full border-2 border-white'
          />
          <View className='flex-1'>
            <AppText bold font='raleway' size='medium'>
              {topAgentList[2].name}
            </AppText>
            <AppText font='raleway' size='small'>
              tempor incididunt ut labore et dolore
            </AppText>
          </View>
          <View>
            <AppText font='montserrat' size='xs' color='placeholder'>
              11.00
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
}
