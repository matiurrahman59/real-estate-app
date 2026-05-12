import { Ionicons } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { cn } from '../utils/cn';

type IoniconsName = ComponentProps<typeof Ionicons>['name'];

export default function HeaderButton({
  Size,
  IconName,
  IconSize,
  IconColor,
  onPress,
}: {
  Size: number;
  IconName: IoniconsName;
  IconSize: number;
  IconColor: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn('rounded-full bg-gray items-center justify-center')}
      style={{
        height: Size,
        width: Size,
      }}
    >
      <Ionicons name={IconName} size={IconSize} color={IconColor} />
    </TouchableOpacity>
  );
}
