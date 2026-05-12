import AppText from '@/src/components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ComponentProps } from 'react';
import { View } from 'react-native';
import { COLORS } from '../assets/constants/colors';

export default function PropertyNotFound({
  title,
  description,
  iconName,
}: {
  title?: string;
  description?: string;
  iconName?: ComponentProps<typeof Ionicons>['name'];
}) {
  return (
    <View className='flex-1 items-center justify-center'>
      <View className='items-center'>
        <View className='w-36 h-36 bg-green/10 rounded-full items-center justify-center'>
          <View className='w-10/12 h-5/6 bg-green/15 rounded-full items-center justify-center'>
            <LinearGradient
              colors={[COLORS.primary, COLORS.green]}
              style={{
                width: '83.333333%',
                height: '83.333333%',
                borderRadius: 9999,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name={iconName} size={24} color='white' />
            </LinearGradient>
          </View>
        </View>
        <View className='flex-row items-center gap-2 pt-3 pb-5'>
          <AppText bold color='tertiary' className='text-2xl'>
            {title}
          </AppText>
        </View>
        <AppText className='text-center'>{description}</AppText>
      </View>
    </View>
  );
}
