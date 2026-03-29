import React from 'react';
import { Image, View } from 'react-native';
import { topAgentList, topLocations } from '../assets/constants';
import AppText from './AppText';
import SectionHeader from './SectionHeader';

export default function NotificationList() {
  return (
    <>
      <View className='mt-5'>
        <View className='mx-5 flex-row items-center gap-3'>
          <View className='bg-primary items-center justify-center py-4 px-6 rounded-3xl'>
            <AppText color='white'>All</AppText>
          </View>
          <View className='bg-gray items-center justify-center py-4 px-6 rounded-3xl'>
            <AppText color='primary'>Review</AppText>
          </View>
          <View className='bg-gray items-center justify-center py-4 px-6 rounded-3xl'>
            <AppText color='primary'>Sold</AppText>
          </View>
          <View className='bg-gray items-center justify-center py-4 px-6 rounded-3xl'>
            <AppText color='primary'>House</AppText>
          </View>
        </View>
      </View>

      <View className='mt-9'>
        <SectionHeader title='Today' />
        <View className='mt-5 gap-3'>
          <View className='mx-5 bg-gray p-3 flex-row gap-3 rounded-3xl'>
            <Image
              source={{
                uri: topAgentList[0].imageUri,
              }}
              className='h-12 w-12 rounded-full border-2 border-white'
            />
            <View className='flex-1 gap-1'>
              <AppText bold font='raleway' size='small' color='primary'>
                {topAgentList[0].name}
              </AppText>
              <View>
                <AppText font='raleway' color='secondary'>
                  Just messaged you. Check the message in message tab.
                </AppText>
              </View>
              <AppText font='montserrat' size='xs' color='placeholder'>
                10 mins ago
              </AppText>
            </View>
          </View>

          <View className='mx-5 bg-gray p-3 flex-row gap-3 rounded-3xl'>
            <Image
              source={{
                uri: topAgentList[1].imageUri,
              }}
              className='h-12 w-12 rounded-full border-2 border-white'
            />
            <View className='flex-1 gap-1'>
              <AppText bold font='raleway' size='small' color='primary'>
                {topAgentList[1].name}
              </AppText>
              <View>
                <AppText font='raleway' color='secondary'>
                  Just giving 5 Star review on your listing Fair view Apartment
                </AppText>
              </View>
              <AppText font='montserrat' size='xs' color='placeholder'>
                40 mins ago
              </AppText>
            </View>

            <Image
              source={{
                uri: topLocations[0].imageUri,
              }}
              className='h-[50px] w-[60px] rounded-xl border-2 border-white'
            />
          </View>

          <View className='mx-5 bg-gray p-3 flex-row gap-3 rounded-3xl'>
            <Image
              source={{
                uri: topAgentList[2].imageUri,
              }}
              className='h-12 w-12 rounded-full border-2 border-white'
            />
            <View className='flex-1 gap-1'>
              <AppText bold font='raleway' size='small' color='primary'>
                {topAgentList[2].name}
              </AppText>
              <View>
                <AppText font='raleway' color='secondary'>
                  Just buy your listing Schoolview House
                </AppText>
              </View>
              <AppText font='montserrat' size='xs' color='placeholder'>
                4 hours ago
              </AppText>
            </View>
            <Image
              source={{
                uri: topLocations[0].imageUri,
              }}
              className='h-[50px] w-[60px] rounded-xl border-2 border-white'
            />
          </View>
        </View>
      </View>

      <View className='mt-9'>
        <SectionHeader title='Older notifications' />
        <View className='mx-5 gap-3'>
          <View className='bg-gray p-3 flex-row gap-3 rounded-3xl'>
            <Image
              source={{
                uri: topAgentList[2].imageUri,
              }}
              className='h-12 w-12 rounded-full border-2 border-white'
            />
            <View className='flex-1 gap-1'>
              <AppText bold font='raleway' size='small' color='primary'>
                {topAgentList[2].name}
              </AppText>
              <View>
                <AppText font='raleway' color='secondary'>
                  Just buy your listing Schoolview House
                </AppText>
              </View>
              <AppText font='montserrat' size='xs' color='placeholder'>
                4 hours ago
              </AppText>
            </View>
            <Image
              source={{
                uri: topLocations[0].imageUri,
              }}
              className='h-[50px] w-[60px] rounded-xl border-2 border-white'
            />
          </View>
        </View>
      </View>
    </>
  );
}
