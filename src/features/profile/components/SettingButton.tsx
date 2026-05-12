import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function SettingButton() {
  return (
    <Stack.Screen
      options={{
        headerRight: () => (
          <TouchableOpacity className='h-[50px] w-[50px] rounded-full bg-gray items-center justify-center'>
            <Ionicons name='share-outline' size={20} color='black' />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
