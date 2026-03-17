import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View } from 'react-native';
import { COLORS } from '../assets/constants/colors';

interface StarRatingProps {
  rating: number;
  size?: number;
  color?: string;
  emptyColor?: string;
}

const StarRating = ({
  rating,
  size = 12,
  color = COLORS.yellow,
  emptyColor = '#CCCCCC',
}: StarRatingProps) => {
  return (
    <View className='flex-row gap-[2px]'>
      {[1, 2, 3, 4, 5].map((star) => {
        const full = rating >= star;
        const half = !full && rating >= star - 0.5;

        return (
          <FontAwesome
            key={star}
            name={full ? 'star' : half ? 'star-half-o' : 'star-o'}
            size={size}
            color={full || half ? color : emptyColor}
          />
        );
      })}
    </View>
  );
};

export default StarRating;
