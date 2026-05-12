import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuthStore } from '../utils/authStore';
import { cn } from '../utils/cn';

export default function BookmarkButton({
  item,
  isFavorite,
  className,
}: {
  item: any;
  isFavorite: boolean;
  className?: string;
}) {
  const { addToFavorites, removeFromFavorites } = useAuthStore();
  return (
    <TouchableOpacity
      onPress={() => {
        if (isFavorite) {
          removeFromFavorites(item.id);
        } else {
          addToFavorites(item);
        }
      }}
      className={cn(
        'h-7 w-7 rounded-full items-center justify-center',
        className,
        isFavorite ? 'bg-green' : 'bg-white',
      )}
    >
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={12}
        color={isFavorite ? 'white' : '#EF4444'}
      />
    </TouchableOpacity>
  );
}
