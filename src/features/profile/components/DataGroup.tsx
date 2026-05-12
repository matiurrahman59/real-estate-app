import AppText from '@/src/components/AppText';
import { View } from 'react-native';

const data = [
  {
    label: 'Listings',
    quantity: 8,
  },
  {
    label: 'Sold',
    quantity: 30,
  },
  {
    label: 'Reviews',
    quantity: 13,
  },
];

export default function DataGroup() {
  return (
    <View className='mt-5 flex-row justify-between gap-[10px]'>
      {data.map((item) => (
        <View
          key={item.label}
          className='py-4 rounded-xl flex-1 items-center justify-center border border-gray'
        >
          <AppText bold>{item.quantity}</AppText>
          <AppText size='xs'>{item.label}</AppText>
        </View>
      ))}
    </View>
  );
}
