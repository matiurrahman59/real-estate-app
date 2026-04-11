import { facebookIcon, googleIcon, topAgentList } from '@/src/assets/constants';
import AppText from '@/src/components/AppText';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';

export default function EditProfileScreen() {
  return (
    <View className='bg-white flex-1'>
      {/* location button */}
      <View className='w-full py-5 items-center absolute z-50 bottom-0'>
        <Pressable className='bg-green rounded-lg items-center justify-center w-[80vw] h-[60px]'>
          <AppText bold size='medium' color='white'>
            Choose location
          </AppText>
        </Pressable>
      </View>

      <View className='mx-5'>
        <View className='mt-5 items-center'>
          <Image
            source={{ uri: topAgentList[0].imageUri }}
            className='h-[100px] w-[100px] rounded-full'
          />
        </View>

        <View className='mt-[30px] gap-4'>
          {/* Email and Password input */}
          <View className='bg-gray rounded-xl flex-row items-center relative'>
            <TextInput
              placeholder={topAgentList[0].name}
              className='pl-5 py-7 w-full text-sm font-semibold placeholder:text-placeholder'
            />
            <FontAwesome
              name='user-o'
              size={20}
              color='#252B5C'
              className='absolute right-4'
            />
          </View>

          <View className='bg-gray rounded-xl flex-row items-center relative'>
            <TextInput
              placeholder='matiur@email.com'
              keyboardType='email-address'
              className='pl-5 py-7 w-full text-sm font-semibold placeholder:text-placeholder'
            />
            <Ionicons
              name='mail-outline'
              size={20}
              color='#252B5C'
              className='absolute right-4'
            />
          </View>
        </View>

        {/* Social Media Buttons */}
        <View className='flex-row items-center justify-center mt-6  gap-2'>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={googleIcon} className='h-6 w-6' />
          </Pressable>
          <Pressable className='py-7 w-1/2 items-center rounded-3xl bg-gray'>
            <Image source={facebookIcon} className='h-6 w-6' />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
