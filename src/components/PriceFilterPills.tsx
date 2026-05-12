import AppText from '@/src/components/AppText';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { PRICE_OPTIONS } from '../assets/constants/filterOptions';

type PillOption = {
  label: string;
  min: number | null;
  max: number | null;
};

type Props = {
  selected: PillOption | null;
  onSelect: (option: PillOption) => void;
};

export default function PriceFilterPills({ selected, onSelect }: Props) {
  return (
    <View className='flex-row flex-wrap gap-2'>
      {PRICE_OPTIONS.map((option) => {
        const isActive = selected?.label === option.label;
        return (
          <TouchableOpacity
            key={option.label}
            onPress={() => onSelect(option)}
            className={`px-4 py-2 rounded-full border ${
              isActive ? 'bg-tertiary border-tertiary' : 'bg-white border-gray'
            }`}
          >
            <AppText
              font='raleway'
              size='xs'
              bold
              color={isActive ? 'white' : 'placeholder'}
            >
              {option.label}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
