import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function BackButton() {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={router.back}
            className='h-[50px] w-[50px] rounded-full bg-gray items-center justify-center'
          >
            <Ionicons name='chevron-back-outline' size={18} color='black' />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
