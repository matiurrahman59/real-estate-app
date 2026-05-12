import AppText from '@/src/components/AppText';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const categories = ['All', 'House', 'Apartment', 'Modern', 'Villa'];

type props = {
  selected: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

export default function PropertyFilterPills({ selected, onSelect }: props) {
  return (
    <View className='flex-row items-center flex-wrap gap-3'>
      {categories.map((item, index) => {
        const isActive = selected === item;
        return (
          <View key={index}>
            <TouchableOpacity
              key={index}
              onPress={() => onSelect(item)}
              className={`px-4 py-[10px] rounded-full border ${
                isActive
                  ? 'bg-tertiary border-tertiary'
                  : 'bg-white border-gray'
              }`}
            >
              <AppText
                font='raleway'
                size='xs'
                bold
                color={isActive ? 'white' : 'placeholder'}
              >
                {item}
              </AppText>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
