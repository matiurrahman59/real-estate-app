import React from 'react';
import { View } from 'react-native';
import AppText from './AppText';

export default function PropertyQuantity({ length }: { length: number }) {
  return (
    <View className='flex-row items-center gap-1'>
      <AppText font='raleway' size='large'>
        Found
      </AppText>
      <AppText bold font='montserrat' size='large' color='tertiary'>
        {length}
      </AppText>
      <AppText font='raleway' size='large'>
        estates
      </AppText>
    </View>
  );
}
