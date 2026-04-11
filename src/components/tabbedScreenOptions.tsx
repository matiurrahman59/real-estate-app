import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { View } from 'react-native';

type IoniconsName = ComponentProps<typeof Ionicons>['name'];

const tabBarOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#234F68',
  tabBarInactiveTintColor: '#252B5C',
  tabBarHideOnKeyboard: true,
} as const;

export default function tabbedScreenOptions({
  route,
}: {
  route: { name: string };
}) {
  return {
    headerStyle: {
      elevation: 0,
    },
    headerTitleStyle: {
      color: '#252B5C',
      fontSize: 18,
    },

    tabBarStyle: {
      borderTopWidth: 0,
      elevation: 0,
    },

    ...tabBarOptions,

    tabBarIcon: ({
      focused,
      color,
      size,
    }: {
      focused: boolean;
      color: string;
      size: number;
    }) => {
      let iconName: IoniconsName = 'home';

      if (route.name === 'index') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'search') {
        iconName = focused ? 'search' : 'search-outline';
      } else if (route.name === 'favorite') {
        iconName = focused ? 'heart' : 'heart-outline';
      } else if (route.name === 'profile') {
        iconName = focused ? 'person' : 'person-outline';
      }

      return (
        <View className='items-center gap-1'>
          <Ionicons name={iconName} size={size} color={color} />
          {focused && (
            <View className='h-[6px] w-[6px] bg-secondary rounded-full'></View>
          )}
        </View>
      );
    },
  };
}
