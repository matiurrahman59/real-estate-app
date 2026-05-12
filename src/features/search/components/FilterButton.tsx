import HeaderButton from '@/src/components/HeaderButton';
import { Stack } from 'expo-router';
import React from 'react';

export default function FilterButton({ onPress }: { onPress: () => void }) {
  return (
    <Stack.Screen
      options={{
        headerRight: () => (
          <HeaderButton
            Size={50}
            IconName='filter'
            IconSize={20}
            IconColor='gray'
            onPress={onPress}
          />
        ),
      }}
    />
  );
}
