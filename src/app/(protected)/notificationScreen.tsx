import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotificationScreen() {
  return (
    <View className='flex-1  bg-white'>
      <View className='px-5'>
        <View className='flex-row justify-between bg-gray--3 rounded-full px-2 py-[9px]'>
          <TouchableOpacity className='flex-auto items-center justify-center'>
            <Text className='text-xs font-semibold leading-3 tracking-normal font-lato px-12 '>
              Notification
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
