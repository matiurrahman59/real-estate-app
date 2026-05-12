import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import debounce from 'debounce';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { dhakaEstateList } from '../assets/constants';
import { propertyType } from '../types';

export default function SearchBar({
  setFilteredItems,
}: {
  setFilteredItems: React.Dispatch<React.SetStateAction<propertyType[]>>;
}) {
  const handleSearchInputChange = debounce((query: string) => {
    if (query.trim() === '') {
      setFilteredItems([]);
      return;
    } else {
      const filteredEstate = dhakaEstateList.filter((item) =>
        item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      );
      setFilteredItems(filteredEstate);
    }
  }, 300);

  return (
    <View className='mt-5 relative'>
      <Feather
        name='search'
        size={20}
        color='black'
        className='absolute z-10 left-4 top-1/2 -translate-y-1/2'
      />
      <TextInput
        className='pl-[46px] pr-[52px] py-7 rounded-[10px] bg-gray placeholder:text-sm placeholder:text-[#A1A5C1]'
        placeholder='Search House, Apartment, etc'
        onChangeText={handleSearchInputChange}
      />

      <SimpleLineIcons
        name='microphone'
        size={20}
        color='#A1A5C1'
        className='absolute z-10 right-4 top-1/2 -translate-y-1/2'
      />
      <View
        style={{
          width: StyleSheet.hairlineWidth,
        }}
        className='h-9 bg-[#A1A5C1] absolute z-10 right-[52px] top-1/2 -translate-y-1/2'
      />
    </View>
  );
}
