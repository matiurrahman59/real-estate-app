import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';

import EstateHorizontalCard from '@/src/components/EstateHorizontalCard';
import EstateVerticalCard from '@/src/components/EstateVerticalCard';
import PropertyDisplayType from '@/src/components/PropertyDisplayType';
import PropertyNotFound from '@/src/components/PropertyNotFound';
import PropertyQuantity from '@/src/components/PropertyQuantity';
import TouchableButton from '@/src/components/TouchableButton';
import { useAuthStore } from '@/src/utils/authStore';

type propertyDisplayType = 'horizontal' | 'vertical';

export function FavoriteScreen() {
  const [activeTab, setActiveTab] = useState<propertyDisplayType>('horizontal');
  const { favoriteProperties, clearFavorites } = useAuthStore();

  const clearAllFavorites = () => {
    Alert.alert(
      'Clear All Favorites',
      'Are you sure you want to clear all favorite properties?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => clearFavorites(),
        },
      ],
    );
  };

  return (
    <View className='px-5 flex-1 bg-white'>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableButton
              iconName='trash'
              iconSize={20}
              iconColor='gray'
              onPress={clearAllFavorites}
              className='bg-gray mr-5'
            />
          ),
        }}
      />
      <View className='mt-5 flex-row items-center justify-between'>
        <PropertyQuantity length={favoriteProperties.length} />
        <PropertyDisplayType
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>

      {favoriteProperties.length === 0 ? (
        <PropertyNotFound
          title='Your favorite page is empty '
          description='Click add button above to start exploring and choose your favorite estates.'
          iconName='add'
        />
      ) : (
        <View className='mt-5 flex-1'>
          {activeTab === 'horizontal' ? (
            <EstateVerticalCard estateList={favoriteProperties} />
          ) : (
            <EstateHorizontalCard estateList={favoriteProperties} />
          )}
        </View>
      )}
    </View>
  );
}
