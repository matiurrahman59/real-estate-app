import React from 'react';
import { TouchableOpacity } from 'react-native';
import { cn } from '../utils/cn';
import AppText from './AppText';

export const RATING_CATEGORIES = ['All', '1', '2', '3', '4', '5'];

type RatingPillProps = {
  item: string;
  index: number;
  isSelected: boolean;
  onPress: (item: string) => void;
};

export default function RatingPill({
  item,
  index,
  isSelected,
  onPress,
}: RatingPillProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      className={cn(
        'flex-row items-center gap-2 py-4 px-6 rounded-full',
        index === 0 && 'ml-5',
        index === RATING_CATEGORIES.length - 1 && 'mr-5',
        isSelected ? 'bg-tertiary' : 'bg-gray',
      )}
    >
      <AppText>⭐</AppText>
      <AppText
        bold={isSelected}
        size='xs'
        color={isSelected ? 'white' : 'secondary'}
      >
        {item}
      </AppText>
    </TouchableOpacity>
  );
}
