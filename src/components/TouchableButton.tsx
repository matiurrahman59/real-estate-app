import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { TouchableOpacity } from 'react-native';
import { cn } from '../utils/cn';

export default function TouchableButton({
  iconName,
  iconSize = 20,
  iconColor,
  onPress,
  className,
}: {
  iconName: ComponentProps<typeof Ionicons>['name'];
  iconSize: number;
  iconColor: string;
  onPress?: () => void;
  className?: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'h-[50px] w-[50px] rounded-full bg-white items-center justify-center',
        className,
      )}
    >
      <Ionicons name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
}
