import EstateHorizontalCard from '@/src/components/EstateHorizontalCard';
import EstateVerticalCard from '@/src/components/EstateVerticalCard';
import PropertyDisplayType from '@/src/components/PropertyDisplayType';
import PropertyQuantity from '@/src/components/PropertyQuantity';
import SearchBar from '@/src/components/SearchBar';
import TouchableButton from '@/src/components/TouchableButton';
import { propertyType } from '@/src/types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import PropertyNotFound from './../../components/PropertyNotFound';
import BottomModal from './components/BottomModal';

type propertyDisplayType = 'horizontal' | 'vertical';

export function SearchScreen() {
  const [activeTab, setActiveTab] = useState<propertyDisplayType>('horizontal');
  const [filteredEstates, setFilteredEstates] = useState<propertyType[]>([]);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openBottomSheetModal = () => bottomSheetModalRef.current?.present();

  return (
    <View className='flex-1 bg-white px-5'>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableButton
              iconName='filter'
              iconSize={20}
              iconColor='gray'
              onPress={openBottomSheetModal}
              className='bg-gray mr-5'
            />
          ),
        }}
      />
      <SearchBar setFilteredItems={setFilteredEstates} />

      <View className='mt-5 flex-row items-center justify-between'>
        <PropertyQuantity length={filteredEstates.length} />
        <PropertyDisplayType
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>

      {filteredEstates.length === 0 ? (
        <PropertyNotFound
          title='Search not found'
          description="Sorry, we can't find the real estates you are looking for. Maybe, a little spelling mistake?"
          iconName='add'
        />
      ) : (
        <View className='mt-5 flex-1'>
          {activeTab === 'horizontal' ? (
            <EstateVerticalCard estateList={filteredEstates} scrollEnabled />
          ) : (
            <EstateHorizontalCard estateList={filteredEstates} scrollEnabled />
          )}
        </View>
      )}

      <BottomModal ref={bottomSheetModalRef} />
    </View>
  );
}
